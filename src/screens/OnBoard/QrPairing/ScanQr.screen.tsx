import React, { useCallback, useEffect, useState } from 'react'
import { Linking, StyleSheet, View } from 'react-native'
import {
  Button,
  ConnectRequestSheet,
  FullScreenView,
  HeaderBar,
  TextBold,
  TextRegular,
} from '@components'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import { Camera, useCameraDevices } from 'react-native-vision-camera'
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner'
import { useConnect } from '@hooks'
import { useUserSelector } from '@store'

const ScanQrScreen = () => {
  const devices = useCameraDevices()
  const [remoteIp, setRemoteIp] = useState<string>('')
  const [remotePort, setRemotePort] = useState<string>('')
  const [remoteDeviceName, setRemoteDeviceName] = useState<string>('')
  const [remotePairToken, setRemotePairToken] = useState<string>('')
  const [remoteUserId, setRemoteUserId] = useState<string>('')

  const device = devices.back
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  })

  const requestCameraPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermission()
    // console.log(`Camera permission status: ${permission}`)
    if (permission === 'denied') await Linking.openSettings()
  }, [])

  useEffect(() => {
    requestCameraPermission()
  }, [])

  useEffect(() => {
    barcodes.map((barcode, idx) => {
      if (barcode.displayValue) {
        const data = JSON.parse(barcode.displayValue)
        if (!remoteIp) {
          setRemoteUserId(data.userId)
          setRemoteIp(data.ipServer)
          setRemoteDeviceName(data.deviceName)
          setRemotePairToken(data.pairToken)
          setRemotePort(data.port)
        }
      }
    })
  }, [barcodes])

  return (
    <FullScreenView>
      <HeaderBar showBackButton />
      <View style={styles.parentContainer}>
        <View style={styles.upperContainer}>
          <TextBold style={{ fontSize: RFValue(18), marginBottom: 10 }}>
            Scan your partners code
          </TextBold>
          <TextRegular
            style={{
              fontSize: RFValue(14),
              textAlign: 'center',
              color: '#66514C',
            }}>
            Snoring and breathing noises from the bed partner or pets falsify
            measurement results. Therefore: sleep alone.
          </TextRegular>
        </View>
        <View style={styles.middleContainer}>
          {device === undefined ? (
            <></>
          ) : (
            !remoteIp && (
              <Camera
                isActive={!remoteIp}
                style={StyleSheet.absoluteFill}
                device={device}
                frameProcessor={frameProcessor}
                frameProcessorFps={5}
              />
            )
          )}
        </View>
        <View style={{ marginVertical: heightPercentageToDP(3) }}>
          <Button title="Scan" />
          <Button title="Cancel" primary={false} />
        </View>
      </View>

      <ConnectRequestSheet
        remoteIp={remoteIp}
        remotePort={remotePort}
        deviceName={remoteDeviceName}
        remotePairToken={remotePairToken}
        remoteUserId={remoteUserId}
        setRemoteIp={setRemoteIp}
      />
    </FullScreenView>
  )
}

export { ScanQrScreen }

const styles = StyleSheet.create({
  parentContainer: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  upperContainer: {
    marginVertical: heightPercentageToDP(2),
    alignItems: 'center',
    alignSelf: 'center',
  },
  middleContainer: {
    width: widthPercentageToDP(80),
    height: widthPercentageToDP(80),
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.2)',
    overflow: 'hidden',
  },
})

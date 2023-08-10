import { authenticateTokenUrl, axiosInstance } from '@api'
import { NavigationService, Storage } from '@utilities'
import { useEffect, useState } from 'react'
import dgram from 'react-native-udp'
import { useNetInfo } from './useNetInfo'
import { useReduxDispatch, userActions } from '@store'

const useConnect = isServer => {
  const dispatch = useReduxDispatch()
  const { ipServer, deviceName } = useNetInfo(false)
  const PORT = (Math.random() * 60536) | (0 + 5000)
  const [socket, setSocket] = useState<any>('')
  const [requestSendLoading, setRequestSendLoading] = useState<boolean>(false) // when client will send accept response
  const [remotePaired, setRemotePaired] = useState<boolean>(false)

  useEffect(() => {
    try {
      const udpSocket: any = dgram.createSocket({
        type: 'udp4',
        reusePort: true,
      })
      if (isServer) {
        udpSocket.on('message', (data, rinfo) => {
          const {
            tokenAuthenticated,
            remotePort,
            remotePairToken,
            remoteIp,
            remoteDevice,
          } = JSON.parse(data.toString())
          if (tokenAuthenticated) {
            Storage.saveItem(
              Storage.StorageKeys.PAIRDEVICES,
              JSON.stringify({
                remotePort,
                remotePairToken,
                remoteIp,
                remoteDevice,
              }),
            )
            dispatch(
              userActions.setPairDevices({
                pairInfo: {
                  remoteUserId: '',
                  remoteIp,
                  remotePort: PORT,
                  remotePairToken,
                  remoteDevice,
                },
              }),
            )
            udpSocket.send(
              JSON.stringify({ pairingSuccess: true }),
              undefined,
              undefined,
              rinfo?.port,
              rinfo?.address,
              (error: any) => {
                if (error) {
                  console.log('error message:', error)
                } else {
                  console.log('Message sent successfully')
                }
              },
            )
            NavigationService.navigate('BottomTab', { screen: 'HomeStack' })
          }
        })
        udpSocket.on('listening', () => {
          console.log('Server listening on port:', udpSocket.address().port)
        })
        udpSocket.bind(8888)
        setSocket(udpSocket)
      } else {
        udpSocket.on('error', error => {
          console.log('UDP socket ERROR', error)
        })
        udpSocket.on('message', async (message, remoteInfo) => {
          console.log('On Client Message Received =>', message.toString())
          setRequestSendLoading(false)
          setRemotePaired(true)
        })
        udpSocket.bind(8887)
        setSocket(udpSocket)
      }
    } catch (error) {
      console.log('socket connect error=>', error)
    }
    return () => {
      socket && socket.close()
      setSocket('')
    }
  }, [isServer])

  const sendResponseMessage = async (
    remoteUserId: string,
    remotePairToken: string,
    remoteIp: string,
    remotePort: string,
    remoteDeviceName: string,
  ) => {
    const client = socket
    if (isServer) return
    setRequestSendLoading(true)
    try {
      const {
        data: {
          data: { isValid },
        },
      } = await axiosInstance.post(authenticateTokenUrl, {
        remoteUserId,
        remotePairToken,
      })
      if (isValid) {
        client.send(
          JSON.stringify({
            tokenAuthenticated: isValid,
            remotePort: 8888,
            remotePairToken,
            remoteIp: ipServer,
            remoteDevice: deviceName,
          }),
          undefined,
          undefined,
          8888,
          remoteIp,
          (error: any) => {
            if (error) {
              console.log('error', error)
            } else {
              console.log('Message sent successfully')
              setRequestSendLoading(true)
              Storage.saveItem(
                Storage.StorageKeys.PAIRDEVICES,
                JSON.stringify({
                  remoteUserId,
                  remoteIp,
                  remotePort: PORT,
                  remotePairToken,
                  remoteDeviceName,
                }),
              )
              dispatch(
                userActions.setPairDevices({
                  pairInfo: {
                    remoteUserId,
                    remoteIp,
                    remotePort: PORT,
                    remotePairToken,
                    remoteDevice: remoteDeviceName,
                  },
                }),
              )
            }
          },
        )
      }
    } catch (error) {}
  }
  return {
    requestSendLoading,
    remotePaired,
    sendResponseMessage,
  }
}

export { useConnect }

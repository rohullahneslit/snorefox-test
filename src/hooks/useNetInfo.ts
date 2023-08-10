import { useEffect, useState } from 'react'
import { NetworkInfo } from 'react-native-network-info'
import { getDeviceName } from 'react-native-device-info'
import { axiosInstance, getTokenUrl } from '@api'
import { useUserSelector } from '@store'

const useNetInfo = (getToken = true) => {
  const { user } = useUserSelector(state => state)
  const [ipServer, setIpServer] = useState<string>('')
  const [deviceName, setDeviceName] = useState<string>('')
  const [pairToken, setPairToken] = useState<string>('')

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const ip = await NetworkInfo.getIPV4Address()
        const deviceName = await getDeviceName()
        if (getToken) {
          const {
            data: {
              data: { pairToken },
            },
          } = await axiosInstance.get(getTokenUrl(user._id))
          setPairToken(pairToken)
        }
        setIpServer(ip as string)
        setDeviceName(deviceName)
      } catch (error) {
        console.log('fetchIpAddress error=>', error)
      }
    }

    fetchIpAddress()
  }, [])
  return { pairToken, ipServer, deviceName }
}
export { useNetInfo }

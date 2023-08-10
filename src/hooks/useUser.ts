import { useEffect } from 'react'
import { Storage } from '@utilities'
import { axiosInstance, createUserUrl } from '@api'
import store, { userActions } from '@store'

const useUser = () => {
  useEffect(() => {
    const getUser = async () => {
      try {
        const userInfoData = await Storage.getItem(Storage.StorageKeys.USER)
        if (userInfoData) {
          const userInfo = JSON.parse(userInfoData)
          store.dispatch(userActions.setUser({ user: userInfo }))
        } else {
          const {
            data: { data },
          } = await axiosInstance.post(createUserUrl)
          if (data) {
            const newUserInfo = JSON.stringify(data)
            await Storage.saveItem(Storage.StorageKeys.USER, newUserInfo)
            store.dispatch(userActions.setUser({ user: data }))
          }
        }
      } catch (error) {
        console.log('error getUser =>', error)
      }
    }
    const getPairDevices = async () => {
      try {
        const paireDevicesInfo = await Storage.getItem(
          Storage.StorageKeys.PAIRDEVICES,
        )
        if (paireDevicesInfo) {
          const pairDevices = JSON.parse(paireDevicesInfo)
          store.dispatch(userActions.setPairDevices({ pairInfo: pairDevices }))
        }
      } catch (error) {
        console.log('error getUser =>', error)
      }
    }
    getUser()
    getPairDevices()
  }, [])
  return {}
}
export { useUser }

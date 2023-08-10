import AsyncStorage from '@react-native-async-storage/async-storage'

const StorageKeys = {
  USER: 'USER',
  PAIRDEVICES: 'PAIRDEVICES',
}

async function saveItem(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value).then()
    return true
  } catch (error) {
    console.log('Error saving data')
    return false
  }
}

async function removeItem(key: string) {
  try {
    await AsyncStorage.removeItem(key)
    return true
  } catch (exception) {
    return false
  }
}
async function removeAll() {
  try {
    await AsyncStorage.clear()
    return true
  } catch (exception) {
    return false
  }
}

async function getItem(key: string) {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return value
    } else {
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
}
export default {
  removeItem,
  StorageKeys,
  getItem,
  saveItem,
  removeAll,
}

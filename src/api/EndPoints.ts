export const baseUrl = `http://192.168.18.115:3000`

export const getTokenUrl = (userId: string) => `/user/generateToken/${userId}/`
export const createUserUrl = '/user/createUser'
export const authenticateTokenUrl = '/user/authenticateToken'

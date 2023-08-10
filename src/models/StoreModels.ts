import { PairDevice } from './PairDevice'
import { User } from './User'

export interface RootState {
  user: UserState
}
export interface UserState {
  isLoading: boolean
  errorMessage: string
  user: User
  paireDevice: PairDevice
}

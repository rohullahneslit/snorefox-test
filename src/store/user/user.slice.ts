import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { buildSubStateSelector } from '../config/subSelector'
import { User, UserState } from '@models'
import extraReducers from './user.reducers'
import { PairDevice } from 'models/PairDevice'

const initialState: UserState = {
  isLoading: false,
  errorMessage: '',
  user: {} as User,
  paireDevice: {} as PairDevice,
}

export type UserAppState = typeof initialState

export const userSlice = createSlice<
  UserAppState,
  {
    setUser: CaseReducer<UserAppState, PayloadAction<{ user: User }>>
    setPairDevices: CaseReducer<
      UserAppState,
      PayloadAction<{ pairInfo: PairDevice }>
    >
  }
>({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload.user
    },
    setPairDevices: (state, { payload }) => {
      state.paireDevice = payload.pairInfo
    },
  },
  extraReducers,
})

export const useUserSelector = buildSubStateSelector<UserAppState>(
  state => state.user,
)

export * from './user.actions'

export const userActions = userSlice.actions
export const userReducers = userSlice.reducer

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { rootReducer } from './config/reducers'
const middlewares = getDefaultMiddleware({
  // https://github.com/reduxjs/redux-toolkit/issues/415
  immutableCheck: false,
  serializableCheck: false,
})
export type RootState = ReturnType<typeof rootReducer>
const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
})
export type AppDispatch = typeof store.dispatch
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector
export * from './user'

export default store

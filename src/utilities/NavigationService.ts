import { CommonActions } from '@react-navigation/native'

let _navigator

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef
}

function navigate(routeName, params) {
  _navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  )
}
function reset(routeName) {
  _navigator.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [
        {
          name: routeName,
        },
        // { name: 'Home' },
      ],
    }),
  )
}

function goBack() {
  _navigator.dispatch(CommonActions.goBack())
}
function setParams(params) {
  _navigator.dispatch(CommonActions.setParams(params))
}

export default { navigate, setTopLevelNavigator, reset, goBack, setParams }

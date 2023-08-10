import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RFValue } from 'react-native-responsive-fontsize'
import { hasDynamicIsland, hasNotch } from 'react-native-device-info'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { AccountIcon, HomeIcon, ResultsIcon, SettingsIcon } from '@assets/svg'
import { Colors } from '@styles'
import { isIos } from '@utilities'
import { AccountStack, HomeStack, ResultsStack, SettingStack } from '../stacks'

const Tab = createBottomTabNavigator()
const tabBarPercentageToDP = (
  dynamicIslanHeight: string | number,
  notchHeight: string | number,
  withouthNotch: string | number,
) =>
  hasDynamicIsland()
    ? heightPercentageToDP(dynamicIslanHeight)
    : hasNotch()
    ? heightPercentageToDP(notchHeight)
    : heightPercentageToDP(withouthNotch)
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.bottomBarActiveColor,
        tabBarInactiveTintColor: Colors.bottomBarInActiveColor,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarBackground: () => (
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: Colors.bottomBarBackground },
            ]}
          />
        ),
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={() => ({
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        })}
      />

      <Tab.Screen
        name="ResultsStack"
        component={ResultsStack}
        options={() => ({
          tabBarLabel: 'Results',
          tabBarIcon: ({ color }) => <ResultsIcon color={color} />,
        })}
      />

      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={() => ({
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => <AccountIcon color={color} />,
        })}
      />

      <Tab.Screen
        name="SettingStack"
        component={SettingStack}
        options={() => ({
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
        })}
      />
    </Tab.Navigator>
  )
}

export { BottomTab }

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontFamily: 'SFCompactText-Regular',
    fontSize: RFValue(10),
  },
  tabBarStyle: {
    height: isIos
      ? tabBarPercentageToDP(10, 10, 12)
      : tabBarPercentageToDP(0, 10, 8),
    paddingHorizontal: 10,
    paddingBottom: isIos
      ? tabBarPercentageToDP(3, 3, 1)
      : tabBarPercentageToDP(3, 2, 1),
  },
})

import {BottomTabBarProps} from '@react-navigation/bottom-tabs'
import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import DesignIcon from '../../../../design-system/DesignIcon'
import {color} from '../../../../theme/color'
import {NAVIGATION_BAR_HEIGHT} from '../settings'

const NavigationBar = ({
  navigation,
  state,
  descriptors,
  insets,
}: {
  navigation: BottomTabBarProps['navigation']
  state: BottomTabBarProps['state']
  descriptors: BottomTabBarProps['descriptors']
  insets: BottomTabBarProps['insets']
}): JSX.Element => {
  const {routes, index: selectedIndex} = state

  const focusedName = routes[selectedIndex]?.name

  return (
    <View style={styles.main}>
      {routes.map((route) => (
        <TouchableOpacity
          key={route.key}
          style={styles.button}
          onPress={() => {
            navigation.navigate(route.name, {
              screen: route.params?.initialScreen,
            })
          }}>
          <DesignIcon
            color={route.name === focusedName ? color.black : color.primary}
            size={25}
            name={route.params?.icon.name}
            type={route.params?.icon.type}
          />
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    bottom: 0,
    left: 0,
    right: 0,
    height: NAVIGATION_BAR_HEIGHT,
    borderTopWidth: 1,
    borderColor: color.palette.lightGrey,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
})

export default NavigationBar

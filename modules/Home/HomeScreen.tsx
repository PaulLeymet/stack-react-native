import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

function HomeScreen({}: {}): JSX.Element {
  return (
    <View style={styles.main}>
      <Text>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HomeScreen

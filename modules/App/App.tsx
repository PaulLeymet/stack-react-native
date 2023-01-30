// Must be first : https://reactnavigation.org/docs/stack-navigator/#:~:text=To%20finalize%20installation%20of%20react%2Dnative%2Dgesture%2Dhandler%2C%20add%20the%20following%20at%20the%20top%20(make%20sure%20it%27s%20at%20the%20top%20and%20there%27s%20nothing%20else%20before%20it)%20of%20your%20entry%20file%2C%20such%20as%20index.js%20or%20App.js%3A
import 'react-native-gesture-handler'

import React from 'react'
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import Navigation from './navigation/Navigation'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Navigation />
    </SafeAreaView>
  )
}

export default App

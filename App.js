import React from 'react'
import { Text, View } from 'react-native'
import I18n from 'react-native-i18n'

export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ textAlign: 'center', fontSize: 28 }}>
          {I18n.t('greeting')}
        </Text>
      </View>
    )
  }
}

I18n.fallbacks = true

I18n.translations = {
  en: {
    greeting: 'Hi!',
  },
  de: {
    greeting: 'Hallo!',
  },
}

import React from 'react'
import { Text, View } from 'react-native'
import { NativeAd } from 'react-native-glispa-connect'

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
          Custom Native Ad in React Native:
        </Text>
        <NativeAd unitId="c224ce68-d2bd-4606-b3f0-2c93e07ec212" />
      </View>
    )
  }
}

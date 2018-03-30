import React from 'react'
import { Text, View } from 'react-native'
import { NativeAd } from 'react-native-mopub'

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
        <NativeAd
          unitId="11a17b188668469fb0412708c3d16813"
          onFailure={e => console.log('failure', e.nativeEvent.message)}
          onSuccess={e => console.log('success', e.nativeEvent.message)}
        />
      </View>
    )
  }
}

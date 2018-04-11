import React from 'react'
import { Button, Text, View } from 'react-native'
import { NativeAd } from 'react-native-mopub'

export default class App extends React.Component {
  state = { show: false }

  render() {
    return (
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text style={{ textAlign: 'center', fontSize: 28 }}>
          Custom Native Ad in React Native:
        </Text>
        <View
          style={{
            height: 360,
            backgroundColor: 'green',
            width: 375,
          }}
        >
          <NativeAd
            unitId="11a17b188668469fb0412708c3d16813"
            onFailure={e => console.log('failure', e.nativeEvent.someData)}
            onSuccess={e => console.log('success', e.nativeEvent.someData)}
            layout={NativeAd.LAYOUT.BIG}
            style={{ backgroundColor: 'lightblue' }}
          />
        </View>
      </View>
    )
  }
}

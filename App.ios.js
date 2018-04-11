import React from 'react'
import { Button, Text, View } from 'react-native'
import { Banner, Interstitial, NativeAd } from 'react-native-mopub'

export default class App extends React.Component {
  state = { show: false }

  componentDidMount() {
    Interstitial.initialize('4f117153f5c24fa6a3a92b818a5eb630')
    Interstitial.addEventListener('onLoaded', () =>
      console.log('Interstitial loaded')
    )
    Interstitial.addEventListener('onFailed', message => {
      console.log('Interstitial failed: ')
      console.log(message)
    })
    Interstitial.addEventListener('onClicked', () =>
      console.log('Interstitial clicked')
    )
    Interstitial.addEventListener('onShown', () =>
      console.log('Interstitial shown')
    )
    Interstitial.addEventListener('onDismissed', () =>
      console.log('Interstitial dismissed')
    )
  }

  componentWillUnmount() {
    Interstitial.removeAllListeners('onLoaded')
    Interstitial.removeAllListeners('onFailed')
    Interstitial.removeAllListeners('onClicked')
    Interstitial.removeAllListeners('onShown')
    Interstitial.removeAllListeners('onDismissed')
  }

  render() {
    return (
      <View
        style={{
          marginTop: 20,
        }}
      >
        <View
          style={{
            height: 700,
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
        <Text style={{ textAlign: 'center', fontSize: 28 }}>
          Custom Native Ad in React Native:
        </Text>
        <Button
          title="shooowww"
          onPress={() => {
            Interstitial.showWhenReady()
          }}
        />
        <Banner
          adUnitId={'0ac59b0996d947309c33f59d6676399f'}
          autoRefresh={true}
          onLoaded={() => console.log('onloaded banner')}
          onFailed={() => console.log('onFialed banner')}
          onClicked={() => console.log('onclicked banner')}
        />
      </View>
    )
  }
}

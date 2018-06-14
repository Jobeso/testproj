import React from 'react'
import {
  Button,
  FlatList,
  Platform,
  Text,
  View,
  requireNativeComponent,
} from 'react-native'
import { NativeAd } from 'react-native-mopub'

// const NativeAd = requireNativeComponent('RNTView', Ad)

class Ad extends React.Component {
  state = { show: true }

  // componentDidMount() {
  //   if (this.props.timeout) {
  //     setTimeout(() => this.setState({ show: true }), 2000)
  //   }
  // }

  render() {
    return this.state.show ? (
      <NativeAd
        unitId="11a17b188668469fb0412708c3d16813"
        onFailure={e => console.log('failure', e.nativeEvent.someData)}
        onSuccess={e => console.log('success', e.nativeEvent.someData)}
        onClick={() => {}}
        layout={NativeAd.LAYOUT.MOPUB_NATIVEAD_BIG}
        style={{ backgroundColor: 'lightblue', height: 360, width: 375 }}
        // yCoord={this.props.yCoord}
      />
    ) : (
      <View
        onLayout={e => console.log(e.nativeEvent.layout)}
        style={{ height: 10 }}
      />
    )
  }
}

const render = i => (
  <View
    style={{
      paddingVertical: 20,
      backgroundColor: i % 2 === 0 ? 'lightgreen' : 'lightgrey',
      height: 60,
    }}
  >
    <Text>Hi, I'm an item.</Text>
  </View>
)

// const Ad = () =>
//   Platform.OS === 'ios' ? (
//     <NativeAdComponent
//       unitId="11a17b188668469fb0412708c3d16813"
//       onFailure={e => console.log('failure', e.nativeEvent.someData)}
//       onSuccess={e => console.log('success', e.nativeEvent.someData)}
//       layout={NativeAd.LAYOUT.MOPUB_NATIVEAD_BIG}
//       style={{ backgroundColor: 'lightblue' }}
//     />
//   ) : (
//     <NativeAd
//       unitId="11a17b188668469fb0412708c3d16813"
//       onFailure={e => console.log('failure', e.nativeEvent.someData)}
//       onSuccess={e => console.log('success', e.nativeEvent.someData)}
//       layout={NativeAd.LAYOUT.MOPUB_NATIVEAD_BIG}
//       style={{ backgroundColor: 'lightblue' }}
//     />
//   )

const data = [
  { id: 1, render },
  { id: 2, render },
  // { id: 3, render: () => <Ad yCoord={140} /> },
  { id: 4, render },
  { id: 5, render },
  { id: 7, render: () => <Ad yCoord={240 + 360 + 20} timeout={2000} /> },
  { id: 6, render },
  { id: 8, render },
]

export default class App extends React.Component {
  state = { show: false }

  _renderItem = ({ index, item }) => item.render(index)

  render() {
    return (
      <View
        style={{
          marginTop: 20,
          height: 600,
          backgroundColor: 'lightgreen',
        }}
      >
        {/* <Ad /> */}
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

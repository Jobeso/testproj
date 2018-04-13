import React from 'react'
import { Button, FlatList, Platform, Text, View } from 'react-native'
import { NativeAd } from 'react-native-mopub'

const render = i => (
  <View
    style={{
      paddingVertical: 20,
      backgroundColor: i % 2 === 0 ? 'lightgreen' : 'lightgrey',
    }}
  >
    <Text>Hi, I'm an item.</Text>
  </View>
)

const Ad = () =>
  Platform.OS === 'ios' ? (
    <NativeAd
      unitId="11a17b188668469fb0412708c3d16813"
      onFailure={e => console.log('failure', e.nativeEvent.someData)}
      onSuccess={e => console.log('success', e.nativeEvent.someData)}
      layout={NativeAd.LAYOUT.BIG}
      style={{ backgroundColor: 'lightblue' }}
    />
  ) : (
    <NativeAd
      unitId="11a17b188668469fb0412708c3d16813"
      onFailure={e => console.log('failure', e.nativeEvent.someData)}
      onSuccess={e => console.log('success', e.nativeEvent.someData)}
      layout={NativeAd.LAYOUT.BIG}
      style={{ backgroundColor: 'lightblue' }}
    />
  )

const data = [
  { id: 1, render },
  { id: 2, render },
  { id: 3, render: () => <Ad /> },
  { id: 4, render },
  { id: 5, render },
  { id: 7, render: () => <Ad /> },
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

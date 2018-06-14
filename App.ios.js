import React from 'react'
import { FlatList, Text, View, SafeAreaView } from 'react-native'
import { NativeAd } from 'react-native-mopub'

// testad: 11a17b188668469fb0412708c3d16813

class Ad extends React.Component {
  render() {
    return (
      <NativeAd
        unitId="11a17b188668469fb0412708c3d16813"
        onFailure={e => console.log('failure', e.nativeEvent.someData)}
        onSuccess={e => console.log('success', e.nativeEvent.someData)}
        onClick={() => console.log('testad')}
        layout={'MOPUB_NATIVEAD_BIG'}
        style={{ backgroundColor: 'lightblue' }}
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
  _renderItem = ({ index, item }) => item.render(index)

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: 'lightgoldenrodyellow' }}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={this._renderItem}
        />
      </SafeAreaView>
    )
  }
}

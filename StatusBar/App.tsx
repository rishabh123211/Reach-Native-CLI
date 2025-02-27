import { View, Text, StyleSheet, StatusBar, Button } from 'react-native'
import React, { useState } from 'react'

const App = () => {

  const [hide, setHide] = useState(false);
  const [barStyle, setBarStyle] = useState("default");


  return (
    <View style={styles.container}>shdh
      <StatusBar
        backgroundColor='blue'
        barStyle={barStyle}
        hidden={hide}
      />
      <Button title='Toggle Status Bar' onPress={() => setHide(!hide)} />
      <Button title='Update Style' onPress={() => setBarStyle("white")} />
    </View>
  )
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App
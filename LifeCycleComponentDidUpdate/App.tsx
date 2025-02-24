import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState(100);
  const [count, setCount] = useState(0);

  // useEffect(() => {

  //   console.warn("Do some animation");

  // }, [count])

  // useEffect(() => {

  //   console.warn("Call some API here");

  // }, [data])

  return (
    <View style={{
      borderBlockColor: 'red',
      borderWidth: 5,
      backgroundColor: 'gray',
      alignItems: 'center',
      margin: 20,
      padding: 10


    }} >
      <Text style={{
        fontSize: 30,
        borderBlockColor: '#fff',
        borderWidth: 10,
        backgroundColor: 'darkgreen',
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',
        alignContent: 20
      }} >useEffect as componentDidUpdate</Text>

      <View style={{
        borderBlockColor: 'red',
        borderWidth: 5,
        backgroundColor: 'gray',
        alignItems: 'center',
        margin: 20,
        padding: 10

      }} >
        <Button title='Update Count' color='darkblue' onPress={() => setCount(count + 1)} />
        <Text style={{
          fontSize: 30,
          borderBlockColor: 'yellow',
          borderWidth: 10,
          backgroundColor: 'darkred',
          color: '#fff',
          textAlign: 'center',
          textAlignVertical: 'center',
          marginTop: 20
        }} >Updated Count : {count} </Text>

      </View>

      <View style={{
        borderBlockColor: 'red',
        borderWidth: 5,
        backgroundColor: 'gray',
        alignItems: 'center',
        margin: 20,
        padding: 10

      }} >
        <Button title='Update Data' color='darkblue' onPress={() => setData(data + 1)} />
        <Text style={{
          fontSize: 30,
          borderBlockColor: 'yellow',
          borderWidth: 10,
          backgroundColor: 'darkred',
          color: '#fff',
          textAlign: 'center',
          textAlignVertical: 'center',
          marginTop: 20
        }} >Updated Data : {data} </Text>

      </View>
      
      <User info={{data, count}} />

    </View>
  )
}


const User = (props) => {

  useEffect(()=>{
    console.warn('Data props is Updated');
    
  },[props.info.data])

  useEffect(()=>{
    console.warn('Count props is Updated');
    
  }, [props.info.count])

  return(
    <View>
      <Text>Data : {props.info.data} </Text>
      <Text>Data : {props.info.count} </Text>
    </View>
  )
}
export default App
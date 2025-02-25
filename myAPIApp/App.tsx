import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState(undefined);

  const getApiData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    let result = await fetch(url);
    result = await result.json();
    setData(result)
  }

  useEffect(() => {
    getApiData();
  })
  return (
    <View>
      <Text style={{
        fontSize: 30, backgroundColor: 'green', textAlign: 'center',
        margin: 20, padding: 10
      }}>API Called</Text>
      {
        data ?
          <View style={{ backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 3 }}>
            <Text style={{
              fontSize: 20, backgroundColor: 'black',
              color: 'white', padding: 10, margin: 10
            }}> User I'd : {data.userId}</Text>
            <Text style={{fontSize:20, backgroundColor:'black',
          color:'white', padding:10, margin:10}}>I'd : {data.id}</Text>
            <Text style={{fontSize:20, backgroundColor:'black',
          color:'white', padding:10, margin:10}}>Title : {data.title}</Text>
            <Text style={{fontSize:20, backgroundColor:'black',
          color:'white', padding:10, margin:10}}> Body : {data.body}</Text>
          </View>
          : null
      }
    </View>
  )
}

export default App
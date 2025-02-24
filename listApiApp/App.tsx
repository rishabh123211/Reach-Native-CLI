import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {

    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <ScrollView>
      <View style={{ justifyContent: 'center', backgroundColor:'gray', margin:5, padding:10, borderColor:'black', borderWidth:3  }}>
        <Text style={{fontSize:30, textAlign:'center', backgroundColor:'yellow', padding:10, marginBottom:10}} >API List Call</Text>
        {
          data.length?
          data.map((item) => 
          <View> 
            <Text style={{fontSize:20, textAlign:'center',margin:10, backgroundColor:'green', padding:10}} >I'd : {item.id} </Text>
            <Text style={{fontSize:20, textAlign:'center',margin:10, backgroundColor:'pink', padding:10}}>Title : {item.title} </Text>
            <Text style={{fontSize:20, textAlign:'center',margin:10, backgroundColor:'pink', padding:10}}>Body : {item.body} </Text>
          </View>

          )
          : null
        }
      </View>
    </ScrollView>
  )
}

export default App
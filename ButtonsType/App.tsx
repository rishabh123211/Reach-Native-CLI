import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

const App = () => {

  const [select, setSelect] = useState(0);
  const [show, setSShow] = useState(false);

  return (
    <ScrollView>
    <View style={styles.main}>
      <Text style={styles.textBox, {fontSize:30, backgroundColor:'gray', margin:20, padding:10} } >Radio Buttons</Text>
      <TouchableOpacity onPress={()=>setSelect(1)} >
        <View style={{flexDirection:'row', alignItems:'center'}} >
          <View style={styles.radio}>
            {
              select===1 ? <View style={styles.radioBackground} ></View> : null 
            }
          </View>
          <Text style={styles.textBox}>Radio 1</Text>
        </View>
          
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setSelect(2)} >
        <View style={{flexDirection:'row', alignItems:'center'}} >
          <View style={styles.radio}>
          {
              select===2 ? <View style={styles.radioBackground} ></View> : null 
            }
          </View>
          <Text style={styles.textBox}>Radio 2</Text>
        </View>
          
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setSelect(3)} >
        <View style={{flexDirection:'row', alignItems:'center'}} >
          <View style={styles.radio}>
            {
              select===3 ? <View style={styles.radioBackground} ></View> : null 
            }
          </View>
          <Text style={styles.textBox}>Radio 3</Text>
        </View>
          
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setSelect(4)} >
        <View style={{flexDirection:'row', alignItems:'center'}} >
          <View style={styles.radio}>
            {
              select===4 ? <View style={styles.radioBackground} ></View> : null 
            }
          </View>
          <Text style={styles.textBox}>Radio 4</Text>
        </View>
          
      </TouchableOpacity>

      <Text style={styles.textBox, {fontSize:30, backgroundColor:'gray', margin:20, padding:10} } >Radio Buttons</Text>
   
      <TouchableOpacity onPress={()=>setSShow(!show)} >
        <View style={{flexDirection:'row', alignItems:'center'}} >
          <View style={styles.checkBorder} >
          {
              show==1 ? <View style={styles.checkBackground} ></View> : null 
            }
          </View>
          <Text style={styles.textBox} >CheckBox 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setSShow(!show)} >
        <View style={{flexDirection:'row', alignItems:'center'}} >
          <View style={styles.checkBorder} >
          {
              show==2 ? <View style={styles.checkBackground} ></View> : null 
            }
          </View>
          <Text style={styles.textBox} >CheckBox 2</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setSShow(!show)} >
        <View style={{flexDirection:'row', alignItems:'center'}} >
          <View style={styles.checkBorder} >
          {
              show==3 ? <View style={styles.checkBackground} ></View> : null 
            }
          </View>
          <Text style={styles.textBox} >CheckBox 3</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setSShow(4)} >
        <View style={{flexDirection:'row', alignItems:'center'}} >
          <View style={styles.checkBorder} >
          {
              show===4 ? <View style={styles.checkBackground} ></View> : null 
            }
          </View>
          <Text style={styles.textBox} >CheckBox 4</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setSShow(5)} >
        <View style={{flexDirection:'row', alignItems:'center'}} >
          <View style={styles.checkBorder} >
          {
              show===5 ? <View style={styles.checkBackground} ></View> : null 
            }
          </View>
          <Text style={styles.textBox} >CheckBox 5</Text>
        </View>
      </TouchableOpacity>
        
      <TouchableOpacity onPress={()=>setSShow(6)} >
        <View style={{flexDirection:'row', alignItems:'center'}} >
          <View style={styles.checkBorder} >
          {
              show===6 ? <View style={styles.checkBackground} ></View> : null 
            }
          </View>
          <Text style={styles.textBox} >CheckBox 6</Text>
        </View>
      </TouchableOpacity>
    </View >
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'pink',
    margin: 20,
    borderBlockColor: 'black',
    borderWidth: 2,
    alignItems: 'center',

  },
  radio:{
    height: 40,
          width: 40,
          borderBlockColor: 'black',
          borderWidth: 2,
          margin: 20,
          borderRadius: 20,
          alignItems:'center',
          textAlign:'center'

  },

  textBox: {
    textAlign: 'center',
    fontSize:20,
    alignItems:'center',
    
  },
  radioBackground:{
    height:30,
    width:30,
    backgroundColor:'black',
    borderRadius:15,
    margin:3

  },
  checkBorder:{
    height:30,
    width:30,
    borderBlockColor:'black',
    borderWidth:3,
    margin:20
  },
  checkBackground:{
    height:20,
    width:20,
    backgroundColor:'black',
    margin:2
  }
})

export default App
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  const btnAction = () =>{
    console.warn("Left Button Pressed");
    
  } 
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   headerStyle:{backgroundColor:'yellow'},
      //   headerTintColor:'darkred',
      //   headerTitleStyle:{fontSize:35},
      //   headerTitleAlign:'center'
      // }}
      >
        <Stack.Screen name="Login" component={Login} 
         options ={{
          headerTitle:()=><Button title='Left' color='red' onPress={btnAction} /> ,
          headerRight:()=><Button title='Right' color='gray' onPress={Search} />,
          headerStyle:{backgroundColor:'orange'},
          headerTintColor:'darkred',
          headerTitleStyle:{fontSize:35}
      
        }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



const Home = (props) => {
  console.warn(props.route.params);
  const {name, age} = props.route.params;
  
  return (
    <View style={styles.container} >
      <Text style={styles.text}>Home Page</Text>
      <Text style={styles.text}>Name : {name} </Text>
      <Text style={styles.text}>Age : {age} </Text>

    </View>
  );
};

const Login = ({ navigation }) => {
  // const name = 'Rishabh Kumar';
  // const age = 28;
  const [name, setName] = useState('');
  const [age, setAge] = useState();

  return (
    

    <View style={styles.container } >
      <Text style={styles.text}>Login Page</Text>
      <TextInput onChangeText={(text)=> setName(text)} placeholder='Enter Name' style={{textAlign:'center', backgroundColor:'white', padding:10, fontSize:25, marginBottom:20, color:'black'}} />
      <TextInput onChangeText={(text)=> setAge(text)} placeholder='Enter Age' style={{textAlign:'center', backgroundColor:'white', padding:10, fontSize:25, marginBottom:20, color:'black'}} />

      <Button title="Go to Home Page" onPress={() => navigation.navigate('Home', {name, age})} color='darkblue' />

    </View>
  );
};

const Search = () =>{
  return(
    <TextInput  placeholder='Search here' />
  )
  
}


const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green',
    margin: 3,
    padding:20
  },
  text:{
    fontSize:25,
    padding:20,
    backgroundColor:'black',
    color:'white', 
    marginBlockEnd:30,
  }
})

export default App;

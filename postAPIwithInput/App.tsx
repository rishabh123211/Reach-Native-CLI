import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const saveData = async () => {
    let hasError = false;

    if (!name.trim()) {
      setNameError(true);
      hasError = true;
    } else {
      setNameError(false);
    }

    if (!age.trim() || isNaN(age)) {
      setAgeError(true);
      hasError = true;
    } else {
      setAgeError(false);
    }

    if (!email.trim() || !email.includes('@')) {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }

    if (hasError) return; // Stop function execution if there are validation errors

    try {
      const url = "http://10.0.2.2:3000/users";
      let result = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, age, email })
      });

      result = await result.json();
      if (result) {
        console.warn("Data is Added");
        setName('');
        setAge('');
        setEmail('');
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>POST API With Input Fields</Text>

      <TextInput
        style={styles.input}
        placeholder='Enter Name'
        value={name}
        onChangeText={(text) => setName(text)}
      />
      {nameError && <Text style={styles.error}>Please enter a valid name</Text>}

      <TextInput
        style={styles.input}
        placeholder='Enter Age'
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
      />
      {ageError && <Text style={styles.error}>Please enter a valid age</Text>}

      <TextInput
        style={styles.input}
        placeholder='Enter Email'
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      {emailError && <Text style={styles.error}>Please enter a valid email</Text>}

      <Button title='Save Data' onPress={saveData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default App;

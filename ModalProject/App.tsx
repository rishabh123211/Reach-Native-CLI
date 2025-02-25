import { View, Text, StyleSheet, Modal, Button } from 'react-native'
import React, { useState } from 'react'

const App = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.main} >
      <Modal transparent={true} visible={showModal} animationType='slide' >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Rishabh Kumar</Text>
            <Button title='Close Modal' onPress={()=>setShowModal(false)} />

          </View>
        </View>

      </Modal>
      <View style={styles.buttonView}>
        <Button title='Open Modal' onPress={()=>setShowModal(true)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1
  },
  buttonView:{
    flex:1,
    justifyContent:'flex-end'
  },
  centeredView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalView:{
    backgroundColor:'#fff',
    padding:30,
    borderRadius:20,
    shadowColor:'black',
    elevation:5
  },
  modalText:{
    fontSize:30
  }
})

export default App
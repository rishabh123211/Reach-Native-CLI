import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const App = () => {

  const client = [
    {
      id: 1,
      clientName: 'TCS',
    },
    {
      id: 2,
      clientName: 'Wipro',
    },
    {
      id: 3,
      clientName: 'GlobalLogic',
    },
    {
      id: 4,
      clientName: 'Accenture',
    },
    {
      id: 5,
      clientName: 'HCL Technologies',
    },
    {
      id: 6,
      clientName: 'Cognizant',
    },
    {
      id: 7,
      clientName: 'Apex',
    },
    {
      id: 8,
      clientName: 'Amazon',
    },
    {
      id: 9,
      clientName: 'Google',
    },
    {
      id: 10,
      clientName: 'Microsoft',
    },
    {
      id: 11,
      clientName: 'IBM',
    },
    {
      id: 12,
      clientName: 'Capgemini',
    },
    {
      id: 13,
      clientName: 'Deloitte',
    },
    {
      id: 14,
      clientName: 'Oracle',
    },
    {
      id: 15,
      clientName: 'SAP',
    },
    {
      id: 16,
      clientName: 'Infosys',
    },
    {
      id: 17,
      clientName: 'Tech Mahindra',
    },
    {
      id: 18,
      clientName: 'Hexaware',
    },
    {
      id: 19,
      clientName: 'Mindtree',
    },
    {
      id: 20,
      clientName: 'L&T Infotech',
    },
    {
      id: 21,
      clientName: 'Genpact',
    },
    {
      id: 22,
      clientName: 'Adobe',
    },
    {
      id: 23,
      clientName: 'Intel',
    },
    {
      id: 24,
      clientName: 'Cisco',
    },
    {
      id: 25,
      clientName: 'Samsung',
    },
    {
      id: 26,
      clientName: 'Qualcomm',
    },
    {
      id: 27,
      clientName: 'Siemens',
    },
    {
      id: 28,
      clientName: 'Ericsson',
    },
    {
      id: 29,
      clientName: 'Facebook',
    },
    {
      id: 30,
      clientName: 'Uber',
    },
    {
      id: 31,
      clientName: 'PayPal',
    },
    {
      id: 32,
      clientName: 'Salesforce',
    },
    {
      id: 33,
      clientName: 'VMware',
    },
    {
      id: 34,
      clientName: 'Twitter',
    },
    {
      id: 35,
      clientName: 'Netflix',
    },
    {
      id: 36,
      clientName: 'LinkedIn',
    },
    {
      id: 37,
      clientName: 'ServiceNow',
    },
    {
      id: 38,
      clientName: 'eBay',
    },
    {
      id: 39,
      clientName: 'Zoom',
    },
    {
      id: 40,
      clientName: 'Red Hat',
    },
    {
      id: 41,
      clientName: 'HP',
    },
    {
      id: 42,
      clientName: 'Dell Technologies',
    },
    {
      id: 43,
      clientName: 'Nokia',
    },
    {
      id: 44,
      clientName: 'Yahoo',
    },
    {
      id: 45,
      clientName: 'Spotify',
    },
    {
      id: 46,
      clientName: 'Baidu',
    },
    {
      id: 47,
      clientName: 'Tencent',
    },
    {
      id: 48,
      clientName: 'Alibaba',
    },
    {
      id: 49,
      clientName: 'Stripe',
    },
    {
      id: 50,
      clientName: 'Snapchat',
    }
  ];


  return (
    <ScrollView>
    <View style={{
      alignItems: 'center',
      backgroundColor: 'skyblue',
      borderBlockColor: 'darkblack',
      borderWidth: 5,
      margin: 20,
      padding: 10

    }}>
      <View style={{
        alignItems: 'center',
        backgroundColor: 'skyblue',
        borderBlockColor: 'darkblue',
        borderWidth: 5,
        margin: 20,
        padding: 10
      }}>
        <Text style={{ fontSize: 30, 
          textAlign: 'center', 
          textAlignVertical: 'center' }} >Dynamic Grid</Text>
      </View>

      <View style={{
        alignItems: 'center',
        backgroundColor: 'skyblue',
        borderBlockColor: 'darkred',
        borderWidth: 5,
        margin: 20,
        padding: 10,
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap'
      }}>
        {
          client.map((item)=> 
            <Text style={{ fontSize: 30, 
              textAlign: 'center', 
              textAlignVertical: 'center',
              backgroundColor:'green',
              borderBlockColor:'blue',
              borderWidth:3,
              padding:10,
              margin:5
             }}>{item.clientName}</Text>
          )
        }
      </View>

    </View>
  </ScrollView>
  )
}

export default App
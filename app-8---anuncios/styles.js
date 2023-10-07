import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  body: {
  flex: 1,
  backgroundColor: '#FF5050'
},
titulo:{
  textAlign: 'center', // Centraliza o texto horizontalmente
    fontSize: 20,
    marginTop: '30%',
    fontWeight: 'bold',
    color: "#fff"
},
card:{
  width: 200,
  height: 300,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: '#00000056', // Cor da sombra
  shadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
  shadowRadius: 15,
  elevation: 5,
  margin: 15,
  padding: 10
},
text:{
  textAlign: 'center',
  marginTop: 15,
  fontSize: 20
},
 
  
})


export {styles}
import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#EDEEE9'
  },
  title:{
    textAlign: 'center', // Centraliza o texto horizontalmente
    fontSize: 20,
    marginTop: '10%',
    marginBottom: '10%',
    fontWeight: 'bold',
    color: '#dc1c13'
  },
  card:{
    width: '90%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    shadowColor: '#00000056', // Cor da sombra
    shadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
    shadowRadius: 15,
    elevation: 5,
    margin: 15,
    padding: 20
  },
  titleVaga: {
    textAlign: 'center', // Centraliza o texto horizontalmente
    fontSize: 15,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#4169e1'
  },
  text:{
    textAlign:'justify',
    fontSize: 15,
    marginBottom: 5,
  }
 
  
})


export {styles}
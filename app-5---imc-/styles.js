import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor: '#201b2c',
	  justifyContent: 'center', 
    alignItems: 'center'
  },
  mainContent: {
    width:'80%',
    backgroundColor: '#2f2841',
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20,
    shadowColor: '#00000056', // Cor da sombra
    shadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
    shadowRadius: 15,
    elevation: 5  
  },
  titulo: {
    fontSize: 20,
    color: '#7DBDD4',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor:'#514869',
    width: '100%',
    paddingTop:5,
    paddingBottom:5,
    textAlign: 'center',
    color: '#D9EDF5',
    borderRadius: 5
  },
  botton:{
    backgroundColor:'#73B0DE',
    width: '100%',
    paddingTop:5,
    paddingBottom:5,
    justifyContent: 'center', // Centraliza o conteúdo horizontalmente
    alignItems: 'center',
    borderRadius: 10
  },
  text:{
    color: '#fff',
    fontWeight: 'bold'
  },
  margin:{
    marginBottom:20,
    marginTop:20
  }
})


export {styles}
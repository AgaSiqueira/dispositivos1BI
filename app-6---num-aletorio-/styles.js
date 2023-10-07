import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor: '#02801c',
	  justifyContent: 'center', 
    alignItems: 'center'
  },
  mainContent: {
    width:'80%',
    backgroundColor: '#fff',
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20,
    shadowColor: '#00000056', // Cor da sombra
    shadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
    shadowRadius: 15,
    elevation: 5,
    borderRadius: 10
  },
  margin:{
    marginBottom:20,
    marginTop:20
  },
  titulo: {
    fontSize: 15,
    color: '#02801c',
    fontWeight: 'bold',
  },
  resultado:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:20
  },
  botton:{
    backgroundColor:'#02801c',
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
  }
})


export {styles}
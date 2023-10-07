import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  area:{
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  areaInterna:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:30,
    marginTop: 30
  },
  titulo: {
    fontSize: 20,
    color: '#d75413',
    fontWeight: 'bold'
  },
  inputStyle:{
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Cor da sombra
    shadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
    shadowRadius: 15,
    elevation: 5
  }, 
  botao: {
    backgroundColor: '#4169E1',
    padding:10
  },
  texto:{
    fontWeight: 'bold'
  }

})


export {styles}
import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  area:{
    backgroundColor: '#222831',
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  areaInterna: {
    backgroundColor: '#272E38',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },
  titulo: {
    fontSize: 20,
    color:'white',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  botaoGeral: {
    width: 40,
    height: 40,
    justifyContent: 'center', //horizontal
  },
  botaoMais:{
    backgroundColor: 'green',
    marginRight:20
  },
  botaoMenos:{
    backgroundColor: 'red',
     marginLeft:20
  },
  textoBotao:{
    textAlign: 'center',//literalmente apenas em compnente de texto
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  contador:{
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold'
  }
})


export {styles}
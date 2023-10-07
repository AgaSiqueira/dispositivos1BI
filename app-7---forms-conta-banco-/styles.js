import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  body:{
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  }, 
  position:{
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }, input: {
    backgroundColor:'#d2d2d2',
    width: '80%',
    paddingTop:5,
    paddingBottom:5,
    textAlign: 'center',
    color: '#383837',
    borderRadius: 2
  },
  botton:{
    backgroundColor:'#6868FE',
    width: '100%',
    paddingTop:5,
    paddingBottom:5,
    justifyContent: 'center', // Centraliza o conteúdo horizontalmente
    alignItems: 'center',
    borderRadius: 10
  },
  titulo: {
    fontSize: 20,
    color: '#6868FE',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text:{
    fontSize: 13,
    color: '#000080',
    fontWeight: 'bold',
    marginRight: 5
  }

})


export {styles}
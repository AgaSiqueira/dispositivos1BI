import { useState } from 'react'
import { View, Text,Image,Pressable, TextInput } from 'react-native'
import {styles} from './styles'

export default function App(){
  const [resultado, setResultado] = useState('Resultado')
  const [alcool, setAlcool] = useState()
  const [gasolina, setGasolina] = useState()

  function avaliacao(){
    if((alcool/gasolina)<0.7)
     setResultado("Alcool é melhor")
    else if((alcool/gasolina)>0.7)
      setResultado("Gasolina é melhor")
    else
      setResultado("Ambas boas")
  }
  return(
    <View style = {styles.body} >
      <View style = {styles.mainContent}>
        <Text style = {[styles.titulo, styles.margin]} >Alcool ou Gasolina</Text>
        <Image source={{uri:'https://i0.wp.com/www.reparacaoautomotiva.com.br/wp-content/uploads/2021/03/combustivel.jpg?fit=900%2C600&ssl=1'}} 
            style={{width: 100, height: 100}} />
        <TextInput style = {[styles.input,styles.margin]}
            placeholder="Valor do Alcool"
            onChangeText={setAlcool}
        /> 
        <TextInput style = {styles.input}
            placeholder="Valor da Gasolina"
            onChangeText={setGasolina}
        />
        <Pressable style = {[styles.botton, styles.margin]}
          onPress={() => avaliacao()}>
            <Text style = {styles.text}>Verificar</Text>
        </Pressable>
        <Text style = {styles.text}>{resultado}</Text>
      </View>
    </View>
  )
}

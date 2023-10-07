import { useState } from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
import {styles} from './styles'

export default function App(){
  const [resultado, setResultado] = useState()
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()

  function multiplicar(){
    setResultado(num1 * num2)
  }
  return(
    <View style = {styles.area}>
        <Text style ={styles.titulo}>Multiplicador de Números</Text>
        <View style ={styles.areaInterna}>
          <TextInput style ={styles.inputStyle}
          placeholder="Digite o primeiro número"
          onChangeText={setNum1}
          />
          <Text style ={styles.texto}> X </Text>
          <TextInput style ={styles.inputStyle}
          placeholder="Digite o segundo número"
          onChangeText={setNum2}
          />
        </View>

        <Pressable style ={styles.botao}
        onPress={() => multiplicar()}>
          <Text>Calcular</Text>
        </Pressable>
        <View style ={styles.areaInterna}>
          <Text style ={styles.texto}> Resultado: </Text>
          <Text>{resultado}</Text>
        </View>
    </View>
  )
}

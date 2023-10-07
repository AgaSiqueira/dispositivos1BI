import { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import {styles} from './styles'


export default function App(){
  const [contador, setContador] = useState(0)


  function atualizarContador(incrementar){
    if (incrementar)//subtende-se como true
      setContador(contador+1)
    else if (contador > 0)
      setContador(contador-1)
  }


  return(
    <View style={styles.area}>
      <Text style={styles.titulo}>Visitantes da Loja</Text>
      <View style={styles.areaInterna}>
        <Pressable style={[styles.botaoGeral, styles.botaoMais]} onPress={() => atualizarContador(true)}>
          <Text style={styles.textoBotao}>+</Text>
        </Pressable>
        <Text style={styles.contador}>{contador}</Text>
        <Pressable style={[styles.botaoGeral, styles.botaoMenos]} onPress={() => atualizarContador(false)}>
          <Text style={styles.textoBotao}>-</Text>
        </Pressable>
      </View>
    </View>
  )
}


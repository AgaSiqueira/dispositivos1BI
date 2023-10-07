import { useState } from 'react'
import { View, Text,Image,Pressable, TextInput } from 'react-native'
import {styles} from './styles'

export default function App(){
  const [resultado, setResultado] = useState('Resultado')
 
  return(
    <View style = {styles.body}>
      <View style = {styles.mainContent}>
        <Text style = {[styles.titulo, styles.margin]}>Jogo do Numero Aletorio</Text>
        <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9rKGh2vu7wI8hD2hL6DBYYClg9goTGC1tI9qL7QLeFm1egKFJuXWTCUYnV7zyzpnnHI&usqp=CAU'}} 
            style={{width: 100, height: 100}} />
        <Text style = {[styles.titulo, styles.margin]}>Pense num numero de 0 a 10</Text>
        <Text style = {styles.resultado}>{resultado}</Text>
        <Pressable style = {styles.botton}
          onPress={() => setResultado(Math.floor(Math.random() * 11))}>
            <Text style = {styles.text}>Descobrir</Text>
        </Pressable>
        
      </View>
    </View>
  )
}
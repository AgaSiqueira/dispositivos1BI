import { useState } from 'react'
import { View, Text,Image,Pressable, TextInput } from 'react-native'
import {styles} from './styles'

export default function App(){
  const [resultado, setResultado] = useState('Resultado')
  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()

  function formula(){
    const razao = peso/(altura*altura);
    if(razao<18.5)
     setResultado("Abaixo do peso")
    else if(razao>=18.5 && razao<=24.9)
      setResultado("Peso normal")
    else if(razao>=25 && razao<=29.9)
      setResultado("Sobrepeso")
    else if(razao>=30 && razao<=34.9)
      setResultado("Obesidade Gray I")
    else if(razao>=35 && razao<=39.9)
      setResultado("Obesidade Gray II")
    else
      setResultado("Obesidade Morbida")
  }
  return(
    <View style = {styles.body} >
      <View style = {styles.mainContent}>
        <Text style = {[styles.titulo, styles.margin]} >Calculo IMC</Text>
        <Image source={{uri:'https://image.winudf.com/v2/image1/Ym1pY2FsY3VsYXRvci5ibWkuY2FsY3VsYXRvci53ZWlnaHRsb3NzdHJhY2tlcl9pY29uXzE2NDMyOTMyMzVfMDI2/icon.png?w=184&fakeurl=1'}} 
            style={{width: 100, height: 100}} />
        <TextInput style = {[styles.input,styles.margin]}
            placeholder="Peso"
            onChangeText={setPeso}
        /> 
        <TextInput style = {styles.input}
            placeholder="Altura"
            onChangeText={setAltura}
        />
        <Pressable style = {[styles.botton, styles.margin]}
          onPress={() => formula()}>
            <Text style = {styles.text}>Verificar</Text>
        </Pressable>
        <Text style = {styles.text}>{resultado}</Text>
      </View>
    </View>
  )
}

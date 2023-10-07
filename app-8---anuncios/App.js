import { useState } from 'react'
import { View, Text,Image, ScrollView} from 'react-native'
import {styles} from './styles'

export default function App(){
  const [resultado, setResultado] = useState('Resultado')
  const [alcool, setAlcool] = useState()
  const [gasolina, setGasolina] = useState()

  
  return(
    <View style = {styles.body}>
      <Text style = {styles.titulo}>Anuncios</Text>
      <ScrollView style = {styles.scrollCenter}
      horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style = {styles.card}>
          <Image source={{uri:'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/captura_de_tela_2018-01-22_a_s_11.31.25[1]-1000x1000.png'}} 
            style={{width: 100, height: 100}} />
          <Text style = {styles.text}>Abacaxi fresco e suculento: {'\n'} a doçura tropical em cada fatia.</Text>
        </View>

        <View style = {styles.card}>
          <Image source={{uri:'https://www.varanda.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/b/a/banana-maca_1_2.jpg'}} 
            style={{width: 100, height: 100}} />
          <Text style = {styles.text}>Banana deliciosa{'\n'} para um dia cheio de energia!</Text>
        </View>

        <View style = {styles.card}>
          <Image source={{uri:'https://redemix.vteximg.com.br/arquivos/ids/187285-1000-1000/1170.jpg?v=637901172855500000'}} 
            style={{width: 100, height: 100}} />
          <Text style = {styles.text}>Carambola suculenta{'\n'}Estrela tropical no seu dia!</Text>
        </View>
        
        <View style = {styles.card}>
          <Image source={{uri:'https://images.tcdn.com.br/img/img_prod/983869/damasco_6_99_100g_627_1_3f3fea74818aa08ea5dde85832cc54c6.jpg'}} 
            style={{width: 100, height: 100}} />
          <Text style = {styles.text}>Doce sabor do damasco{'\n'}Uma explosão de prazer frutado!</Text>
        </View>
      </ScrollView>
    </View>
  )
}



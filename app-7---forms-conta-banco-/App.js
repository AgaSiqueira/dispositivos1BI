import { useState } from 'react'
import { View, Text, Pressable, TextInput, Switch } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import {styles} from './styles'


export default function App(){
  const [nome, setNome] = useState()
  const [idade, setIdade] = useState()
  const [sexo, setSexo] = useState("Feminino")
  const [escola, setEscola] = useState("Ensino Fundamental")
  const [limite, setLimite] = useState(0)
  const [status, setStatus] = useState(false)
  const [exibirInformacoes, setExibirInformacoes] = useState(false);

  const exibirTodasInformacoes = () => {
    setExibirInformacoes(true);
  };

  return(
    <View style = {styles.body}>
      <Text style = {styles.titulo}>Abertura de Conta</Text>
      <View style = {styles.position}>
        <Text style = {styles.text}>Nome: </Text>
        <TextInput style = {styles.input}
            placeholder="Digite aqui"
            onChangeText={setNome}
        /> 
      </View>

      <View style = {styles.position}>
        <Text style = {styles.text}>Idade: </Text>
        <TextInput style = {styles.input}
            placeholder="Digite Aqui"
            onChangeText={setIdade}
        /> 
      </View>

      <View style = {styles.position}>
        <Text style = {styles.text}>Sexo: </Text>
        <Picker
        selectedValue={sexo}
        onValueChange={ (itemValue, itemIndex) => setSexo(itemValue) }
        >
          <Picker.Item key={1} value={"Feminino"} label="Feminino" />
          <Picker.Item key={2} value={"Masculino"} label="Masculino" />
        </Picker>
      </View>
    
      <View style = {styles.position}>
        <Text style = {styles.text}>Escolaridade: </Text>
        <Picker
        selectedValue={escola}
        onValueChange={ (itemValue, itemIndex) => setEscola(itemValue) }
        >
          <Picker.Item key={1} value={"Ensino Fundamental"} label="Ensino Fundamental" />
          <Picker.Item key={2} value={"Ensino Médio"} label="Ensino Médio" />
          <Picker.Item key={2} value={"Ensino Superior"} label="Ensino Superior" />
        </Picker>
      </View>

      <View style = {styles.position}>
        <Text style = {styles.text}>Limite: </Text>
        <Slider
        minimumValue={0}
        maximumValue={1000}
        onValueChange={ (valorSelecionado) => setLimite(valorSelecionado) }
        value={limite}
        step={100}
         thumbTintColor='#6868FE'
        />  
      </View>

      <View style = {styles.position}>
        <Text style = {styles.text}>Brasileiro: </Text>
        <Switch
          value={status}
          onValueChange={ (valorSwitch) => setStatus(valorSwitch) }
          thumbColor='#6868FE'
        />
      </View>

      <Pressable style = {styles.botton}
      onPress={exibirTodasInformacoes}>
        <Text>Confirmar</Text>
      </Pressable>

      {exibirInformacoes && (
        <View>
          <Text style = {styles.titulo}>Dados Informados:</Text>
          <Text>Nome: {nome}</Text>
          <Text>Idade: {idade}</Text>
          <Text>Sexo: {sexo}</Text>
          <Text>Escolaridade: {escola}</Text>
          <Text>Limite: R$ {limite}</Text>
          <Text>Brasileiro: {status ? 'Sim' : 'Não'}</Text>
        </View>
      )}
    </View>
  )
}

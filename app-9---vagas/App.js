import React, { Component, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import {styles} from './styles'



function App(){


  let initial_feed = [
        {id: 1, cargo: 'Desenvolvedor BackEnd', salario: 3000, desc: 'Arquiteto de códigos server-side, colaborativo e apaixonado por desafios técnicos', contato: 'vaga@empresa.com'},
        {id: 2, cargo: 'Engenheiro de dados', salario: 3000, desc: 'Especialista em Engenharia de Dados, transformando informações em insights estratégicos', contato: 'vaga@empresa.com'},
        {id: 3, cargo: 'Desenvolvedor Full Stack ', salario: 8000, desc: 'Desenvolvedor versátil, construindo soluções digitais inovadoras e integradas', contato: 'vaga@empresa.com'},
        {id: 4, cargo: 'Analista de Marketing Digital', salario: 6500, desc: 'Estrategista digital, otimizando presença online com criatividade e análise precisa', contato: 'vaga@empresa.com'},
        {id: 5, cargo: 'Especialista em Segurança da Informação', salario: 10000, desc: 'Guardião de dados, protegendo sistemas com expertise em Segurança da Informação.', contato: 'vaga@empresa.com'},
      ]


  const [vagas, setVaga] = useState(initial_feed)


  return(
    <View style = {styles.body}>
      <Text style = {styles.title}>Vagas</Text>
      <FlatList
      data={vagas}
      keyExtractor={(item) => item.id}
      renderItem={ ({item}) => <Vaga data={item}/>}
      />
    </View>
  )
}



export default App;

function Vaga(props){
  return(
      <View style = {styles.card}>
        <Text style = {styles.titleVaga}> {props.data.cargo} </Text>
        <Text style = {styles.text}>Descrição: {props.data.desc} </Text>
        <Text style = {styles.text}>Salario: R$ {props.data.salario.toFixed(2)} </Text>
        <Text style = {styles.text}>Contato: {props.data.contato} </Text>
      </View>
  );
}

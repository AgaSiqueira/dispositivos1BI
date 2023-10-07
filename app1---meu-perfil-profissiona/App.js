import { View, Text, Image, StyleSheet} from 'react-native'; 
function App(){ 
  return( 
    <View style={[styles.borderAll, styles.borderedView]}>
      <Text style={[styles.centeredText, styles.boldText]}>App Meu perfil</Text>
      <View style={styles.borderedView}>
        <View style={styles.centeredImageContainer}> 
          <Image source={{uri:'https://psverso.com.br/wp-content/uploads/2022/10/overwatch-2-personagem-mei-estilo-de-jogo.webp'}} 
          style={{width: 100, height: 100}} /> 
        </View>
        <Text style={styles.boldText}>{"\n"}Dados Pessoais: </Text> 
        <Text> Ágatha Siqueira Silva {"\n"}</Text> 
        <Text style={styles.boldText}>Formação: </Text> 
        <Text>Tecnico em informatica (concluido) </Text> 
        <Text>Analise e desenvolvimento de sistemas (em progressão) {"\n"}</Text> 
        <Text style={styles.boldText}>Experiência: </Text> 
        <Text>Nenhuma {"\n"}</Text> 
        <Text style={styles.boldText}>Projetos: </Text> 
        <Text>Trabalho de conclusão de curso </Text>
      </View>
    </View> 
  ); 
}
const styles = StyleSheet.create({
  centeredText: {
    textAlign: 'center', // Centraliza o texto horizontalmente
    fontSize: 18
  },
  boldText: {
    fontWeight: 'bold'
  },
  centeredImageContainer: {
    alignItems: 'center' // Centraliza horizontalmente
  },
  borderedView: {
    paddingTop: 30, // Espaçamento interno top para o conteúdo
    paddingBottom: 30,
    padding: 10,
    borderColor: 'black', // Cor da borda
    borderWidth: 1 // Espessura da borda
  },
  borderAll: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center' // Centraliza horizontalmente
  }
});
export default App;
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { FontAwesome } from '@expo/vector-icons';
import Icon from '@expo/vector-icons/MaterialIcons';

function createRows(data, columns) {
  const rows = Math.floor(data.length / columns); // [A]
  let lastRowElements = data.length - rows * columns; // [B]
  while (lastRowElements !== columns) { // [C]
    data.push({ // [D]
      id: `empty-${ lastRowElements }`,
      name: `empty-${ lastRowElements }`,
      empty: true
    });
    lastRowElements += 1; // [E]
  }
  return data; // [F]
}

class App extends React.Component {
  state = {
    data: [
      { id: "00", name: "Relâmpago McQueen" },
      { id: "01", name: "Agente Tom Mate" },
      { id: "02", name: "Doc Hudson" },
      { id: "03", name: "Cruz Ramirez" },
      { id: "03", name: "Lucas Rodrigues" },
      { id: "03", name: "Marcos Veloso" }
    ]
  };


  render() {
    const columns = 2;

    return (
      <SafeAreaView style={ styles.boxConquista }>

        <View style={ styles.box1 }>
          {/* <Image source={ { uri: usuarioData.Foto } } style={ [ styles.imgperfil ] } /> */ }
          <View style={ styles.descProfile }>
            <Text style={ styles.nameProfile }>Lucas Fernandes Lopes Rodrigues</Text>
            <Text style={ styles.cursoProfile }>Análise e Desenvolvimento de Sistemas</Text>
          </View>
        </View>

        <View style={ styles.boxLevel }>
          <View style={ styles.levelDescLeft }>
            <Icon style={ styles.iconStars } name="stars" size={ 20 } color="#F0CC25" />
            <Text style={ styles.boxLevelDescription }>Nível: 5</Text>
          </View>
          <Text style={ styles.boxLevelDescription }>Experiência: 7000</Text>
        </View>

        <FlatList
          style={ styles.box }
          data={ createRows(this.state.data, columns) }
          keyExtractor={ item => item.id }
          numColumns={ columns }
          renderItem={ ({ item }) => {

            if (item.empty) {
              return <View style={ [ styles.item, styles.itemEmpty ] } />;
            }

            return (
              // <View style={styles.item}>
              //   <Text style={styles.text}>{item.name}</Text>
              // </View>

              <View style={ styles.item }>
                <FontAwesome style={ { color: '#' } } name="trophy" size={ 60 } />
                <Text style={ styles.text }>CONQUISTA:</Text>
                <Text style={ styles.text }>O ALUNO TA ON!</Text>

                <Text style={ styles.text }>DESCRIÇÃO:</Text>
                <Text style={ styles.text }>Parabéns! Você está fechando o semestre com todas as notas SS.</Text>

                <TouchableOpacity style={ styles.detailsButton } onPress={ () => { } }>
                  <Text style={ styles.text }>Ver emblema</Text>
                </TouchableOpacity>
              </View>

            );
          } }
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  box: {
    margin: 8,
    shadowColor: '#bbb'
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    flexGrow: 1,
    margin: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 45,
    paddingTop: 45,
    flexBasis: 0
  },

  text: {
    color: "#333333",
    alignItems: 'center'
  },

  itemEmpty: {
    backgroundColor: 'transparent'
  },
  boxConquista: {
    backgroundColor: '#f2f2f2'
  },

  box1: {
    flexDirection: 'row',
    backgroundColor: '#220536',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0CC25',
    paddingBottom: 11,
    paddingHorizontal: 20,
  },

  boxLevel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 47,
    paddingHorizontal: 25,
    backgroundColor: '#220536',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },

  descProfile: {
    flex: 1,
    flexDirection: 'column',
  },

  nameProfile: {
    fontSize: 25,
    fontFamily: 'Roboto',
    color: '#fff',
    marginLeft: 16,
  },
  cursoProfile: {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: '#737380',
    marginLeft: 16,
    paddingRight: 20
  },

  levelDescLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconStars: {
    marginRight: 5
  },

  boxLevelDescription: {
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: "#FFF",
    paddingVertical: 10,
  },
});


export default App;


// FlatList do app de produção
{/* <FlatList
  style={ styles.incidentList }
  showsVerticalScrollIndicator={ false }
  contentContainerStyle={ { paddingBottom: 100 } }
  data={ createRows([ 1, 2, 3 ]) }
  keyExtractor={ incident => String(incident) }
  renderItem={ () => (
    <View style={ styles.incident }>
      <Text style={ styles.incidentProperty }>CONQUISTA:</Text>
      <Text style={ styles.incidentValue }>O ALUNO TA ON!</Text>

      <Text style={ styles.incidentProperty }>DESCRIÇÃO:</Text>
      <Text style={ styles.incidentValue }>Parabéns! Você está fechando o semestre com todas as notas SS.</Text>

      <TouchableOpacity style={ styles.detailsButton } onPress={ () => { } }>
        <Text style={ styles.detailsButtonText }>Ver emblema</Text>
        <IconFeat name="star" size={ 16 } color="#B51D9E" />
      </TouchableOpacity>
    </View>
  ) }
/> */}
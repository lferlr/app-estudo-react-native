import React from 'react';
import { View, Text } from 'react-native';

export default function Conquistas() {
  return(
    <View>
      <Text>Tela Home 👏</Text>
    </View>
  )
}


// import React from "react";
// import { FlatList, SafeAreaView, Text, View, TouchableOpacity } from "react-native";

// import styles from './styles';

// import { FontAwesome } from '@expo/vector-icons';
// import Icon from '@expo/vector-icons/MaterialIcons';

// function createRows(data, columns) {
//   const rows = Math.floor(data.length / columns); // [A]
//   let lastRowElements = data.length - rows * columns; // [B]
//   while (lastRowElements !== columns) { // [C]
//     data.push({ // [D]
//       id: `empty-${ lastRowElements }`,
//       name: `empty-${ lastRowElements }`,
//       empty: true
//     });
//     lastRowElements += 1; // [E]
//   }
//   return data; // [F]
// }

// export default function Home() {
//   state = {
//     data: [
//       { id: "00", name: "Relâmpago McQueen" },
//       { id: "01", name: "Agente Tom Mate" },
//       { id: "02", name: "Doc Hudson" },
//       { id: "03", name: "Cruz Ramirez" },
//       { id: "04", name: "Lucas Rodrigues" },
//       { id: "05", name: "Marcos Veloso" }
//     ]
//   };

//   const columns = 2;

//   return (
//     <SafeAreaView style={ styles.boxConquista }>

//       <View style={ styles.box1 }>
//         {/* <Image source={ { uri: usuarioData.Foto } } style={ [ styles.imgperfil ] } /> */ }
//         <View style={ styles.descProfile }>
//           <Text style={ styles.nameProfile }>Lucas Fernandes Lopes Rodrigues</Text>
//           <Text style={ styles.cursoProfile }>Análise e Desenvolvimento de Sistemas</Text>
//         </View>
//       </View>

//       <View style={ styles.boxLevel }>
//         <View style={ styles.levelDescLeft }>
//           <Icon style={ styles.iconStars } name="stars" size={ 20 } color="#F0CC25" />
//           <Text style={ styles.boxLevelDescription }>Nível: 5</Text>
//         </View>
//         <Text style={ styles.boxLevelDescription }>Experiência: 7000</Text>
//       </View>

//       <FlatList
//         style={ styles.box }
//         data={ createRows(this.state.data, columns) }
//         keyExtractor={ item => item.id }
//         numColumns={ columns }
//         renderItem={ ({ item }) => {

//           if (item.empty) {
//             return <View style={ [ styles.item, styles.itemEmpty ] } />;
//           }

//           return (
//             // <View style={styles.item}>
//             //   <Text style={styles.text}>{item.name}</Text>
//             // </View>

//             <View style={ styles.item }>
//               <FontAwesome style={ { color: '#' } } name="trophy" size={ 60 } />
//               <Text style={ styles.text }>CONQUISTA:</Text>
//               <Text style={ styles.text }>O ALUNO TA ON!</Text>

//               <Text style={ styles.text }>DESCRIÇÃO:</Text>
//               <Text style={ styles.text }>Parabéns! Você está fechando o semestre com todas as notas SS.</Text>

//               <TouchableOpacity style={ styles.detailsButton } onPress={ () => { } }>
//                 <Text style={ styles.text }>Ver emblema</Text>
//               </TouchableOpacity>
//             </View>
//           );
//         } }
//       />
//     </SafeAreaView>
//   )
// }


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
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
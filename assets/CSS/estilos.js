import {StyleSheet} from 'react-native'

export const estilos = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFDF6'
  },

  titulo: {
    fontSize: 24,
    fontFamily: 'Cooper Black',
    color: '#A3B8B1',
    alignSelf: 'center',
    marginBottom: 20
  },

  img: {
    width: 40,
    height: 40,
    marginTop: -10,
    marginRight: 10
  },

  tituloConjunto: {
    flexDirection: 'row'
  },

  text: {
    fontSize: 16,
    fontFamily: 'Berlin Sans FB',
    marginLeft: 15,
  },

  input: {
    width: 300,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#A3B8B1',
    padding: 15,
    marginTop: 10,
    marginBottom: 30,
  },

  botao: {
    width: 180,
    height: 45,
    backgroundColor: '#A3B8B1',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 50
  },

  textB: {
    fontSize: 18,
    fontFamily: 'Cooper Black',
    alignSelf: 'center',
    color: '#FFF'
  },

  textR: {
    fontSize: 18,
    fontFamily: 'Cooper Black',
    marginTop: 22,
    marginBottom: 10,
    color: '#FFF'
  },

  textC: {
    fontSize: 16,
    fontFamily: 'Berlin Sans FB',
    marginLeft: 15,
    color: '#FFF'
  },

  resultado: {
    backgroundColor: '#A3B8B1',
    width: 300,
    height: 100,
    alignItems: 'center',
    borderRadius: 20,
  }
})
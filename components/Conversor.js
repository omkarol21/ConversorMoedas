import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import {estilos} from '../assets/CSS/estilos'
import {useState} from 'react'

export default function Conversor(props){
  var [real, setReal] = useState('')
  var [dolar, setDolar] = useState('')
  var [resultado, setResultado] = useState('')

  function Coverter(){
    //peso/(altura x altura)
    real = parseFloat(real)
    dolar = parseFloat(dolar)
    resultado = real * dolar
    setResultado(resultado)
  }
  
  return(
    <View>

      <View style={estilos.tituloConjunto}>
        <Image style={estilos.img} source={require('../assets/IMG/Moeda.png')}/>
        <Text style={estilos.titulo}>Conversor de Moeda</Text>
      </View>
      
      <Text style={estilos.text}>Insira o valor em real:</Text>
      <TextInput
        style={estilos.input}
        onChangeText={setReal} 
        value={real} 
        placeholder='💰    Ex: 20...' 
      keyboardType='numeric'/>

      
      <Text style={estilos.text}>Insira o valor do dólar:</Text>
      <TextInput 
        style={estilos.input}
        onChangeText={setDolar} 
        value={dolar} 
        placeholder='💵    Ex: 0.20...' 
      keyboardType='numeric'/>

      <TouchableOpacity style={estilos.botao} onPress={Coverter}>
        <Text style={estilos.textB}>Calcular</Text>
      </TouchableOpacity>

      <View style={estilos.resultado}>
        <Text style={estilos.textR}>Resultado</Text>
        <Text style={estilos.textC}>🇺🇸 {resultado}</Text>
      </View>

    </View>
  );
}
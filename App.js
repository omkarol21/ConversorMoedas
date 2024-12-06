import {SafeAreaView, View, ScrollView} from 'react-native';
import {estilos} from './assets/CSS/estilos'
import Conversor from './components/Conversor'

export default function App() {
  
  return (
    <ScrollView style={estilos.container} >
      <SafeAreaView>
        <View>
          
        <Conversor/>

        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
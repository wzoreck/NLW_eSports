import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { Home } from './src/screens/Home';

import { Background } from './src/components/Background';
import { Loading } from './src/screens/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  return (
    <Background>
      <StatusBar // Alterando status bar do dispositivo para ficar mais legivel com o background usado
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      { fontsLoaded ? <Home /> : <Loading /> }
      
    </Background>
  );
}

/*

  { fontsLoaded ? <Home /> : <Loading /> } Verifica se as fontes foram carregadas antes de abrir a aplicacao, se sim vai para a tela Home, caso contrário mostra o componente de Loading (ambos estao em src/screens/

*/


/**
 - Instalacao fonte inter
  expo install expo-font @expo-google-fonts/inter 

 - React navigation
  expo install react-native-safe-area-context

 - Linear gradient (Para fazer a sombra dos cards dos games)
  expo install expo-linear-gradient
 */
 

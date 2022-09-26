import { ImageBackground } from 'react-native';

import backgroundImg from '../../assets/background-galaxy.png';

import { styles } from './styles';

interface Props {
    children: React.ReactNode;
}

export function Background({ children } : Props) {
  return (
    <ImageBackground 
       source={backgroundImg} // Sempre procura para carregar uma imagem
       style={styles.container}
       defaultSource={backgroundImg} // Aqui fica em cache a imagem carregada por último
    >
        {children}
    </ImageBackground>
  );
}
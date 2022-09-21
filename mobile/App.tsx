import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Hello World
      </Text>

      <Button1 title="Botão 1" />
      <Button1 title="Botão 2" />
      <Button1 title="Botão 3" />
      <Button1 title="Botão 4" />

      <StatusBar style="auto" />
    </View>
  );
}

// Criando um componente
interface ButtonProps {
  title: string;
}

function Button1(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

// Aqui fica a estilização CSS, o container está sendo chamado em <View style={styles.container}>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

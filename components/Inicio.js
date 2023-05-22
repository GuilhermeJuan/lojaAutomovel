import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-web';

export default function Inicio(props) {
  return (
    <View style={styles.container}>
      <Button title="moto" 
      onPress={() => {props.navigation.navigate('Moto')}} 
      />
      <Button title="Carro" 
      onPress={() => {props.navigation.navigate('Carro')}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

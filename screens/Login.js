import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';
import Button from '../components/button';
import Input from '../components/input';


export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/home.jpg')}/>
      <Text>Sistema</Text>
      <Text style={styles.title}>Comanda</Text>
      <Input placeholder='email' />
      <Input placeholder='senha' secureTextEntry/>

      <Button onPress={()=> navigation.navigate('Comanda')}>Entrar </Button>
      
      <TouchableOpacity>
        <Text>criar conta</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:'#121A2C',
    fontSize: 34,
    fontWeight: 'bold',
  },
   
  image: {
    height: 200,
    width: '100%',
    position: 'absolute',
    top: 0,
  }
});

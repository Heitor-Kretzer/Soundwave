// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,} from 'react-native';
import logo from '../assets/images/soundwave.png';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para login (pode adicionar lógica de autenticação aqui)
  const handleLogin = () => {
    console.log('Login attempted with:', email, password);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#003554', 'transparent']}
        style={styles.background}
      />
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Seja bem-vindo ao Soundwave, Faça Login:</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#00A6FB"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#00A6FB"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Link para a página de cadastro */}
      <Text style={styles.registerText}>
        Não possui cadastro?{' '}
        <Link href="./Cadastro">
          <Text style={styles.link}>Cadastre-se</Text>
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00A6FB', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  input: {
    width: '80%',
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#051923',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerText: {
    color: '#fff',
    marginTop: 20,
  },
  link: {
    color: '#051923',
    fontWeight: 'bold',
  },
});

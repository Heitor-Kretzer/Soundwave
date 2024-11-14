// RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import logo from '../../assets/images/soundwave.png';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
       <LinearGradient
        colors={['#003554', 'transparent']}
        style={styles.background}
      />
       <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>CADASTRE-SE NO SOUNDWAVE</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#00A6FB"
        value={name}
        onChangeText={setName}
      />

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

      <TextInput
        style={styles.input}
        placeholder="Confirme a Senha"
        placeholderTextColor="#00A6FB"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Já possui cadastro?{' '}
        <Link href="">
          <Text style={styles.link}>Fazer Login</Text>
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
    top: -100,
    height: 300,
  },
  logo: {
    width: 150, 
    height: 150, 
    resizeMode: 'contain',
    marginBottom: 40,
  },
  title: {
    fontSize: 25,
    fontFamily: 'Comic Sans MS',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  input: {
    width: '30%',
    padding: 15,
    fontFamily: 'Comic Sans MS	',
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    width: '30%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#051923',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Comic Sans MS	',
    fontWeight: 'bold',
  },
  loginText: {
    color: '#fff',
    marginTop: 20,
    fontFamily: 'Comic Sans MS	',
  },
  link: {
    color: '#051923',
    fontWeight: 'bold',
  },
});

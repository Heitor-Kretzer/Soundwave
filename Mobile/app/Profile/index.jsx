import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("João Silva");
  const [email, setEmail] = useState("joao.silva@gmail.com");

 
  const pickImage = async () => {
    
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Desculpe, precisamos de permissão para acessar a galeria!');
      return;
    }

 
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#003554', 'transparent']}
        style={styles.background}
      />
      <Text style={styles.title}>Perfil</Text>

      {/* Exibição da foto de perfil */}
      <TouchableOpacity onPress={pickImage} style={styles.profilePicContainer}>
        {image ? (
          <Image
            source={{ uri: image }}
            style={styles.profilePic}
          />
        ) : (
          <MaterialIcons name="account-circle" size={120} color="#fff" />
        )}
      </TouchableOpacity>

      {/* Informações do usuário */}
      <Text style={styles.infoText}>Nome: {name}</Text>
      <Text style={styles.infoText}>E-mail: {email}</Text>

      <TouchableOpacity style={styles.alterButton}>
        <Text style={styles.alterButtonText}>Alterar Senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00A6FB',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  profilePicContainer: {
    marginBottom: 20,
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  alterButton: {
    backgroundColor: '#051923',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  alterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

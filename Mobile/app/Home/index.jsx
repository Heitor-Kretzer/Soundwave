import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Seja bem vindo João Silva, Escolha seu Artista, Albúm ou Musica favorita </Text>
      </View>

      <Text style={styles.sectionTitle}>Artistas </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Artists')}>
          <Image
            source={require ('../../assets/images/xxtenta.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Xxxtentacion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Artists')}>
          <Image
            source={ require ('../../assets/images/trevis.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Travis Scott</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Artists')}>
          <Image
            source={require ('../../assets/images/lilp.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>LilPumpp</Text>
        </TouchableOpacity>
      </ScrollView>

     
      <Text style={styles.sectionTitle}>Álbuns Recentes</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {/* Card de Álbuns */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Albums')}>
          <Image
            source={require ('../../assets/images/ALBUMXX.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>XXX</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Albums')}>
          <Image
            source={{ uri: 'https://link-da-imagem-do-album.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Álbum 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Albums')}>
          <Image
            source={{ uri: 'https://link-da-imagem-do-album.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Álbum 3</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Seção de Músicas */}
      <Text style={styles.sectionTitle}>Músicas Populares</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {/* Card de Música */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Songs')}>
          <Image
            source={{ uri: 'https://link-da-imagem-da-musica.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Música 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Songs')}>
          <Image
            source={{ uri: 'https://link-da-imagem-da-musica.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Música 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Songs')}>
          <Image
            source={{ uri: 'https://link-da-imagem-da-musica.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Música 3</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10,
  },
  header: {
    paddingTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    marginTop: 20,
  },
  scrollContainer: {
    marginBottom: 20,
  },
  card: {
    marginRight: 15,
    alignItems: 'center',
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  cardText: {
    marginTop: 10,
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default HomeScreen;
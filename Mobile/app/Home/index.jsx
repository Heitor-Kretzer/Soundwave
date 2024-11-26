import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons'; // Biblioteca para ícones

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <LinearGradient
            colors={['#003554', 'transparent']}
            style={styles.background}
          />
          <Text style={styles.title}>
            Seja bem-vindo João Silva, Escolha seu Artista, Albúm ou Musica favorita
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Artistas</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Artists')}>
            <Image
              source={require('../../assets/images/xxtenta.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Xxxtentacion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Artists')}>
            <Image
              source={require('../../assets/images/trevis.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Travis Scott</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Artists')}>
            <Image
              source={require('../../assets/images/lilp.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>LilPumpp</Text>
          </TouchableOpacity>
        </ScrollView>

        <Text style={styles.sectionTitle}>Álbuns Recentes</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Albums')}>
            <Image
              source={require('../../assets/images/ALBUMXX.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>XXX</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Albums')}>
            <Image
              source={require('../../assets/images/travisco.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>AstroWorld</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Albums')}>
            <Image
              source={require('../../assets/images/almbuml.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Harverd Dropout</Text>
          </TouchableOpacity>
        </ScrollView>

        <Text style={styles.sectionTitle}>Músicas Populares</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Songs')}>
            <Image
              source={require('../../assets/images/look.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Look At Me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Songs')}>
            <Image
              source={require('../../assets/images/musicat.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Highest in the Room</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Songs')}>
            <Image
              source={require('../../assets/images/gucci.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Gucci Gang</Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>

      {/* Player Estático - com navegação para a tela de Player */}
      <TouchableOpacity style={styles.playerContainer} onPress={() => navigation.navigate('Player')}>
        <Image
          source={require('../../assets/images/look.jpg')} // Imagem da música em reprodução
          style={styles.playerImage}
        />
        <View style={styles.playerDetails}>
          <Text style={styles.playerTitle}>Look At Me</Text>
          <Text style={styles.playerArtist}>Xxxtentacion</Text>
        </View>
        <View style={styles.playerControls}>
          <FontAwesome name="step-backward" size={24} color="#fff" />
          <FontAwesome name="play" size={24} color="#fff" style={{ marginHorizontal: 15 }} />
          <FontAwesome name="step-forward" size={24} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00A6FB',
    padding: 10,
  },
  background: {
    position: 'absolute',
    left: -10,
    right: -10,
    top: -10,
    height: 500,
  },
  header: {
    paddingTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Comic Sans MS',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'Comic Sans MS',
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
    fontFamily: 'Comic Sans MS',
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
  },
  playerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#003554',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  playerImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  playerDetails: {
    flex: 1,
    marginLeft: 10,
  },
  playerTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  playerArtist: {
    fontSize: 14,
    color: '#ccc',
  },
  playerControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HomeScreen;

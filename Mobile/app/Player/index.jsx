import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const PlayerScreen = ({ navigation }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/look.jpg')}
        style={styles.albumArt}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.songTitle}>Look At Me</Text>
        <Text style={styles.artistName}>Xxxtentacion</Text>
      </View>

      <View style={styles.controlsContainer}>
        <TouchableOpacity onPress={() => console.log('Retroceder')}>
          <FontAwesome name="step-backward" size={36} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={togglePlayPause} style={styles.playPauseButton}>
          <FontAwesome
            name={isPlaying ? "pause" : "play"}
            size={36}
            color="#fff"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Avançar')}>
          <FontAwesome name="step-forward" size={36} color="#fff" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <FontAwesome name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003554',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  albumArt: {
    width: 250,
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },
  detailsContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  songTitle: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  artistName: {
    fontSize: 18,
    color: '#ccc',
    marginTop: 5,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playPauseButton: {
    marginHorizontal: 40,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#003554',
    padding: 10,
    borderRadius: 50,
    elevation: 5,
  },
});

export default PlayerScreen;

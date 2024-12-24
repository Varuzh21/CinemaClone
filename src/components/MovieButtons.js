import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Play } from '../assets/icons';
import { DownloadActive2, Share } from '../assets/icons/active';

function MovieButtons() {
  return (
      <View style={styles.actionButtons}>
      <TouchableOpacity style={styles.playButton}>
        <Play />
        <Text style={styles.playButtonText}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <DownloadActive2 />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Share color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

export default MovieButtons;

const styles = StyleSheet.create({
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  playButton: {
    flexDirection: 'row',
    backgroundColor: 'rgb(255, 135, 0)',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginRight: 10,
  },
  playButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
  iconButton: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
})

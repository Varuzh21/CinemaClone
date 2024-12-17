import React from 'react';
import { ImageBackground, TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';
import { RadialGradient } from 'react-native-gradients';
import { MovieButtons } from '../components'
import { Left, Heart, Play, Calendar, Clock, Film, Star } from '../assets/icons';
import { Share, DownloadActive2, HeartActive } from '../assets/icons/active';

function BackgroundImage({backdrop_path, title, isFavorite, release_date, runtime, genres, vote_average, onNavigate}) {
  return (
    <ImageBackground style={styles.imageBackground} source={{ uri: `https://image.tmdb.org/t/p/w500${backdrop_path}` }}>
      <View style={styles.gradientOverlay}>
        <RadialGradient
          colorList={[
            { offset: '0%', color: 'rgba(31, 29, 43, 1)', opacity: '0.2' },
            { offset: '100%', color: 'rgb(31, 29, 43)', opacity: '1' },
          ]}
          x="50%"
          y="30%"
          rx="100%"
          ry="60%"
          style={styles.gradientOverlay}
        />
      </View>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btn} onPress={onNavigate}>
          <Left />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {title || 'Movie Title'}
        </Text>
        <TouchableOpacity style={styles.btn} onPress={isFavorite}>
          {isFavorite === true ? <HeartActive /> : <Heart />}
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.infoRow}>
          <View style={styles.infoRow}>
            <Calendar />
            <Text style={styles.infoText}>
              {release_date?.split('-')[0] || 'N/A'}
            </Text>
          </View>
          <Text>|</Text>
          <View style={styles.infoRow}>
            <Clock />
            <Text style={styles.infoText}>
              {runtime || 'N/A'} Minutes
            </Text>
          </View>
          <Text>|</Text>
          <View style={styles.infoRow}>
            <Film />
            <Text style={styles.infoText}>
              {genres || 'N/A'}
            </Text>
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>
          <View style={styles.ratingRow}>
            <Star />
            <Text style={styles.ratingText}>
              {vote_average || 'N/A'}
            </Text>
          </View>
        </View>
      </View>

      <MovieButtons />

    </ImageBackground>
  );
}

export default BackgroundImage;

const styles = StyleSheet.create({
  imageContainer: {
    width: 205,
    height: 285,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: 552,
    overflow: 'hidden',
    alignItems: 'center',
    position: 'relative',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: 35
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    // fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  btn: {
    width: 32,
    height: 32,
    backgroundColor: 'rgb(37, 40, 54)',
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  detailsContainer: {
    paddingTop: 16,
    paddingHorizontal: 12,
  },
  movieTitle: {
    color: '#fff',
    fontSize: 22,
    // fontWeight: 'bold',
    marginVertical: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginVertical: 8,
  },
  infoText: {
    color: '#888',
    fontSize: 14,
  },
  dot: {
    color: '#888',
    fontSize: 14,
    marginHorizontal: 4,
  },
  ratingRow: {
    width: 55,
    height: 24,
    borderRadius: 8,
    backgroundColor: 'rgba(37, 40, 54, 0.32)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  ratingText: {
    color: '#F05454',
    fontSize: 16,
    // fontWeight: 'bold',
  },
})

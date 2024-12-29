import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenresRequest } from '../../store/actions/movies';

const GenreScreen = () => {
  const dispatch = useDispatch();
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    dispatch(getAllGenresRequest());
  }, []);

  const genresSelector = useSelector((state) => state.getAllGenresReducer.genres) || [];

  const handleGenrePress = (genre) => {
    setSelectedGenre(genre.name);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.genreContainer}>
        {genresSelector.map((genre) => (
          <TouchableOpacity
            key={genre.id}
            style={[
              styles.genreCard,
              selectedGenre === genre.name && styles.selectedGenreCard,
            ]}
            onPress={() => handleGenrePress(genre)}
          >
            <Image
              source={{ uri: genre.image }}
              style={styles.genreImage}
            />
            <View style={styles.genreOverlay}>
              <View style={styles.circle}>
                {selectedGenre === genre.name && <View style={styles.checkedCircle} />}
              </View>
              <Text style={styles.genreText}>{genre.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default GenreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(31, 29, 43)',
    paddingHorizontal: 16,
  },
  title: {
    color: 'white',
    fontSize: 24,
    // fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  genreCard: {
    width: '48%',
    height: 120,
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genreImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  genreOverlay: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    gap: 10,
    padding: 8,
  },
  genreText: {
    color: 'white',
    fontSize: 16,
    // fontWeight: 'bold',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  checkedCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'cyan',
  },
});

import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {memo, useCallback} from 'react';
import {Star} from '../assets/icons';
import FastImage from 'react-native-fast-image';

const MovieCard = ({movie, onNavigate}) => {
  if (!movie || movie.length === 0) {
    return <Text style={styles.noMoviesText}>No movies to display</Text>;
  }

  const renderItem = useCallback(({item}) => (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() => onNavigate(item.id)}
      accessible
      accessibilityLabel={`Navigate to movie: ${item.title}`}>
      <FastImage
        source={{
          uri: item.backdrop_path
            ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
            : 'https://via.placeholder.com/500x750',
        }}
        style={styles.image}>
        <View style={styles.ratingContainer}>
          <Star width={13} height={12} />
          <Text style={styles.starNumber}>
            {Math.floor(item.vote_average) ?? 'N/A'}
          </Text>
        </View>
      </FastImage>
      <View style={styles.cardItemFooter}>
        <Text style={styles.titleText}>
          {item.title?.length > 15
            ? `${item.title.substring(0, 12)}...`
            : item.title ?? 'Untitled'}
        </Text>
        <Text style={styles.genreText}>{item.genre || 'Action'}</Text>
      </View>
    </TouchableOpacity>
  ), []);

  return (
    <View style={styles.card}>
      <FlatList
        data={movie}
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.movieList}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingTop: 26,
    paddingLeft: 23
  },
  movieList: {
    alignItems: 'center',
  },
  cardItem: {
    width: 135,
    height: 231,
    backgroundColor: 'rgb(37, 40, 54)',
    borderRadius: 12,
    marginRight: 12,
  },
  image: {
    width: '100%',
    height: 175,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    overflow: 'hidden',
    alignItems: 'flex-end',
  },
  ratingContainer: {
    width: 55,
    height: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginRight: 8,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: 'rgba(37, 40, 54, 0.5)',
  },
  cardItemFooter: {
    paddingHorizontal: 8,
    paddingTop: 12,
    paddingBottom: 8,
  },
  titleText: {
    color: '#fff',
    fontFamily: 'Montserrat',
    fontSize: 14,
  },
  genreText: {
    color: 'rgb(146, 146, 157)',
    fontFamily: 'Montserrat',
    fontSize: 10,
    paddingBottom: 10,
  },
  starNumber: {
    color: 'rgb(255, 135, 0)',
    fontFamily: 'Montserrat',
    fontSize: 12,
    marginLeft: 5,
  },
  noMoviesText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default memo(MovieCard);

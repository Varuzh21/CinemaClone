import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Star from '../assets/icons/star.svg';

const MovieCard = ({ movie, onNavigate }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id.toString()}
      style={styles.cardItem}
      onPress={() => onNavigate(item.id)}
    >
      <ImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }}
        style={styles.image}
      >
        <View style={styles.ratingContainer}>
          <BlurView
            style={StyleSheet.absoluteFillObject}
            blurType="light"
            blurAmount={20}
            reducedTransparencyFallbackColor="rgba(37, 40, 54, 0.32)"
          />
          <Star width={13} height={12} />
          <Text style={styles.starNumber}>{item.vote_average}</Text>
        </View>
      </ImageBackground>
      <View style={styles.cardItemFooter}>
        <Text style={styles.titleText}>
          {item.title.length > 15 ? `${item.title.substring(0, 12)}...` : item.title}
        </Text>
        <Text style={styles.genreText}>Action</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.card}>
      <FlatList
        data={movie}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.movieList}
      />
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingTop: 26,
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
    // fontWeight: '600',
  },
  genreText: {
    color: 'rgb(146, 146, 157)',
    fontFamily: 'Montserrat',
    fontSize: 10,
    // fontWeight: '500',
  },
  starNumber: {
    color: 'rgb(255, 135, 0)',
    fontFamily: 'Montserrat',
    fontSize: 12,
    // fontWeight: '600',
    marginLeft: 5,
  },
});

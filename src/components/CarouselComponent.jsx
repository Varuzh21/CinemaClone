import { View, Image, Text, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const CarouselComponent = ({ data }) => {
  return (
    <View style={{ alignItems: 'center', gap: 12 }}>
      <Carousel
        loop
        width={width * 0.9}
        height={154}
        autoPlay
        autoPlayInterval={3000}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={styles.image}
            />
            <View style={styles.overlay}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>On {new Date(item.release_date).toLocaleDateString()}</Text>
            </View>
          </View>
        )}
        scrollAnimationDuration={1000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    width: '100%',
    height: 154,
    marginBottom: 12
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
  },
  title: {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Montserrat',
    fontSize: 16,
    // fontWeight: 600,
    lineHeight: 20,
    letterSpacing: 0.12
  },
  date: {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Montserrat',
    fontSize: 12,
    // fontWeight: 500,
    lineHeight: 15,
    letterSpacing: 0.12,
    marginTop: 5,
  },
  pagination: {
    paddingTop: 12
  },
});

export default CarouselComponent;

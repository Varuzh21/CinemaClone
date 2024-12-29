import React, { memo, useCallback } from 'react';
import { View, Text, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import FastImage from 'react-native-fast-image';

const { width } = Dimensions.get('window');

const CarouselComponent = ({ data }) => {
  const renderItem = useCallback(({ item }) => (
      <View style={styles.cardContainer}>
        <FastImage
          source={{
            uri: item.poster_path
              ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
              : 'https://via.placeholder.com/300',
            priority: FastImage.priority.high,
            cache: FastImage.cacheControl.immutable,
          }}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
          fallback
        />
        <View style={styles.overlay}>
          <Text style={styles.title}>
            {item.title?.length > 25 ? `${item.title.substring(0, 22)}...` : item.title}
          </Text>
          <Text style={styles.date}>
            {item.release_date
              ? `On ${new Date(item.release_date).toLocaleDateString()}`
              : 'Release date unavailable'}
          </Text>
        </View>
      </View>
    ),[]);

  return (
    <View style={styles.carouselContainer}>
      {data && data.length > 0 ? (
        <Carousel
          loop
          width={width * 0.9}
          height={154}
          autoPlay
          // mode="parallax"
          autoPlayInterval={1000}
          data={data}
          renderItem={renderItem}
          scrollAnimationDuration={1000}
          windowSize={3}
        />
      ) : (
        <ActivityIndicator size="large" color="#fff" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: 'center',
  },
  cardContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    width: '100%',
    height: 154,
    marginBottom: 12,
    backgroundColor: 'rgb(37, 40, 54)',
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
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    color: '#fff',
    fontFamily: 'Montserrat',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.12,
  },
  date: {
    color: '#fff',
    fontFamily: 'Montserrat',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.12,
    marginTop: 5,
  },
});

export default memo(CarouselComponent);

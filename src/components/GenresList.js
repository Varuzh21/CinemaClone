import {useState, useEffect, useCallback, memo} from 'react';
import {Text, TouchableOpacity, StyleSheet, View, FlatList} from 'react-native';

function GenresList({genres}) {
  const [activeGenreId, setActiveGenreId] = useState();

  useEffect(() => {
    if (genres.length > 0 && !activeGenreId) {
      setActiveGenreId(genres[0].id);
    }
  }, [genres]);

  const renderItem = useCallback(({item}) => {
    const isActive = item.id === activeGenreId;
    return (
      <TouchableOpacity
        style={[styles.carouselItem, isActive && styles.activeItem]}
        onPress={() => setActiveGenreId(item.id)}>
        <Text style={[styles.itemText, isActive && styles.activeText]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={genres}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        extraData={activeGenreId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 15,
    paddingLeft: 23
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carouselItem: {
    width: 111,
    height: 31,
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    borderRadius: 8,
  },
  activeItem: {
    backgroundColor: 'rgb(37, 40, 54)',
  },
  itemText: {
    color: 'rgb(235, 235, 239)',
    fontFamily: 'Montserrat Medium',
    fontSize: 12,
    fontWeight: '500',
  },
  activeText: {
    color: 'rgb(18, 205, 217)',
    fontFamily: 'Montserrat Bold',
    fontSize: 12,
    // fontWeight: '700',
  },
});

export default memo(GenresList);

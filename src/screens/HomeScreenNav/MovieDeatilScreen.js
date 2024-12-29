import { useEffect } from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import { useDispatch } from 'react-redux';
import { getPopularMoviesRequest } from '../../store/actions/movies';
import { RecommendMovie } from '../../components';
import useMemoizedSelectors from '../../hooks/useMemoizedSelectors';

function MovieDeatilScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getPopularMoviesRequest());
  }, []);

  const { popularMovies } = useMemoizedSelectors();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
       <View>
         {popularMovies.map((movie) => (
           <View key={movie.id} style={{paddingTop: 28}}>
             <RecommendMovie singleMovie={movie} />
           </View>
         ))}
       </View>
    </ScrollView>
  );
}

export default MovieDeatilScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(31, 29, 43)',
    paddingHorizontal: 16,
  }
})

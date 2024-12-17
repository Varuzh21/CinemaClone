import { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getUserRequest } from '../../store/actions/users';
import { getAllGenresRequest, getAllMoviesRequest } from '../../store/actions/movies';
import { Search, GenresList, CarouselComponent, MovieCard } from '../../components';
import { storage } from '../../utils/storage';
import HeardActive from '../../assets/icons/active/heart_active.svg';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const token = storage.getString('userToken');


  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getUserRequest(token));
        await Promise.all([
          dispatch(getAllMoviesRequest()),
          dispatch(getAllGenresRequest()),
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const userSelector = useSelector((state) => state.getUserReducer.user) || [];
  const moviesSelector = useSelector((state) => state.getAllMoviesReducer.movies) || [];
  const genresSelector = useSelector((state) => state.getAllGenresReducer.genres) || [];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#1F1D2B' />
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerContainer}>
            <View style={{ width: '15%' }}>
              <Image source={{ uri: userSelector.image }} style={styles.icon} />
            </View>
            <View style={{ width: '70%', gap: 4 }}>
              <Text style={styles.title}>
                Hello {userSelector.firstName}
              </Text>
              <Text style={styles.description}>
                Let’s stream your favorite movie
              </Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <HeardActive />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.headerArticle}>
          <Search />
        </View>

        <View style={styles.coursel}>
          <CarouselComponent data={moviesSelector} />
        </View>

        <View style={styles.categories}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <GenresList genres={genresSelector} />
        </View>

        <View style={styles.mostPopular}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
            <Text style={styles.mostPopularTitle}>Most popular</Text>
            <TouchableOpacity>
              <Text style={styles.btnText}>See All</Text>
            </TouchableOpacity>
          </View>
          <MovieCard movie={moviesSelector} onNavigate={(id) => navigation.navigate('MovieDetail', { movieId: id })} />
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(31, 29, 43)',
    paddingHorizontal: 16,
  },
  header: {
    width: '100%',
    paddingTop: 8,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  title: {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Montserrat',
    fontSize: 16,
    // fontWeight: 600,
  },
  description: {
    color: 'rgb(146, 146, 157)',
    fontFamily: 'Montserrat',
    fontSize: 12,
    // fontWeight: 500,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
    height: 32,
    borderRadius: 12,
    backgroundColor: 'rgb(37, 40, 54)',
    opacity: 0.8,
    padding: 8,
  },
  headerArticle: {
    width: '100%',
    paddingTop: 32,
  },
  coursel: {
    width: '100%',
    paddingTop: 30,
    paddingBottom: 24
  },
  categories: {
    width: '100%',
    paddingTop: 24
  },
  categoriesTitle: {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Montserrat',
    fontSize: 16,
    // fontWeight: 600
  },
  mostPopular: {
    width: '100%',
    paddingTop: 24
  },
  mostPopularTitle: {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Montserrat',
    fontSize: 16,
    // fontWeight: 600
  },
  btnText: {
    color: 'rgb(18, 205, 217)',
    fontFamily: 'Montserrat',
    fontSize: 14,
    // fontWeight: 500,
  }
})

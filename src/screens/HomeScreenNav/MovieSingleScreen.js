import { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ActivityIndicator, ScrollView, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BackgroundImage, CastList } from '../../components';
import { getSingleMoveRequest, getCreditsMovieRequest } from '../../store/actions/movies';

const MovieDetailsScreen = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const route = useRoute();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { movieId } = route.params;

    useEffect(() => {
        const fetchMovieData = async () => {
            dispatch(getSingleMoveRequest(movieId));
            dispatch(getCreditsMovieRequest(movieId));
            setIsLoading(false);
        };
        fetchMovieData();
    }, [dispatch, movieId]);

    const singleMovieSelector =
      useSelector((state) => state.getSingleMovieReducer.singleMovie) || [];
    console.log('singleMovieSelector', singleMovieSelector);
    const creditsSelector =
      useSelector((state) => state.getCreditsMovieReducer.credits) || [];

    if (isLoading) {
        return (
          <SafeAreaView style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#F05454" />
          </SafeAreaView>
        );
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <StatusBar backgroundColor="transparent" translucent />
          <View>
              <BackgroundImage
                backdrop_path={singleMovieSelector.backdrop_path}
                title={singleMovieSelector.title}
                poster_path={singleMovieSelector.poster_path}
                isFavorite={() => setIsFavorite(!isFavorite)}
                release_date={singleMovieSelector.release_date?.split('-')[0]}
                runtime={singleMovieSelector.runtime}
                genres={singleMovieSelector.genres?.[0]?.name || 'N/A'}
                vote_average={singleMovieSelector.vote_average}
                onNavigate={() => navigation.goBack()}
              />
              <View style={styles.contentContainer}>
                  <Text style={styles.sectionTitle}>Story Line</Text>
                  <Text style={styles.storyLineText}>
                      {singleMovieSelector.overview || 'No description available.'}
                  </Text>

                  <Text style={styles.sectionTitle}>Cast and Crew</Text>
                  <CastList creditsSelector={creditsSelector} />
              </View>
          </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(31, 29, 43)',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1C1C27',
    },
    contentContainer: {
        paddingHorizontal: 16,
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        marginTop: 20,
    },
    storyLineText: {
        color: '#888',
        fontSize: 14,
        marginTop: 10,
        lineHeight: 20,
    },
});

export default MovieDetailsScreen;

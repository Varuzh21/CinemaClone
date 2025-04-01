import { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RadialGradient} from 'react-native-gradients';
import {CastList} from '../../components';
import {getSingleMoveRequest, getCreditsMovieRequest} from '../../store/actions/movies';
import { Play, Calendar, Clock, Film, Star} from '../../assets/icons';
import {Share, DownloadActive2,} from '../../assets/icons/active';

const MovieDetailsScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const route = useRoute();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { movieId } = route.params;

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                dispatch(getSingleMoveRequest(movieId));
                dispatch(getCreditsMovieRequest(movieId))
                setIsLoading(false);
            }catch (error) {
                setIsLoading(false);
                console.error(error);
            }
        })()
    }, [movieId]);

    const singleMovieSelector = useSelector(state => state.getSingleMovieReducer.singleMovie,) || [];
    const creditsSelector = useSelector((state) => state.getCreditsMovieReducer.credits) || [];

    if (isLoading) {
        return (
          <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#F05454" />
          </View>
        );
    }

    return (
          <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
              <ImageBackground style={styles.imageBackground} source={{uri: `https://image.tmdb.org/t/p/w500${singleMovieSelector.backdrop_path}`}}>
                  <View style={styles.gradientOverlay}>
                      <RadialGradient
                        colorList={[
                            {offset: '0%', color: 'rgba(31, 29, 43, 1)', opacity: '0.2'},
                            {offset: '100%', color: 'rgb(31, 29, 43)', opacity: '1'},
                        ]}
                        x="50%"
                        y="30%"
                        rx="100%"
                        ry="60%"
                        style={styles.gradientOverlay}
                      />
                  </View>

                  <View style={styles.imageContainer}>
                      <Image
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500${singleMovieSelector.backdrop_path}`,
                        }}
                        style={styles.image}
                      />
                  </View>

                  <View style={styles.detailsContainer}>
                      <View style={styles.infoRow}>
                          <View style={styles.infoRow}>
                              <Calendar fill="#92929D"/>
                              <Text style={styles.infoText}>
                                  {singleMovieSelector.release_date?.split('-')[0] || 'N/A'}
                              </Text>
                          </View>
                          <Text>|</Text>
                          <View style={styles.infoRow}>
                              <Clock />
                              <Text style={styles.infoText}>
                                  {singleMovieSelector.runtime || 'N/A'} Minutes
                              </Text>
                          </View>
                          <Text>|</Text>
                          <View style={styles.infoRow}>
                              <Film />
                              <Text style={styles.infoText}>
                                  {singleMovieSelector.genres[0].name || 'N/A'}
                              </Text>
                          </View>
                      </View>

                      <View style={{alignItems: 'center'}}>
                          <View style={styles.ratingRow}>
                              <Star />
                              <Text style={styles.ratingText}>
                                  {Math.floor(singleMovieSelector.vote_average) || 'N/A'}
                              </Text>
                          </View>
                      </View>


                      <View style={styles.actionButtons}>
                          <TouchableOpacity style={styles.playButton}>
                              <Play />
                              <Text style={styles.playButtonText}>Play</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.iconButton}>
                              <DownloadActive2 />
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.iconButton}>
                              <Share color="#fff" />
                          </TouchableOpacity>
                      </View>
                  </View>
              </ImageBackground>

              <View style={{paddingHorizontal: 24}}>
                  <Text style={styles.sectionTitle}>Story Line</Text>
                  <Text style={styles.storyLineText}>
                      {singleMovieSelector.overview || 'No description available.'}
                  </Text>

                  <Text style={styles.sectionTitle}>Cast and Crew</Text>
                  <CastList  creditsSelector={creditsSelector}/>
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
    imageContainer: {
        width: 205,
        height: 285,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 80
    },
    imageBackground: {
        width: '100%',
        height: 552,
        overflow: 'hidden',
        alignItems: 'center',
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
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
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
        fontWeight: 'bold',
        marginVertical: 8,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        fontWeight: 'bold',
    },
    actionButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
    },
    playButton: {
        flexDirection: 'row',
        backgroundColor: 'rgb(255, 135, 0)',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginRight: 10,
    },
    playButtonText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 8,
    },
    iconButton: {
        width: 50,
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    storyLineText: {
        color: '#888',
        fontSize: 14,
        marginTop: 10,
        lineHeight: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
    },
});

export default MovieDetailsScreen;

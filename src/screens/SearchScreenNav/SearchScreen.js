import { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, LogBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { getAllGenresRequest, getAllMoviesRequest, getSingleMoveRequest } from '../../store/actions/movies';
import { Search, GenresList, MovieCard, RecommendMovie } from '../../components';
import useMemoizedSelectors from '../../hooks/useMemoizedSelectors';

LogBox.ignoreAllLogs()
const SearchScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(() => {
            dispatch(getAllGenresRequest())
            dispatch(getAllMoviesRequest())
            dispatch(getSingleMoveRequest(111))
    },[]);

    const { movies, genres, single} = useMemoizedSelectors()

    console.log(single, "aaaaa");

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Search />
            </View>

            <View style={styles.genres}>
                <GenresList genres={genres} />
            </View>

            <View style={styles.toDay}>
                <Text style={styles.toDayTitle}>Today</Text>
                <View style={styles.toDayDow}>
                    <RecommendMovie singleMovie={single} />
                </View>
            </View>

            <View style={styles.recommend}>
                <View style={styles.row}>
                    <Text style={styles.recommendTitle}>Recommend for you</Text>
                    <TouchableOpacity>
                        <Text style={styles.btnText}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <MovieCard movie={movies} onNavigate={(id) => navigation.navigate('MovieDetail', { movieId: id })} />
                </View>
            </View>
        </View>
    );
};

export default SearchScreen;

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
    genres: {
        width: '100%',
        paddingTop: 24,
    },
    toDay: {
        width: '100%',
        paddingTop: 28,
    },
    toDayTitle: {
        color: 'rgb(255, 255, 255)',
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 20,
        letterSpacing: 0.12,
    },
    recommend: {
        width: '100%',
        paddingTop: 95,
        gap: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    recommendTitle: {
        color: 'rgb(255, 255, 255)',
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 20,
        letterSpacing: 0.12,
    },
    btnText: {
        color: 'rgb(18, 205, 217)',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 17,
        letterSpacing: 0.12,
    },
    toDayDow: {
        paddingTop: 16,
    },
});

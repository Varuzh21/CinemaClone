import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { Star, Calendar, Clock, Film } from '../assets/icons/index'

const RecommendMovie = ({ singleMovie }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageLeftContainer}>
                <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/w500${singleMovie.backdrop_path}` }} style={styles.image}>
                    <View style={styles.ratingContainer}>
                        <BlurView
                            style={StyleSheet.absoluteFillObject}
                            blurType="light"
                            blurAmount={20}
                            reducedTransparencyFallbackColor="rgba(37, 40, 54, 0.32)"
                        />
                        <Star width={13} height={12} />
                        <Text style={styles.starNumber}>{singleMovie.vote_average}</Text>
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.imageContainer}>
                <View style={{ width: '100%', height: '100%', alignItems: 'flex-start', gap: 11 }}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Premium</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>{singleMovie.title}</Text>
                    </View>
                    <View style={styles.row}>
                        <Calendar width={20} height={20} />
                        <Text style={styles.day}>{singleMovie.release_date?.split('-')[0]}</Text>
                    </View>
                    <View style={styles.row}>
                        <Clock width={20} height={20} />
                        <Text style={styles.day}>{singleMovie.runtime}{' '}Minutes</Text>
                    </View>
                    <View style={styles.row}>
                        <Film width={20} height={20} />
                        <Text style={styles.day}>{singleMovie.genres[0].name}</Text>
                    </View>
                </View>

            </View>
        </View>
    );
};

export default RecommendMovie;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 147,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageLeftContainer: {
        width: '35%',
    },
    imageContainer: {
        width: '55%',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'flex-start',
    },
    ratingContainer: {
        width: 55,
        height: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginRight: 8,
        gap: 5,
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
    },
    starNumber: {
        color: 'rgb(255, 135, 0)',
        fontSize: 12,
        // fontWeight: '600',
    },
    btn: {
        width: 65,
        height: 20,
        backgroundColor: 'rgb(255, 135, 0)',
        paddingVertical: 4,
        borderRadius: 8,
    },
    btnText: {
        color: 'rgb(255, 255, 255)',
        fontFamily: 'Montserrat',
        fontSize: 10,
        // fontWeight: 500,
        lineHeight: 12,
        letterSpacing: 0.12,
        textAlign: 'center'
    },
    title: {
        color: 'rgb(255, 255, 255)',
        fontFamily: 'Montserrat',
        fontSize: 16,
        // fontWeight: 600,
        lineHeight: 20,
        letterSpacing: 0.12
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6
    },
    day: {
        color: 'rgb(146, 146, 157)',
        fontFamily: 'Montserrat',
        fontSize: 12,
        // fontWeight: 500,
        lineHeight: 15,
        letterSpacing: 0.12
    }
});

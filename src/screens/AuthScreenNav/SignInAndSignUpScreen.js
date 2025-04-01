import { Text, View, StyleSheet, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import { Logo, Google, Apple, Facebook } from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { Button, Wrapper } from '../../components';

const { width, height } = Dimensions.get('window');

function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/*<StatusBar backgroundColor="#1F1D2B" />*/}
      <View style={styles.logoContainer}>
        <Logo width={80} height={73} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.label}>CINEMAX</Text>
        <Text style={[styles.description, { width: width * 0.5 }]}>
          Enter your registered Phone Number to Sign Up
        </Text>
      </View>

      <Wrapper>
        <View style={styles.buttonContainer}>
          <Button title="Sign Up" />
        </View>

        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.text1}>I already have an account?</Text>
          <Text style={styles.text2}>Login</Text>
        </TouchableOpacity>
      </Wrapper>

      <View style={styles.dividerContainer}>
        <Text style={styles.divider} />
        <View style={{paddingHorizontal: 1, paddingTop: 19}}>
          <Text style={[styles.description, { marginHorizontal: 8 }]}>Or Sign up with</Text>
        </View>
        <Text style={styles.divider} />
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <Google />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.appleButton]}>
          <Apple />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <Facebook />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(31, 29, 43)',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: height * 0.13,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: height * 0.03,
    gap: height * 0.01,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: height * 0.07,
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 32,
    paddingHorizontal: 60
  },
  divider: {
    width: '30%',
    borderBottomWidth: 1,
    borderColor: '#252836',
    paddingBottom: 5,
  },
  label: {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Montserrat SemiBold',
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
  },
  description: {
    color: 'rgb(146, 146, 157)',
    fontFamily: 'Montserrat SemiBold',
    fontSize: width * 0.030,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    height: 56,
    paddingHorizontal: 24,
    gap: 5,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  text1: {
    color: 'rgb(146, 146, 157)',
    fontFamily: 'Montserrat SemiBold',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: 0.12,
  },
  text2: {
    color: 'rgb(18, 205, 217)',
    fontFamily: 'Montserrat SemiBold',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: 0.12,
  },
  socialContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    gap: 24,
  },
  socialButton: {
    width: '20%',
    height: 69,
    borderRadius: 190,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButton: {
    backgroundColor: 'rgb(255, 255, 255)',
  },
  appleButton: {
    backgroundColor: 'rgb(37, 40, 54)',
  },
  facebookButton: {
    backgroundColor: 'rgb(66, 103, 178)',
  },
});

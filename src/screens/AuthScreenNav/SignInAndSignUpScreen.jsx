import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Logo, Google, Apple, Facebook } from '../../assets/icons'
import { Button } from '../../components';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#1F1D2B' />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 123,
        }}>
        <Logo width={80} height={73} />
      </View>

      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 31,
          gap: 8,
        }}>
        <Text style={styles.label}>CINEMAX</Text>
        <Text style={styles.description}>
          Enter your registered {'\n'}
          Phone Number to Sign Up
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 64,
        }}>
        <Button title="Sign Up" />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 16,
        }}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.text1}>
            I already have an account? <Text style={styles.text2}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 32,
        }}>
        <Text
          style={{
            width: '25%',
            borderBottomWidth: 1,
            borderColor: 'gray',
            paddingBottom: 5,
          }}
        />
        <View style={{ paddingHorizontal: 16, paddingTop: 19 }}>
          <Text style={styles.description}>Or Sign up with</Text>
        </View>
        <Text
          style={{
            width: '25%',
            borderBottomWidth: 1,
            borderColor: 'gray',
            paddingBottom: 5,
          }}
        />
      </View>

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 40,
          gap: 24,
        }}>
        <TouchableOpacity
          style={{
            width: '20%',
            height: 69,
            borderRadius: 190,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(255, 255, 255)',
          }}>
          <Google />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: 69,
            borderRadius: 190,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(37, 40, 54)',
          }}>
          <Apple />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: 69,
            borderRadius: 190,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(66, 103, 178)',
          }}>
          <Facebook />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(31, 29, 43)',
    paddingHorizontal: 24,
  },
  label: {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Montserrat',
    fontSize: 28,
    // fontWeight: '600',
    textAlign: 'center',
  },
  description: {
    color: 'rgb(146, 146, 157)',
    fontFamily: 'Montserrat',
    fontSize: 14,
    // fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    height: 56,
    paddingHorizontal: 24,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text1: {
    color: 'rgb(146, 146, 157)',
    fontFamily: 'Montserrat',
    fontSize: 16,
    // fontWeight: '600',
    lineHeight: 20,
    letterSpacing: 0.12
  },
  text2: {
    color: 'rgb(18, 205, 217)',
    fontFamily: 'Montserrat',
    fontSize: 16,
    // fontWeight: '600',
    lineHeight: 20,
    letterSpacing: 0.12
  },
});

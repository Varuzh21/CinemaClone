import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postUserRequest } from '../../store/actions/users';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { Input, Button } from '../../components/index';
import { storage } from '../../utils/storage';


function SignInScreen() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = useCallback(async () => {
    try {
      setIsLoading(true);
      const { payload } = await dispatch(postUserRequest(form));
      if (payload.accessToken) {
        await storage.setString("userToken", payload.accessToken);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Login failed:", error);
    }
  }, [form]);

  const errorMessage = useSelector(state => state.postUserReducer.error);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#1F1D2B' />
      <View style={styles.row}>
        <Text style={styles.label}>Hi, Tiffany</Text>
        <Text style={styles.label2}>
          Welcome back! Please enter your details.
        </Text>
      </View>

      <View style={styles.form}>
        <Input
          label="User Name"
          secureText={false}
          placeholder="Enter your user name"
          value={form.username}
          onChange={(value) => setForm({...form, username: value})}
        />
        <Input
          label="Password"
          secureText={true}
          placeholder="Enter your password"
          value={form.password}
          onChange={(value) => setForm({...form, password: value})}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingTop: 8,
        }}>
        <TouchableOpacity>
          <Text style={styles.text}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btn}>
        <Button
          title="Login"
          handlerClick={handleLogin}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(31, 29, 43)',
    paddingHorizontal: 24,
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    gap: 8,
  },
  label: {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Montserrat',
    fontSize: 24,
    // fontWeight: 600,
    textAlign: 'center',
  },
  label2: {
    color: 'rgb(235, 235, 239)',
    fontFamily: 'Montserrat',
    fontSize: 12,
    // fontWeight: 500,
    textAlign: 'center',
  },
  form: {
    width: '100%',
    gap: 32,
    paddingTop: 72,
  },
  btn: {
    paddingTop: 40,
  },
  text: {
    color: 'rgb(18, 205, 217)',
    fontFamily: 'Montserrat',
    fontSize: 12,
    // fontWeight: 500,
  },
});

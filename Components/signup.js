import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [focusedInput, setFocusedInput] = useState(null); // Tracks which input is focused
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSignUp = () => {
    const { name, email, password, confirmPassword } = form;

    // Validation: Check if all fields are filled
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Validation: Check if passwords match
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    // If all validations pass
    Alert.alert('Success', 'You have successfully signed up!');
    // Navigate to Login screen
    navigation.navigate('login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={[styles.input , focusedInput === 'name' && styles.inputFocused]}
        onFocus={()=>setFocusedInput('name')}
        onBlur={()=>setFocusedInput(null)}
        placeholder="Full Name"
        value={form.name}
        onChangeText={(value) => handleInputChange('name', value)}
      />
      <TextInput
        style={[styles.input,focusedInput === 'email' && styles.inputFocused]}
        onFocus={()=>setFocusedInput('email')}
        onBlur={()=>setFocusedInput(null)}
        placeholder="Email"
        keyboardType="email-address"
        value={form.email}
        onChangeText={(value) => handleInputChange('email', value)}
      />
      <View style={[styles.passwordContainer, focusedInput === 'password'&& styles.inputFocused]}>
        <TextInput
          style={[styles.passwordInput, focusedInput === 'password'&& styles.inputFocused]}
          placeholder="Password"
          onFocus={()=>setFocusedInput('password')}
          onBlur={()=>setFocusedInput(null)}
          secureTextEntry={!passwordVisible}
          value={form.password}
          onChangeText={(value) => handleInputChange('password', value)}
        />
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Text style={styles.toggleButtonText}>
            {passwordVisible ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.passwordContainer,focusedInput === 'cnfmpassword'&& styles.inputFocused]}>
        <TextInput
          style={[styles.passwordInput,focusedInput === 'cnfmpassword' && styles.inputFocused]}
          onFocus={()=>setFocusedInput('cnfmpassword')}
          onBlur={()=>setFocusedInput(null)}
          placeholder="Confirm Password"
          secureTextEntry={!confirmPasswordVisible}
          value={form.confirmPassword}
          onChangeText={(value) => handleInputChange('confirmPassword', value)}
        />
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
        >
          <Text style={styles.toggleButtonText}>
            {confirmPasswordVisible ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('login')}
      >
        <Text style={styles.loginButtonText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#1570EF',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  inputFocused: {
    borderColor: '#000', // Border color when focused
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
    height: 50,
  },
  toggleButton: {
    paddingHorizontal: 10,
  },
  toggleButtonText: {
    color: '#1570EF',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#1570EF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.6)',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  loginButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#1570EF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;

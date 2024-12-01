import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Loginscreen( {navigation} ) {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSendOtp = () => {
    // Handle OTP sending logic here
    alert(`OTP sent to: ${mobileNumber}`);
    navigation.navigate('otp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter your mobile number</Text>
      <Text style={styles.subheading}>
        You will receive an OTP for verification
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.countryCode}>+91</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="Enter mobile number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          maxLength={10}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSendOtp}
        disabled={mobileNumber.length !== 10}
      >
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        *By signing in, you agree to our{' '}
        <Text style={styles.linkText}>terms of service</Text>.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  countryCode: {
    fontSize: 16,
    color: '#000',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.6)'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footerText: {
    fontSize: 12,
    color: '#6c757d',
    textAlign: 'center',
  },
  linkText: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

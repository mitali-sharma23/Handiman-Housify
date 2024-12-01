import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function OtpVerification( {navigation} ) {
  const [otp, setOtp] = useState(new Array(4).fill(''));

  const handleInputChange = (text, index) => {
    const otpArray = [...otp];
    otpArray[index] = text;
    setOtp(otpArray);

    // Automatically focus on the next input if text is entered
    if (text.length === 1 && index < otp.length - 1) {
      const nextInput = index + 1;
      inputs[nextInput]?.focus();
    }
  };

  const inputs = {};

  const handleVerifyOtp = () => {
    alert(`OTP entered: ${otp.join('')}`);
    navigation.navigate('verify');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Verifying OTP sent to your mobile number</Text>
      <Text style={styles.subheading}>
        OTP can be entered manually, or it will be verified automatically.
      </Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs[index] = ref)}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleInputChange(text, index)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
        <Text style={styles.buttonText}>Verify</Text>
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
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },
  otpInput: {
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 20,
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

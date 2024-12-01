import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Introscreen({navigation} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter your full name</Text>
      <Text style={styles.subHeading}>
        Your full name will help to communicate you and house helper.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('servicetype')} >
        <Text style={styles.buttonText}>Continue →</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        By signing in, you agree to our{' '}
        <Text style={styles.link}>terms of service</Text>.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#007AFF',
    fontSize: 18,
    color: '#000',
    marginBottom: 30,
    padding: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.6)'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});

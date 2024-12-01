import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const AttendancePage = ({route , navigation}) => {
  const { helper } = route.params; 
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Home Service</Text>
      </View>

      {/* OTP Card */}
      <View style={styles.otpCard}>
        <Text style={styles.cardTitle}>Selected helper</Text>
        <Text style={styles.cardSubtitle}>Please ask Tanvee's for the OTP.</Text>

        {/* OTP Input */}
        <View style={styles.otpInputContainer}>
          <TextInput style={styles.otpInput} maxLength={1} keyboardType="number-pad" />
          <TextInput style={styles.otpInput} maxLength={1} keyboardType="number-pad" />
          <TextInput style={styles.otpInput} maxLength={1} keyboardType="number-pad" />
          <TextInput style={styles.otpInput} maxLength={1} keyboardType="number-pad" />
        </View>

        <Text style={styles.helperText}>She doesn’t have access to her mobile?</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Click Photograph</Text>
        </TouchableOpacity>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={()=>navigation.navigate('success')}>
          <Text style={styles.submitButtonText}>Submit OTP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    padding: 20,
  },
  header: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  otpCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 15,
    marginBottom: 20,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  helperText: {
    fontSize: 12,
    color: '#666',
  },
  linkText: {
    fontSize: 14,
    color: '#007bff',
    marginTop: 5,
  },
  submitButton: {
    marginTop: 20,
    width: '80%',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AttendancePage;

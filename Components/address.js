import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddHomeLocation = ( {navigation , route} ) => {
    const { helper } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add your home location</Text>
      <Text style={styles.subtitle}>
        Your location and mobile number will be shared with Tanvee, so she can contact you.
      </Text>
      
      <Text style={styles.label}>Floor Number/Flat Name</Text>
      <TextInput 
        style={styles.input} 
        placeholder="4, 3214 - Rajveer Pandit" 
        placeholderTextColor="#aaa"
      />
      
      <Text style={styles.label}>Landmark (Optional)</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Near Sundaram Sports Club" 
        placeholderTextColor="#aaa"
      />
      
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('attend',{helper})}>
        <Text style={styles.buttonText}>Save Address</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AddHomeLocation;

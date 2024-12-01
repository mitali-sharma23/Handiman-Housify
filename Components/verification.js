import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const VerificationProcess = ({ route, navigation }) => {
  const { helper } = route.params; // Access selected helper data

  return (
    <ScrollView style={styles.container}>
      {/* Image Placeholder */}
      <View style={styles.imageContainer}>
        {/* Placeholder for future helper image */}
        <Image
          source={null} // No image for now, placeholder only
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Title Section */}
      <Text style={styles.title}>Verification Process</Text>
      <Text style={styles.description}>
        We ensure that {helper.name} meets all required standards. Below is the verification process followed:
      </Text>

      {/* Steps Section */}
      <View style={styles.stepContainer}>
        <View style={styles.stepBox}>
          <Text style={styles.stepTitle}>Background Check</Text>
          <Text style={styles.stepDescription}>
            We verified {helper.name}'s documents and background, including testimonies from previous employers.
          </Text>
        </View>

        <View style={styles.stepBox}>
          <Text style={styles.stepTitle}>Trial Period</Text>
          <Text style={styles.stepDescription}>
            {helper.name} underwent a trial period to demonstrate proficiency in {helper.roles.join(' and ')}.
          </Text>
        </View>

        <View style={styles.stepBox}>
          <Text style={styles.stepTitle}>Training</Text>
          <Text style={styles.stepDescription}>
            {helper.name} successfully completed training with strict guidelines to ensure quality service.
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('avail',{helper})}>
        <Text style={styles.buttonText}>Continue →</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  imageContainer: {
    height: 250,
    backgroundColor: '#f0f0f0', // Placeholder color
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    marginTop: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  stepContainer: {
    marginBottom: 20,
  },
  stepBox: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#1570EF',
    height: 150
  },
  stepTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  stepDescription: {
    fontSize: 15,
    color: '#555',
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
});

export default VerificationProcess;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const HelperDetailsScreen = ({ route , navigation }) => {
  const { helper } = route.params; // Get the selected helper's data

  return (
    <View style={styles.container}>
      {/* Image Placeholder */}
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageText}>Image Placeholder</Text>
      </View>

      {/* Helper Details */}
      <View style={styles.detailsContainer}>
        {/* Helper Name */}
        <Text style={styles.helperName}>{helper.name}</Text>
        <Text style={styles.helperDescription}>
          {`${helper.name} is a professional for ${helper.roles.join(' and ')} with ${helper.experience} of experience.`}
        </Text>

        {/* Service Info */}
        <View style={styles.infoSection}>
          <Text style={styles.infoLabel}>Service:</Text>
          <Text style={styles.infoValue}>{helper.roles.join(', ')}</Text>
        </View>

        {/* Experience Info */}
        <View style={styles.infoSection}>
          <Text style={styles.infoLabel}>Experience:</Text>
          <Text style={styles.infoValue}>{helper.experience}</Text>
        </View>

        {/* Language Skills */}
        <Text style={styles.languageTitle}>Languages Known:</Text>
        <View style={styles.languageTable}>
          {['English', 'Hindi', 'Marathi'].map((lang) => (
            <View key={lang} style={styles.languageRow}>
              <Text style={styles.languageText}>{lang}</Text>
              <Text style={styles.checkMark}>✔</Text>
            </View>
          ))}
        </View>

        {/* Hire Button */}
        <TouchableOpacity style={styles.hireButton} onPress={()=> navigation.navigate('verification',{helper})}>
          <Text style={styles.hireButtonText}>Hire {helper.name}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  imagePlaceholder: {
    height: 250,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  imageText: {
    fontSize: 16,
    color: '#555',
  },
  detailsContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: -2 },
    elevation: 5,
  },
  helperName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  helperDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
    lineHeight: 20,
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
  },
  infoValue: {
    fontSize: 16,
    color: '#666',
  },
  languageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  languageTable: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f7f7f7',
  },
  languageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  languageText: {
    fontSize: 16,
    color: '#555',
  },
  checkMark: {
    fontSize: 16,
    color: '#28a745',
    fontWeight: 'bold',
  },
  hireButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  hireButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default HelperDetailsScreen;

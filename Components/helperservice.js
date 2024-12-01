import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

const HelperScreen = ({ route, navigation }) => {
  const { helper } = route.params; // Get helper details from route params
  const [selectedServices, setSelectedServices] = useState([]);

  // Map helper roles to service buttons dynamically
  const services = helper.roles.map((role, index) => ({
    id: index.toString(),
    name: role,
    icon: '✔️', // Placeholder for icons (you can replace this with actual icons if needed)
  }));

  const toggleServiceSelection = (serviceName) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((service) => service !== serviceName)
        : [...prev, serviceName]
    );
  };

  const handleNext = () => {
    // Navigate to the next screen with the selected services
    navigation.navigate('DaysScreen', { selectedServices });
  };

  const renderServiceButton = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.serviceButton,
        selectedServices.includes(item.name) && styles.serviceButtonSelected,
      ]}
      onPress={() => toggleServiceSelection(item.name)}
    >
      <Text
        style={[
          styles.serviceText,
          selectedServices.includes(item.name) && styles.serviceTextSelected,
        ]}
      >
        {item.icon} {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>
        Select the services to avail from {helper.name}
      </Text>

      {/* Service Buttons */}
      <FlatList
        data={services}
        renderItem={renderServiceButton}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      {/* Next Button */}
      <TouchableOpacity
        style={[styles.nextButton, selectedServices.length === 0 && styles.nextButtonDisabled]}
        onPress={handleNext}
        disabled={selectedServices.length === 0}
      >
        <Text style={styles.nextButtonText}>Next →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 24,
    textAlign: 'center',
  },
  listContainer: {
    marginBottom: 24,
  },
  serviceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  serviceButtonSelected: {
    backgroundColor: '#BBDEFB',
    borderColor: '#007BFF'
  },
  serviceText: {
    fontSize: 18,
  },
  serviceTextSelected: {
    color: '#007BFF',
  },
  nextButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  nextButtonDisabled: {
    backgroundColor: '#A5D6F9',
  }
});

export default HelperScreen;

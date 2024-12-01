import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const ServiceSelectionScreen = ( {navigation} ) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
   'Cooking', 'Cleaning', 'Driver', 'Pet Walk', 'Babysitting', 'Gardening', 'Plumbing', 'Tutoring' 
  ];

  const toggleSelection = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select the services you need.</Text>
      <ScrollView contentContainerStyle={styles.grid}>
        {services.map((service) => (
          <TouchableOpacity
            key={service}
            style={[
              styles.card,
              selectedServices.includes(service) && styles.selectedCard,
            ]}
            onPress={() => toggleSelection(service)}
          >
            <View style={styles.imagePlaceholder} />
            <Text style={styles.cardText}>{service}</Text>
            {selectedServices.includes(service) && (
              <View style={styles.checkmark} />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('hire' ,{selectedServices})}>
        <Text style={styles.buttonText}>Find Helper →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '1px 1px 6px rgba(0, 0, 0, 0.1)',
  },
  selectedCard: {
    borderColor: '#007bff',
    borderWidth: 2,
  },
  imagePlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  checkmark: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 20,
    height: 20,
    backgroundColor: '#007bff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ServiceSelectionScreen;

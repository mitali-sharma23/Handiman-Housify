import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const Hirescreen = ({ navigation, route }) => {
  const { selectedServices } = route.params || []; // Get selected services from the previous screen
  const [filteredHelpers, setFilteredHelpers] = useState([]);

  const allHelpers = [
    {
      id: '1',
      name: 'Tanvee Krishna',
      roles: ['Cooking', 'Cleaning'],
      experience: '2+ Years',
      rating: '4.8+',
    },
    {
      id: '2',
      name: 'Divyansh Savanur',
      roles: ['Driver'],
      experience: '1+ Years',
      rating: '4.8+',
    },
    {
      id: '3',
      name: 'Abhay Verma',
      roles: ['Plumbing','Tutorial'],
      experience: '1+ Years',
      rating: '4.8+',
    },
    // Add more helpers as needed
  ];

  // Filter helpers based on selected services
  useEffect(() => {
    const filtered = allHelpers.filter((helper) =>
      helper.roles.some((role) => selectedServices.includes(role))
    );
    setFilteredHelpers(filtered);
  }, [selectedServices]);

  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('helper', { helper: item })}
    >
      <View style={styles.imageSpace} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.roles}>{item.roles.join(', ')}</Text>
        <Text style={styles.experience}>{item.experience}</Text>
      </View>
      <View style={styles.rating}>
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Helpers</Text>
      <View style={styles.filters}>
        {selectedServices.map((service) => (
          <TouchableOpacity style={styles.filterButton} key={service}>
            <Text style={styles.filterText}>{service}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {filteredHelpers.length === 0 ? (
        <Text>No helpers available for selected services.</Text>
      ) : (
        <FlatList
          data={filteredHelpers}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  filters: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  filterText: {
    fontSize: 14,
    color: '#333',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginBottom: 16,
    overflow: 'hidden',
  },
  imageSpace: {
    height: 250,
    backgroundColor: '#ddd',
  },
  cardContent: {
    padding: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  roles: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  experience: {
    fontSize: 12,
    color: '#999',
  },
  rating: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 8,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Hirescreen;

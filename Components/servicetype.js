import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export default function ServiceTypeScreen( {navigation} ) {
  const services = [
    { id: '1', title: 'Home' },
    { id: '2', title: 'Office' },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Where do you need service?</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Add Image component here in the future */}
            {/* <Image source={{ uri: 'your-image-url' }} style={styles.imagePlaceholder} /> */}
            <View style={styles.imagePlaceholder}>
            <TouchableOpacity style={styles.cardTextContainer} onPress={()=>navigation.navigate('select')}>
              <Text style={styles.cardText}>{item.title}</Text>
              <Text style={styles.arrow}>→</Text>
            </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.cardContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    marginBottom: 30,
  },
  cardContainer: {
    paddingBottom: 20,
  },
  card: {
    borderRadius: 20,
    backgroundColor: '#FFF',
    overflow: 'hidden',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.5)',
    shadowRadius: 20
  },
  imagePlaceholder: {
    height: 300, // Adjust the height as needed
    backgroundColor: '#D3D3D3', // Placeholder color
  },
  cardTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFF',
    width: '90%',
    marginLeft: 15,
    marginTop: 10,
    borderRadius: 10,
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.6)'
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  arrow: {
    fontSize: 20,
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

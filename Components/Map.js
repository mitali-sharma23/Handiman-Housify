import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const LocationDetails = ({ route, navigation }) => {
  const { location } = route.params; // Get location details passed from the search screen
  const { helper } = route.params;
  return (
    <View style={styles.container}>
      {/* Top Section: Map View */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: parseFloat(location.lat),
          longitude: parseFloat(location.lon),
          latitudeDelta: 0.01, // Zoom level
          longitudeDelta: 0.01,
        }}
      >
        {/* Place a marker on the map */}
        <Marker
          coordinate={{
            latitude: parseFloat(location.lat),
            longitude: parseFloat(location.lon),
          }}
          title={location.display_name}
        />
      </MapView>

      {/* Bottom Section: Address and Button */}
      <View style={styles.detailsContainer}>
        <Text style={styles.addressText}>{location.display_name}</Text>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={()=>navigation.navigate('address' , {helper})}
        >
          <Text style={styles.buttonText}>Enter Complete Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 2,
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 34,
  },
  addressText: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 23,
    textAlign: 'center',
    marginTop: 13,
  },
  confirmButton: {
    width: '90%',
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LocationDetails;

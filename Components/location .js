import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as Location from 'expo-location';

const Locationscreen = ( {navigation , route} ) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const { helper } = route.params;
  // Fetch locations based on search query
  const fetchLocations = async (query) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          query + ', Ajmer'
        )}&format=json&addressdetails=1&limit=10`,
        {
          headers: {
            'User-Agent': 'YourAppName/1.0 (your.email@example.com)', // Add a user agent to prevent blocking
          },
        }
      );
      const data = await response.json();
      setLocations(data);
    } catch (error) {
      console.error('Error fetching locations:', error);
      Alert.alert('Error', 'Failed to fetch locations.');
    }
  };

  // Fetch the user's current location
  const fetchCurrentLocation = async () => {
    setLoading(true); // Show loading state
    try {
      // Request location permissions
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required.');
        setLoading(false);
        return;
      }

      // Get the current location
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      // Log the coordinates for debugging
      console.log('Latitude:', latitude, 'Longitude:', longitude);

      // Fetch location details from Nominatim using latitude and longitude
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`, 
        {
          headers: {
            'User-Agent': 'YourAppName/1.0 (your.email@example.com)', // Add a user agent to prevent blocking
          },
        }
      );

      // Log the content type for debugging
      const contentType = response.headers.get('content-type');
      console.log('Content-Type:', contentType); // Log content-type for debugging

      if (!contentType || !contentType.includes('application/json')) {
        // Log the response text if it's not JSON
        const text = await response.text(); // Get response as text
        console.log('Response Text:', text); // Log the response for debugging
        throw new Error('Response is not JSON');
      }

      // Parse JSON data
      const data = await response.json();

      // Set the current location in the list
      setLocations([
        {
          display_name: data.display_name,
          lat: latitude,
          lon: longitude,
        },
      ]);
      Alert.alert('Success', 'Fetched your current location!');
    } catch (error) {
      console.error('Error fetching current location:', error);
      Alert.alert('Error', error.message || 'Failed to fetch your location.');
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Location in Ajmer</Text>

      {/* Search Input */}
      <TextInput
        style={styles.input}
        placeholder="Search for a place (e.g., hospital, school)"
        value={searchQuery}
        onChangeText={(text) => {
          setSearchQuery(text);
          if (text.length > 2) fetchLocations(text); // Fetch locations when user types
        }}
      />

      {/* Locations List */}
      <FlatList
  data={locations}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={styles.locationCard}
      onPress={() => navigation.navigate('locatemap', { location: item } ,{helper})}
    >
      <Text style={styles.locationTitle}>{item.display_name}</Text>
    </TouchableOpacity>
  )}
/>


      {/* Use Current Location Button */}
      <TouchableOpacity
        style={styles.currentLocationButton}
        onPress={fetchCurrentLocation}
        disabled={loading} // Disable button while loading
      >
        <Text style={styles.currentLocationText}>
          {loading ? 'Fetching location...' : 'Use current location'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
  },
  locationCard: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  locationTitle: {
    fontSize: 16,
    color: '#000',
  },
  currentLocationButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#EAF4FF',
    borderRadius: 10,
    alignItems: 'center',
  },
  currentLocationText: {
    color: '#007BFF',
    fontSize: 16,
  },
});

export default Locationscreen;

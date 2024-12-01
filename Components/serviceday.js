import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

const SelectDaysScreen = ({ route ,navigation }) => {
    const {selectedServices} = route.params;
    const { helper } = route.params;
  const [selectedDays, setSelectedDays] = useState([]);

  const days = [
    { id: '1', name: 'Monday', icon: '📅' },
    { id: '2', name: 'Tuesday', icon: '📅' },
    { id: '3', name: 'Wednesday', icon: '📅' },
    { id: '4', name: 'Thursday', icon: '📅' },
    { id: '5', name: 'Friday', icon: '📅' },
    { id: '6', name: 'Saturday', icon: '📅' },
  ];

  const toggleDaySelection = (dayName) => {
    setSelectedDays((prev) =>
      prev.includes(dayName)
        ? prev.filter((day) => day !== dayName)
        : [...prev, dayName]
    );
  };

  const handleNext = () => {
    // Navigate to the next screen with selectedDays
    navigation.navigate('NextScreen', { selectedDays } , {helper});
  };

  const renderDayButton = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.dayButton,
        selectedDays.includes(item.name) && styles.dayButtonSelected,
      ]}
      onPress={() => toggleDaySelection(item.name)}
    >
      <Text
        style={[
          styles.dayText,
          selectedDays.includes(item.name) && styles.dayTextSelected,
        ]}
      >
        {item.icon}   {item.name}
      </Text>
      {selectedDays.includes(item.name) && <Text style={styles.checkIcon}>✔</Text>}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>
        Select service days for {selectedServices}
      </Text>

      {/* Days List */}
      <FlatList
        data={days}
        renderItem={renderDayButton}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      {/* Next Button */}
      <TouchableOpacity
        style={[styles.nextButton, selectedDays.length === 0 && styles.nextButtonDisabled]}
        onPress={handleNext}
        disabled={selectedDays.length === 0}
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
  dayButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  dayButtonSelected: {
    backgroundColor: '#BBDEFB',
    borderColor: '#007BFF'
  },
  dayText: {
    fontSize: 16,
  },
  dayTextSelected: {
    color: '#007BFF',
  },
  checkIcon: {
    fontSize: 16,
    color: '#007BFF',
    marginLeft: 8,
  },
  nextButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20
  },
  nextButtonDisabled: {
    backgroundColor: '#A5D6F9',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SelectDaysScreen;

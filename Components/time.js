import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Timescreen = ( {navigation,route} ) => {
  const [selectedTime, setSelectedTime] = useState([]);
  const { helper } = route.params;
  const times = ['7:00 AM', '8:00 AM', '8:30 AM'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select services starting time</Text>
      
      {times.map((time, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.timeButton,
            selectedTime === time && styles.selectedTimeButton,
          ]}
          onPress={() => setSelectedTime(time)}
        >
          <Text
            style={[
              styles.timeText,
              selectedTime === time && styles.selectedTimeText,
            ]}
          >
            {time}
          </Text>
        </TouchableOpacity>
      ))}

      <View style={styles.noteContainer}>
        <Text style={styles.noteText}>
          Note: We don’t provide any groceries for cooking. Cook expects groceries for cooking.
        </Text>
      </View>

      <TouchableOpacity style={[styles.confirmButton,selectedTime.length === 0 && styles.nextButtonDisabled]} disabled={selectedTime.length === 0} onPress={()=>navigation.navigate('location' ,{helper})}>
        <Text style={styles.confirmButtonText}>Confirm Hire</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  timeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectedTimeButton: {
    borderColor: '#007BFF',
    backgroundColor: '#EAF4FF',
  },
  timeText: {
    fontSize: 16,
    color: '#000000',
  },
  selectedTimeText: {
    color: '#007BFF',
    fontWeight: '600',
  },
  noteContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F0F4F8',
  },
  noteText: {
    fontSize: 14,
    color: '#555555',
  },
  confirmButton: {
    marginTop: 30,
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  nextButtonDisabled: {
    backgroundColor: '#A5D6F9',
  },
});

export default Timescreen;

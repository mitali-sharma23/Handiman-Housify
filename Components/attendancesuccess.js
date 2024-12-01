import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Install using `expo install @expo/vector-icons`

const AttendanceSuccess = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Attendance Card */}
      <View style={styles.attendanceCard}>
        {/* Title and Close Icon */}
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Tanvee's Attendance</Text>
          <TouchableOpacity>
            <MaterialIcons name="close" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Subtitle */}
        <Text style={styles.cardSubtitle}>Please ask Tanvee's for the OTP.</Text>

        {/* Success Checkmark */}
        <View style={styles.checkmarkContainer}>
          <MaterialIcons name="check-circle" size={64} color="green" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
  },
  attendanceCard: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 3,
  },
  cardHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
  checkmarkContainer: {
    marginTop: 20,
  },
});

export default AttendanceSuccess;

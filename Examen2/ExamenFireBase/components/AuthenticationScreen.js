import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const AuthenticationScreen = ({ user, handleLogout }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>Welcome, {user.email}</Text>
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos para la pantalla de autenticación
const styles = StyleSheet.create({
  authContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AuthenticationScreen;

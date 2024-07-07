import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, auth }) => {
  const handleAuthentication = () => {
    if (isLogin) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
        })
        .catch((error) => {
          console.error(error); 
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
        })
        .catch((error) => {
          console.error(error); 
        });
    }
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={handleAuthentication}
      >
        <Text style={styles.buttonText}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.linkContainer}
        onPress={() => setIsLogin(!isLogin)}
      >
        <Text style={styles.linkText}>{isLogin ? 'Create an account' : 'Login'}</Text>
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
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#3498db',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkContainer: {
    marginTop: 20,
  },
  linkText: {
    color: '#3498db',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AuthScreen;

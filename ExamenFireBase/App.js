import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import AuthScreen from './components/AuthScreen';
import AuthenticationScreen from './components/AuthenticationScreen.js';
import { auth } from './firebase/config';

export default function App() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [user, setUser] = useState(null); 
  const [isLogin, setIsLogin] = useState(true); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); 
    });
    return unsubscribe; 
  }, []);

  // Logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null); 
      })
      .catch((error) => {
        console.error(error); 
      });
  };

  return (
    <View style={styles.container}>
      {user ? (
        <AuthenticationScreen user={user} handleLogout={handleLogout} />
      ) : (
        <AuthScreen
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          auth={auth}
        />
      )}
    </View>
  );
}

// Estilos para la aplicación
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
});

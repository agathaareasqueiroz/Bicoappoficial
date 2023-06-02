import React from 'react';
import {TouchableOpacity ,View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Text style={styles.welcomeText}>Bem vindo!</Text>
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.title}>Bico Freelancers</Text>
        <Text style={styles.text}>Conheça nossa Equipe</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#63cfbe' }]}
          onPress={() => handleNavigation('LoginCadastro')}
        >
          <Text style={styles.buttonText}>Login/Cadastre-se</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#63cfbe' }]}
          onPress={() => handleNavigation('Perfil')}
        >
          <Text style={styles.buttonText}>Nossa Equipe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: 'rgb(100,100,100)',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: '#63cfbe',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: '#63cfbe',
  },
  text: {
    color: '#63cfbe',
    fontSize: 28,
  },
  button: {
    backgroundColor: '#63cfbe',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Welcome;

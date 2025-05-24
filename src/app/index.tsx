import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Link, useRouter} from 'expo-router';
import { useState } from 'react';

export default function App() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin() {
    // Aqui você pode adicionar lógica de autenticação
    router.replace('/home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={{ color: 'black', fontWeight: '500' }}>Ecom</Text>
        <Text style={{ color: '#A07A28' }}>Cars+</Text>
      </Text>
      <Text style={styles.subtitle}>Entrar</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar no ecompCars+</Text>
      </TouchableOpacity>
      <Link href="/register" style={[styles.button, { display: 'flex', alignItems: 'center', justifyContent: 'center' }]}>
        <Text style={styles.buttonText}>Registrar-me</Text>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#A07A28', // Alterando a cor do título para #A07A28
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'medium',
    marginBottom: 24, 
    color: '#A07A28', // Alterando a cor do subtítulo para dourado
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#A07A28',
    borderWidth: 3, // Tornando a borda mais grossa
    borderRadius: 100,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#A07A28', // Alterando a cor dos botões para dourado
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
    alignItems: 'center', // Garantindo alinhamento central
    marginVertical: 32,
    width: '100%', // Garantindo que os botões tenham o mesmo tamanho
    justifyContent: 'center', // Centralizando o texto nos botões
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
});

import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={{ color: '#000' }}>ecom</Text>
        <Text style={{ fontWeight: 'bold', color: '#A07A28' }}>Cars+</Text>
      </Text>
      <Text style={styles.subtitle}>Entrar</Text>
      <TextInput placeholder='Email' style={styles.input} />
      <TextInput placeholder='Senha' style={styles.input} secureTextEntry={true} />
      <Text style={styles.button}>Entrar no ecomCars+</Text>
      <Link style={styles.button} href={"/register"}>
        <Text style={styles.button}>Registar-me</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: 'medium',
    color: '#A07A28',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#A07A28',
    borderWidth: 3,
    borderRadius: 100,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#A07A28',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    textAlign: 'center',
    marginTop: 10,
    width: '80%',
    textAlignVertical: 'center',
  },
});

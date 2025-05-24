import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  function handleLogout() {
    router.replace('/');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao ecomCars+</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
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
    color: '#A07A28',
  },
  button: {
    backgroundColor: '#A07A28',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
    alignItems: 'center',
    marginVertical: 32,
    width: '100%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

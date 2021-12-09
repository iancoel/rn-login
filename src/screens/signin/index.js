import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import api from '../../services';

export default function SignIn() {
  const [token, setToken] = useState({});
  const [user, setUser] = useState({});
  const navigation = useNavigation();

  const handleLogin = () => {
    api
      .post('session', user, {
        headers: {
          ContentType: 'application/json',
        },
      })
      .then(r => {
        console.log(r.data);
        setToken(r.data);
        setTimeout(() => {
          navigation.navigate('Dash');
        }, 3000);
      })
      .catch(err => Alert(err))
      .finally(() =>
        setUser({
          email: '',
          password: '',
        }),
      );
  };

  const handleRegister = () => {
    navigation.navigate('Cadastre-se');
  };

  return (
    <SafeAreaView>
      <View style={styles.default}>
        <View style={styles.card}>
          <Text style={styles.title}>Logar</Text>
          <View>
            <TextInput
              placeholder="E-mail"
              value={user.email}
              onChangeText={e => setUser({...user, email: e})}
            />
            <TextInput
              placeholder="senha"
              secureTextEntry={true}
              value={user.password}
              onChangeText={e => setUser({...user, password: e})}
            />
            <Button title="Logar" onPress={handleLogin} />
          </View>
        </View>
        <View>
          <Text>Ainda não tem conta?</Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  card: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderRadius: 12,
    minWidth: '80%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

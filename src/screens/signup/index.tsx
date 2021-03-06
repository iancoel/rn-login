import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import api from '../../services';

import {IUser} from '../../types';

const SignUp: React.FC = () => {
  const navigation: void | any = useNavigation();
  const [data, setData] = useState<IUser>({} as IUser);

  const handleLogin = () => {
    navigation.navigate('Logar');
  };

  const handleRegister = useCallback(() => {
    api
      .post('users', data)
      .then(res => {
        console.log(res);
        navigation.navigate('Logar');
        setData({
          name: '',
          email: '',
          password: '',
        });
      })
      .catch(() => console.log('Houve algum erro'))
      .finally(() => {
        console.log(data);
        setData({
          name: '',
          email: '',
          password: '',
        });
      });
  }, [data, navigation]);

  return (
    <SafeAreaView>
      <View style={styles.default}>
        <View style={styles.card}>
          <TextInput
            placeholder="Nome"
            value={data.name}
            onChangeText={e => setData({...data, name: e})}
          />
          <TextInput
            placeholder="E-mail"
            value={data.email}
            onChangeText={e => setData({...data, email: e})}
          />
          <TextInput
            placeholder="Senha"
            secureTextEntry={true}
            value={data.password}
            onChangeText={e => setData({...data, password: e})}
          />
          <Text>Cadastre-se</Text>
          <Button title="Cadastrar" onPress={handleRegister} />
        </View>
        <View>
          <Text>Já possui cadastro?</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text>Logar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  card: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 12,
  },
});

export default SignUp;

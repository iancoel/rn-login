import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default function SignUp() {
  return (
    <SafeAreaView>
      <View style={styles.default}>
        <View style={styles.card}>
          <TextInput placeholder="E-mail" />
          <TextInput placeholder="Senha" secureTextEntry={true} />
          <TouchableOpacity>
            <Text>Cadastre-se</Text>
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
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 12,
  },
});

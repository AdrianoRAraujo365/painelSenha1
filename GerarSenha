import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function GerarSenha({
  pacientes,
  onGerarSenha
}) {

  return (
    <View style={styles.card}>

      <Text style={styles.titulo}>
        Gerar Senhas
      </Text>

      <FlatList
        data={pacientes}
        keyExtractor={(item) =>
          item.id.toString()
        }

        renderItem={({ item }) => (
          <View style={styles.item}>

            <Text>
              {item.nome}
            </Text>

            <Text>
              {item.especialidade}
            </Text>

            <TouchableOpacity
              style={styles.botao}
              onPress={() =>
                onGerarSenha(item)
              }
            >
              <Text style={styles.textoBotao}>
                Gerar Senha
              </Text>
            </TouchableOpacity>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },

  item: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingBottom: 10
  },

  botao: {
    backgroundColor: '#1565C0',
    padding: 10,
    borderRadius: 8,
    marginTop: 5
  },

  textoBotao: {
    color: '#FFF',
    textAlign: 'center'
  }
});

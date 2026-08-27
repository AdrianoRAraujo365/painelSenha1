import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

export default function GerarChamada({
  ultimaChamada,
  onChamar
}) {

  return (
    <View style={styles.card}>

      <Text style={styles.titulo}>
        Chamada de Senhas
      </Text>

      <Button
        title="Chamar Próximo Paciente"
        onPress={onChamar}
      />

      {ultimaChamada && (

        <View style={styles.painel}>

          <Text style={styles.senha}>
            SENHA:
            {' '}
            {ultimaChamada.numeroSenha}
          </Text>

          <Text>
            Nome:
            {' '}
            {ultimaChamada.nome}
          </Text>

          <Text>
            Idade:
            {' '}
            {ultimaChamada.idade}
          </Text>

          <Text>
            Especialidade:
            {' '}
            {ultimaChamada.especialidade}
          </Text>

          <Text>
            Tipo:
            {' '}
            {ultimaChamada.prioridade
              ? 'PRIORIDADE'
              : 'NORMAL'}
          </Text>

        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },

  painel: {
    marginTop: 15,
    backgroundColor: '#BBDEFB',
    padding: 15,
    borderRadius: 10
  },

  senha: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginBottom: 10
  }
});

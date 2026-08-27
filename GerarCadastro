import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

export default function GerarCadastro({ onCadastrar }) {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');

  function definirEspecialidade(idade) {

    idade = Number(idade);

    if (idade >= 0 && idade <= 12) {
      return 'Pediatria';
    }

    if (idade >= 13 && idade <= 18) {
      return 'Endocrinologia Pediátrica';
    }

    if (idade >= 19 && idade <= 40) {
      return sexo.toUpperCase() === 'F'
        ? 'Ginecologia'
        : 'Urologia';
    }

    if (idade >= 41 && idade <= 60) {
      return 'Cardiologia';
    }

    return 'Geriatria';
  }

  function cadastrar() {

    if (!nome || !idade || !sexo) {
      alert('Preencha todos os campos');
      return;
    }

    const paciente = {
      id: Date.now(),
      nome,
      idade: Number(idade),
      sexo,
      especialidade:
        definirEspecialidade(idade),

      prioridade:
        Number(idade) >= 60
    };

    onCadastrar(paciente);

    alert('Paciente cadastrado!');

    setNome('');
    setIdade('');
    setSexo('');
  }

  return (
    <View style={styles.card}>

      <Text style={styles.titulo}>
        Cadastro de Pacientes
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      <TextInput
        style={styles.input}
        placeholder="Sexo (M/F)"
        value={sexo}
        onChangeText={setSexo}
      />

      <Button
        title="Cadastrar"
        onPress={cadastrar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },

  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10
  }
});

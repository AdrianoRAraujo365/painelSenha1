import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

import GerarCadastro from './src/GerarCadastro';
import GerarSenha from './src/GerarSenha';
import GerarChamada from './src/GerarChamada';

export default function App() {
  const [pacientes, setPacientes] = useState([]);
  const [fila, setFila] = useState([]);
  const [ultimaChamada, setUltimaChamada] = useState(null);

  const cadastrarPaciente = (paciente) => {
    setPacientes([...pacientes, paciente]);
  };

  const adicionarFila = (paciente) => {
    const senha = {
      ...paciente,
      numeroSenha: Date.now()
    };

    setFila([...fila, senha]);
  };

  const chamarPaciente = () => {
    if (fila.length === 0) {
      alert('Não existem senhas na fila');
      return;
    }

    const filaPrioritaria = fila.filter(
      item => item.prioridade === true
    );

    const filaNormal = fila.filter(
      item => item.prioridade === false
    );

    let proximo;

    if (filaPrioritaria.length > 0) {
      proximo = filaPrioritaria[0];

      setFila([
        ...filaPrioritaria.slice(1),
        ...filaNormal
      ]);
    } else {
      proximo = filaNormal[0];
      setFila(filaNormal.slice(1));
    }

    setUltimaChamada(proximo);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <Text style={styles.titulo}>
          PAINEL DE SENHAS
        </Text>

        <GerarCadastro
          onCadastrar={cadastrarPaciente}
        />

        <GerarSenha
          pacientes={pacientes}
          onGerarSenha={adicionarFila}
        />

        <GerarChamada
          ultimaChamada={ultimaChamada}
          onChamar={chamarPaciente}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    padding: 15
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#1565C0'
  }
});

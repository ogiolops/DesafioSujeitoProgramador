import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Switch, Button, Alert} from 'react-native';

import Slider from '@react-native-community/slider';

export default function App(){

  function printInfo(){
    Alert.alert('Form enviado com sucesso!')
  }

  const [salario, setSalario] =useState(0);
  const [notificacao, setNotificacao] =useState(false);

  return(
    <View style={styles.container}>

      <View style={styles.logo}>
        <Text style={styles.mainLogo}>OURBANK</Text>
        <Text style={styles.open}>Abra sua conta agora mesmo</Text>
      </View>

      <View styles={styles.form}>
        <TextInput placeholder='Nome completo' id="nome" style={styles.input}></TextInput>
        <TextInput placeholder='E-mail' id='email'  style={styles.input}></TextInput>

        <Text style={styles.renda}>Insira sua renda mensal</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={20000}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#FFFFFF"
          thumbTintColor='#121212'
          value={salario}
          onValueChange={ (valorSelecionado) => setSalario(valorSelecionado)}
        />

        <Text style={styles.salario} >R$ {salario.toFixed(2)}</Text>

        <View style={styles.notif}>
          <Text  style={styles.renda}>Deseja receber notificações</Text>

          <Switch 
          value ={notificacao}
          onValueChange={ (valorSelecionado) => setNotificacao(valorSelecionado)}
          ></Switch>

        </View>


        <Button
          style={styles.btn}
          title='Enviar Solicitiação'
          onPress={printInfo}
        />

      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgb(25,133,161)',
    background: 'linear-gradient(90deg, rgba(25,133,161,1) 50%, rgba(34,87,122,1) 100%, rgba(76,92,104,1) 100%)',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 50
  },
  logo:{
    display:'flex',
    alignItems: 'center',
    marginBottom: 50

  },
  mainLogo:{
    color:'#ffff',
    fontWeight: 'bold',
    fontSize: 45
  },
  open:{
    color: '#ffff',
    fontSize: 18
  },
  form:{
    width: '100%',
  },
  input:{
    backgroundColor: '#ffff',
    width: 340,
    margin: 15,
    borderRadius: 25,
    padding: 10,
    fontSize: 20
  },
  slider:{
    width: 370, 
    height: 40
  },
  renda:{
    textAlign: 'center',
    color: '#ffff',
    fontSize: 18
  },
  salario:{
    textAlign: 'center',
    color: '#ffff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  notif:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  btn:{
    fontSize: 25
  }
})
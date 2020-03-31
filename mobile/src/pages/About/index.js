import React, {useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View,  FlatList, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import api from '../../services/api'

import styles from './style';

import logoImg from '../../assets/logo.png';

export default function About() {


        const [dados, setDados] = useState([]);
        const navigation = useNavigation();
        const route = useRoute();
        const incident = route.params.incident;

                 async function loadIncidents() {

                  
                     const response = await api.get('about', {
                         headers: {
                             "Authorization": `${incident.ong_id}`
                         }
                     }).then(res => {
                                const descricao = res.data['ongs'][0].description;
                                const name = res.data['ongs'][0].name;
                                setDados(res.data['enderecos']);
                       });

                
                 }

                 useEffect(() => {
                     loadIncidents();
                 }, []);


          function navigateBack() {
              navigation.goBack()
          }


  
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>

                    <TouchableOpacity onPress={navigateBack}>
                        <Feather name="arrow-left" size={28} color={"#E02041"}/>
                    </TouchableOpacity>
            </View>

            <View style={styles.incident}>
          
                <Text style={[styles.incidentProperty, {marginTop: 10}]}>Tudo Sobre: </Text>
                <Text style={styles.incidentValue}>{incident.name}</Text>

                <Text style={[styles.incidentProperty, {marginTop: 10}]}>Descrição:</Text>
                <Text style={styles.incidentValue}>{incident.ongDescription}</Text>
           
             <FlatList
                data={dados}
                style={styles.incidentList}
                keyExtractor={dados => String(dados.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold = {0.2}
                renderItem={( { item: dados } ) => (
                    <View style={styles.incidentEnd}>
                    <Text style={styles.incidentProperty}>Endereço(s):</Text>
                    <Text style={styles.incidentValue}>CEP: {dados.cep}</Text>
                    <Text style={styles.incidentValue}>Endereço: {dados.endereco}</Text>
                    <Text style={styles.incidentValue}>Bairro: {dados.bairro} - Nº: {dados.numero}</Text>
                    <Text style={styles.incidentValue}>Cidade: {dados.cidade} - Estado: {dados.uf}</Text>
                    <Text style={styles.incidentValue}>Complemento: {dados.complemento}</Text>
                </View>
                )}
            />
             
            </View>

          

              
      



            {/* <FlatList
                data={dados}
                style={styles.incidentList}
                keyExtractor={dados => String(dados.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold = {0.2}
                renderItem={( { item: dados } ) => (
                    <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>{dados.bairro}</Text>         
                </View>
                )}
            />  */}



         </View>

       
    );
}


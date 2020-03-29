import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import styles from './style';

import logoImg from '../../assets/logo.png';

export default function About() {

        const navigation = useNavigation();
        const route = useRoute();
        const incident = route.params.incident;

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
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style= {styles.incidentValue}>{incident.name}, fica localizada em  {incident.city} / {incident.uf}</Text>

                <Text style={[styles.incidentProperty, {marginTop: 10}]}>Sobre:</Text>
                <Text style={styles.incidentValue}>{incident.ongDescription}</Text>
            </View>
         </View>

       
    );
}


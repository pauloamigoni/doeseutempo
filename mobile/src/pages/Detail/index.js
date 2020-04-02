import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Image, Text, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';


import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
 
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar o caso "${incident.title}", com o valor de ${Intl.NumberFormat('pt-BR', {style : 'currency', currency: 'BRL' }).format(incident.value)}`;

    function navigateBack(){
        navigation.goBack()
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color={"#E02041"}/>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.incident}>
            <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                    <Text style={styles.incidentValue}>{incident.name}</Text>
                    <Text style={[styles.incidentProperty, {marginTop: 10}]}>DESCRIÇÃO DA ONG:</Text>
                    <Text style={styles.incidentValue}>{incident.ongDescription}</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>

                    <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text> 
                    <Text style={styles.incidentValue}>{incident.description}</Text> 
                                     


                    { !incident.value && incident.value <= 0 
                    ?  <Text ></Text>
                    :  <Text style={styles.incidentProperty}>VALOR:</Text>
                    }

                    { !incident.value && incident.value <= 0 
                    ?   <Text ></Text>
                    :   <Text style={styles.incidentValue}>
                         {Intl.NumberFormat('pt-BR', {
                            style : 'currency',
                            currency: 'BRL'
                         }).format(incident.value)}</Text>
                    }
                      




                   
                  
            </ScrollView>

            <View style={styles.contactBox}>

                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato: </Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={[styles.action]} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
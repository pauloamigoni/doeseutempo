import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },
    header :{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    incident :{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 48
    },

      incidentEnd: {
          padding: 1,
          borderRadius: 8,
          backgroundColor: '#FFF',
          marginBottom: 1,
          marginTop: 1
      },


    incidentProperty:{
        fontSize: 17,
        color: '#41414D',
        fontWeight: 'bold',
        marginTop: 14
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 14,
        color: '#737380'
    },
    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },
    heroTitle : {
        fontWeight: 'bold',
        color: '#13131A',
        fontSize: 20,
        lineHeight: 30
    },
    heroDescription : {
        fontSize: 15,
        color: "#737380",
        marginTop: 16
    },
    actions : {
        marginTop: 16, 
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action : {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50, 
        width: '48%',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    actionText: {
        color: '#FFF',
        fontSize: 15, 
        fontWeight: 'bold'
    }
});
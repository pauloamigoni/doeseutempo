import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
     
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 15,
        color: '#737380'
    },
    headerTextBold:{
        fontWeight: 'bold'
    },
    title: {
        fontSize: 38,
        marginBottom: 6,
        marginTop: 8,
        color: '#13131a',
        fontWeight: 'bold',
        textAlign: "center"
    },
    description : {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
        textAlign: "center"
    },
    incidentList: {
        marginTop: 32
    },
    incident :{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,

            shadowColor: "#000",
              shadowOffset: {
                  width: 0,
                  height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,

    },
    incidentProperty:{
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold'
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 14,
        color: '#737380'
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailsButtonText:{
        fontSize: 15,
        color : '#E02041',
        fontWeight: 'bold'
    }
});
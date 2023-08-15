import { StyleSheet } from "react-native"



export const globalStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 30,
        backgroundColor: '#fff',
    },
    title: {
        fontFamily: 'nunito-bold',
        fontSize: 24,
        marginLeft: 20,
    },
    wrapper: {
        marginTop:20,
    },
    paragraph: {
        marginVertical: 8,
        fontSize: 18,
        marginLeft: 20,
        fontFamily: 'nunito-regular',
    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        width: '100%',
        marginBottom: 20,
    }
    
})

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png',),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png')
    }
}
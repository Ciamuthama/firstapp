import { StyleSheet } from "react-native"



export const globalStyles = StyleSheet.create({
    container: {
        flex:1,
        //alignItems: 'center',
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
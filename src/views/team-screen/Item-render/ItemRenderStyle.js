import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: '#FFFFFF',
        position: 'relative',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 15,
        paddingBottom: 5,
        paddingTop: 12,
        borderRadius: 10,
        shadowOpacity: 0.3,
        paddingLeft: 20,
        elevation: 5

    },
    image: {
        marginTop: 5,
        width: 70,
        height: 70,
        borderRadius: 38,
    },
    email: {
        paddingTop: 10,
        position: 'absolute',
        paddingLeft: 100,
    },
    name: {
        position: 'absolute',
        paddingTop: 30,
        paddingLeft: 100
    },
    buttonForward: {
        position: 'absolute',
        marginTop: 45,
        paddingBottom: 35,
        marginLeft: 360,
    },
    menuVertical: {
        position: 'absolute',
        marginTop: 10,
        marginLeft: 360,
    },
    menuItem: {
        position: 'absolute',
        backgroundColor: '#EEEEEE',
        marginLeft: 280,
        marginTop: 35,
        height: 30,
        width: 100,
        alignItems: 'center',
        paddingTop: 5,
        elevation: 2,
        shadowOpacity: 0.2
    },
    menuBtn: {
        alignItems: 'center'
    }
})
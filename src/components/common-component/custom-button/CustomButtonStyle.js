
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginTop: 10,
        width: 200,
        height: 40,
        alignItems: 'center',
        backgroundColor: '#2196F3',
        borderRadius: 15,
    },
    backgroundIcon: {
        width: 35,
        height: 35,
        alignItems: 'center',
        backgroundColor: '#2196F3',
        borderRadius: 15,
    },
    buttonText: {
        paddingTop: 10,
        paddingBottom: 20,
        color: 'white'
    },
    ImageStyle: {
        marginTop: 3,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    IconButtonStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    container1: {
        overflow: 'hidden',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },
    // This pushes the view out of the viewport, but why the negative bottom?
    hiddenContainer: {
        top: window.height,
        bottom: -window.height
    }
})

export default styles
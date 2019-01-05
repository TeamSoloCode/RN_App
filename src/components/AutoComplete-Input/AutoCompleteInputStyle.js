import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    item: {
        color: 'black',
        fontSize: 20,
    },
    container: {
        backgroundColor: '#FAFAFA',
        width: 400,
        height: 30,

    },
    list: {
        elevation: 2,
        shadowOpacity: 0.2
    },
    inputPosition: {
        width:400,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#2196F3',
        height: 40,
        borderRadius: 5 ,
      },
      input: {
        flex:1,
      },
});
export default styles
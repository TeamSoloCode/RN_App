import { StyleSheet} from 'react-native';

const styles = StyleSheet.create(
  {
  inputPosition: {
    width:300,
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
    color:'#FFFFFF'
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },

});

export default styles 
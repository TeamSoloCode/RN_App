import { StyleSheet} from 'react-native';

const styles = StyleSheet.create(
  {
  buttonPosition: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 40
  },
  titlePosition: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 20
  },
  inputPositionUsername: {
    width:300,
    marginTop:150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: .5,
    borderColor: '#2196F3',
    height: 40,
    borderRadius: 5 ,
    margin: 10
  },
  inputPositionPassword: {
    width:300,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: .5,
    borderColor: '#2196F3',
    height: 40,
    borderRadius: 5 ,
    margin: 10,
  },
  logo: {
    marginTop: 130,
    width:150,
    height: 150
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
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
},
});

export default styles 
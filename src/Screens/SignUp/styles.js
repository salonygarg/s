import {StyleSheet} from 'react-native';
import Colors from '../../Utility/Color';
const styles=StyleSheet.create({
  mainContainer:{
      flex:1,
      alignItems:'center',
  },
  logoText:{
    fontSize:30,
    fontWeight:'600',
    color:Colors.grey,
    marginTop:55,
    fontFamily:'BebasNeue-Regular'
  },
  lastTextView:{
    flexDirection:'row',
    marginTop:10,
  },  
  lastText:{
    color:Colors.gray,
    fontSize:15,
    fontFamily:'RobotoCondensed-Regular',
  },
  loginText:{
    color:Colors.gray,
    fontSize:15,
    fontFamily:'RobotoCondensed-Bold'
  }
 
})
export default styles;
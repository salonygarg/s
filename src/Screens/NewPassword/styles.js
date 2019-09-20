import {StyleSheet} from 'react-native';
import Colors from '../../Utility/Color';
import {getHeight} from '../../Utility/Dimensions'
const styles=StyleSheet.create({
  mainContainer:{
      flex:1,
      alignItems:'center',
  },
  logoText:{
    fontSize:30,
    fontWeight:'600',
    color:Colors.grey,
    marginTop:getHeight(150),
    fontFamily:'BebasNeue-Regular'
  },
  lastText:{
    color:Colors.gray,
    fontSize:15,
    fontFamily:'RobotoCondensed-Regular',
    marginTop:10
  },
  loginText:{
    color:Colors.gray,
    fontSize:15,
    fontFamily:'RobotoCondensed-Bold'
  }
 
})
export default styles;
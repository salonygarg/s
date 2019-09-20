import {StyleSheet} from 'react-native';
import Colors from '../../Utility/Color';
import {getWidth,getHeight} from '../../Utility/Dimensions'
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
  lastTextView:{
    flexDirection:'row',
    marginTop:10,
  },
  lastText:{
    color:Colors.gray,
    fontSize:15,
    fontFamily:'RobotoCondensed-Regular',
    
  },
  signUpText:{
    color:Colors.gray,
    fontSize:15,
    fontFamily:'RobotoCondensed-Bold'
  },
  forgotView:{
    width:getWidth(300),
    alignItems:'flex-end',
    marginTop:10
  },
  forgotText:{
    fontFamily:'RobotoCondensed-Bold',
    color:Colors.gray,
    fontSize:15
  }
})
export default styles;
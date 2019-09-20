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
  middleText:{
    textAlign:'center',
    marginTop:getHeight(60),
    fontFamily:'RobotoCondensed-Bold',
    color:Colors.grey,
    fontSize:18
  }
})
export default styles;
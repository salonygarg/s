import {StyleSheet} from 'react-native';
import Colors from '../../Utility/Color';
import {getWidth,getHeight} from '../../Utility/Dimensions'
const styles=StyleSheet.create({
  textInput:{
    marginTop:getHeight(60),
    width: getWidth(300),
    fontFamily:'RobotoCondensed-Regular',
    paddingBottom:0
  },
  textInputStyle:{
    marginTop:getHeight(20),
    width: getWidth(300),
    fontFamily:'RobotoCondensed-Regular',
    paddingBottom:0
  },
  bottomView:{
    borderBottomWidth:0.9,
    marginTop:5,
    borderBottomColor:Colors.lightGrey
  }
})
export default styles;
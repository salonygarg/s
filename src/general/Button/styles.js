import {StyleSheet} from 'react-native';
import Colors from '../../Utility/Color';
import {getWidth,getHeight} from '../../Utility/Dimensions'
const styles=StyleSheet.create({
    sendButton:{
    width: getWidth(281),
    height: getHeight(45),
    backgroundColor: Colors.greyish,
    borderWidth: 1,
    borderRadius: 20,
    borderColor:'transparent',
    shadowColor: Colors.lightGrey,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    elevation: 2,
    marginTop: getHeight(60),
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20
  },
  sendText:{
   color:Colors.white,
   fontFamily:'RobotoCondensed-Bold',
   fontSize:16,
   
  }
})
export default styles;
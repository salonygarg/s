import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import styles from './styles'
const ButtonClass=(props)=>{
  const {buttonText,callback}=props;
  return(
    <View>
       <TouchableOpacity style={styles.sendButton} onPress={callback}>
          <Text style={styles.sendText}>{buttonText}</Text></TouchableOpacity>
    </View>
  )
}
export default ButtonClass
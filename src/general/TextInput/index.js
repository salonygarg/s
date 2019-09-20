import React from 'react';
import {View,TextInput} from 'react-native';
import styles from './styles'
import Colors from '../../Utility/Color';
const TextInputClass=(props)=>{
  const {label}=props;
return(
  <View><View>
  <TextInput placeholder={label} style={label==="First Name" | label==="New Password" ? 
  styles.textInput:styles.textInputStyle} 
  placeholderTextColor={Colors.lightBlack}></TextInput>
  <View style={styles.bottomView}></View>
 </View></View>
  
)
}
export default TextInputClass

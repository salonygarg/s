import React,{Component} from 'react';
import {Text,View,SafeAreaView,TextInput,TouchableOpacity} from 'react-native';
import styles from './styles'
import TextInputClass from '../../general/TextInput'
import ButtonClass from '../../general/Button';
export default class EnterEmail extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styles.mainContainer}>
        <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.logoText}>LOGO</Text>
        <Text style={styles.middleText}>{`Enter the email address associated\nwith your account`}</Text>
        <TextInputClass label="Email"/> 
        <ButtonClass buttonText="SEND" callback={this.sendButton}/>
        </SafeAreaView>
      </View>
    )
  }
  sendButton=()=>{
    const {navigation}=this.props;
    navigation.navigate('NewPassword')
  }
}

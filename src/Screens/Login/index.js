import React,{Component} from 'react';
import {Text,View,SafeAreaView,TouchableOpacity} from 'react-native';
import styles from './styles';
import TextInputClass from '../../general/TextInput';
import ButtonClass from '../../general/Button'
export default class Login extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styles.mainContainer}>
      <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.logoText}>LOGO</Text>
        <TextInputClass label="Email"/>
        <TextInputClass label="Password"/>
        <TouchableOpacity style={styles.forgotView} onPress={this.forgotPassword}>
          <Text style={styles.forgotText}>Forgot Password?</Text></TouchableOpacity>
        <ButtonClass buttonText="LOGIN"/>
        <TouchableOpacity onPress={this.signUp} style={styles.lastTextView}>
        <Text style={styles.lastText}>Don't have account? <Text style={styles.signUpText}>Sign Up</Text></Text>
        </TouchableOpacity>
        
      </SafeAreaView>
    </View>
    )
  }
  forgotPassword=()=>{
    const {navigation}=this.props;
    navigation.navigate('EnterEmail')
  }
  signUp=()=>{
    const {navigation}=this.props;
    navigation.navigate('SignUp')
  }
}
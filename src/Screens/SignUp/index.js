import React,{Component} from 'react';
import {Text,View,SafeAreaView,TouchableOpacity,ScrollView} from 'react-native';
import styles from './styles';
import TextInputClass from '../../general/TextInput';
import ButtonClass from '../../general/Button';
export default class SignUp extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={styles.mainContainer}>
        <SafeAreaView style={styles.mainContainer}>
          <ScrollView contentContainerStyle={styles.mainContainer}>
          <Text style={styles.logoText}>LOGO</Text>
          <TextInputClass label="First Name"/>
          <TextInputClass label="Last Name"/>
          <TextInputClass label="Email"/>
          <TextInputClass label="Password"/>
          <TextInputClass label="Confirm Password"/>
          <ButtonClass buttonText="SIGN UP"/>
          <TouchableOpacity onPress={this.navigateToLogin} style={styles.lastTextView}>
              <Text style={styles.lastText}>Already have account? </Text>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          </ScrollView>
       
        </SafeAreaView>
      </View>
    )
  }
  navigateToLogin=()=>{
    const {navigation}=this.props;
    navigation.navigate('Login')
  }
}
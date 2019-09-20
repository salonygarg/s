import React,{Component} from 'react';
import {Text,View,SafeAreaView} from 'react-native';
import styles from './styles';
import TextInputClass from '../../general/TextInput';
import ButtonClass from '../../general/Button'
export default class NewPassword extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styles.mainContainer}>
        <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.logoText}>LOGO</Text>
          <TextInputClass label="New Password"/>
          <TextInputClass label="Confirm Password"/>
          <ButtonClass buttonText="CONFIRM" callback={this.confirmButton}/>
        </SafeAreaView>
      </View>
    )
  }
  confirmButton=()=>{
    const {navigation}=this.props;
    navigation.navigate('Login')
  }
}
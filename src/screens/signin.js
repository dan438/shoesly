import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';

const Signin = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, padding: 20}}>
      {/* icon */}
      <View
        style={{borderWidth: 0.5, width: '14%', padding: 10, borderRadius: 12}}>
        <Icon
          style={{textAlign: 'center'}}
          name="left"
          size={16}
          color="#111827"
        />
      </View>
      <View style={{marginVertical: 30}}>
        <Text style={{fontSize: 24, fontWeight: '700'}}>Hi There! 👋</Text>
        <Text style={{fontSize: 12, lineHeight: 22}}>
          Welcome back, Sign in to your account.
        </Text>
      </View>
      <View>
      <View style={{marginBottom: 30}}>
          <Text style={{fontSize: 14, fontWeight: '700'}}>Email</Text>
          <TextInput style={styles.input} placeholder="example@gmail.com" />
        </View>
        <View style={{marginBottom: 30}}>
          <Text style={{fontSize: 14, fontWeight: '700'}}>Password</Text>
          <View style={{position: 'relative'}}>
            <TextInput style={styles.input} placeholder="Enter your Password" />
            <Icon
              style={{
                textAlign: 'center',
                position: 'absolute',
                right: 10,
                bottom: 10,
              }}
              name="eyeo"
              size={22}
              color="#111827"
            />
          </View>
        </View>
        <Text style={{fontSize: 12, lineHeight: 22}}>
          Forgot Password?
        </Text>
      </View>
      {/* footer */}
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#101010',
              paddingVertical: 12,
              borderRadius: 100,

              width: '80%',
            }}>
            <Text style={{color: '#Fff', textAlign: 'center'}}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/Images/fingerPrint.png')} />
          </TouchableOpacity>
        </View>
        {/* bottom text */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 20,
          }}>
          <Text>Don’t have an account? </Text>
          <Text style={{fontWeight: '700', fontSize: 14}}>Create Account</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 0.5,
  },
  text__center: {
    textAlign: 'center',
  },
});

export default Signin;

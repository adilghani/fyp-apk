import React from 'react';
import {
  View,
  Text,
  ToucableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  inputtitlecolor,
  maintitle,
  primary,
} from '../../Utils/ColorScheme/Colors';
import {Medium, Regular} from '../../Utils/FontFamily/Fonfamily';
const Input = ({
  titleInput,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <View style={{marginBottom: 15}}>
      <Text
        style={{
          fontSize: 19,
          marginBottom: 7,
          fontFamily: Medium,
          color: maintitle,
        }}>
        {titleInput}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={inputtitlecolor}
        keyboardType={keyboardType}
        style={{
          width: Dimensions.get('screen').width / 1.1,
          height: 60,
          borderWidth: 0.6,
          borderColor: primary,
          borderRadius: 5,
          padding: 10,
          fontFamily: Regular,
          color: maintitle,
          fontSize: 16,
        }}
      />
    </View>
  );
};
export default Input;
const styles = StyleSheet.create({});

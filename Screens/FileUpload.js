import React, {Component} from 'react';
import {
  View,
  Platform,
  Text,
  StatusBar,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
  Navigator,
  TouchableOpacity,
} from 'react-native';

const image = require('../assets/bk_img.jpg');

const FileUpload = () => {
  return (
    <ImageBackground source={image} style={styles.bg_image}>
      <View>
        <Image source={require('../assets/icon.png')} style={styles.logo} />

        <Text style={styles.titleText}>
          PERSONALITY PREDICTION USING VIDEO PROCESSING
        </Text>

        <Text style={styles.subTitleText}>
          Do you Want to Know someone's Personality type ?
        </Text>
         <Text style={styles.subTitleText}>
          Let's find out togather
        </Text>
        

        <View style={styles.uploadBtn}>
          <Button
            title="Upload Video"
            color="#03a797"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  uploadBtn:{
    //flex:1,
    marginLeft:120,
    marginRight:120,
     paddingTop:20,
    
  },
  logo: {
    height: 300,
    width: 300,
    alignSelf: 'center',
  },
  titleText: {
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    padding:20,
  },
  subTitleText: {
    alignSelf: 'center',
    textAlign: 'justify',
    color: 'white',
    fontSize: 17,
    fontWeight: 'normal',
    padding:12,
    paddingTop:0,
  },
  bg_image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  btn: {
    flex: 1,
    color: '#ff0000',
    alignItems: 'flex-end',
  },
});

export default FileUpload;

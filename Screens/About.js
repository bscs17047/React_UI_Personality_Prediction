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

const About = () => {
  return (
    <ImageBackground source={image} style={styles.bg_image}>
      <View>
        <Text style={styles.titleText}>About</Text>

        <Text style={styles.subTitleText}>
          Personality computing and affective computing, where the recognition
          of personality traits is essential, have gained increasing interest
          and attention in many research areas recently. We propose a novel
          approach to recognize the Big Five personality traits of people from
          videos. 
        </Text>
        
        <Text style={styles.subTitleText}>We will develop a multimodal system to recognize apparent
          personality based on various modalities such as the face, environment,
          audio, and transcription features. We use modality-specific neural
          networks that learn to recognize the traits independently and we
          obtain a final prediction of apparent personality with a feature-level
          fusion of these networks.</Text>
          
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  titleText: {
    alignSelf: 'center',
    //textAlign: 'center',
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    padding: 20,
  },
  subTitleText: {
    alignSelf: 'center',
    textAlign: 'justify',
    color: 'white',
    fontSize: 18,
    fontWeight: 'normal',
    padding :17,
  },
  bg_image: {
    flex: 1,
    resizeMode: 'cover',
    //justifyContent: 'center',
    opacity: 0.8,
  },
  img:{
      height:200,
      width:200,
  }
});

export default About;

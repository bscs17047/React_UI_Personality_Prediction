import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ImageBackground,

} from 'react-native';

import FilePickerManager from 'react-native-file-picker';
import RNFetchBlob from 'rn-fetch-blob';
const image = require('../assets/bk_img.jpg');
//var serverURL ="127.0.0.1:80/send"
//************************************************************************************************************************************* */

handleUploadPhoto = (data) => {
  RNFetchBlob.fetch('POST', '127.0.0.1:80/send', {
            'Content-Type': 'multipart/form-data',
        }, [
            //--------1 line------//
            { name: 'video', filename: data.fileName, type: data.type, data: RNFetchBlob.wrap(data.path) },
            //--------2 line------//
           // {name: 'info', data: JSON.stringify({})},
        ]).then((resp) => {
          console.log("Video is Up")
            console.log(resp)
        }).catch((err) => {
            console.log(err)
        })
    };

const filePicker = () =>{
  FilePickerManager.showFilePicker(null, (response) => {
    fileURI = response.path
    console.log('Response = ', response)
    console.log("only path ->",fileURI)
    console.log("File Name ->",response.fileName)
    filePath=response.path
    fileName=response.fileName
  
    
  console.log('SASTI DEBUGGING 0');
//************************************************************************************************************************************* */
handleUploadPhoto(response);
//*********
/*
var video = {
    uri: response.uri,
    type: response.type,
    name: response.fileName,
};

var body = new FormData();
body.append('authToken', 'secret');
body.append('video', video);
body.append('title', 'Test TITLE');

var serverURL ="127.0.0.1:80/send"

var xhr = new XMLHttpRequest();
xhr.open('POST', serverURL);
xhr.send(body);
*/
//************************************************************************************************************************************* */
  console.log('SASTI DEBUGGING 1');

  if (response.didCancel) {
    console.log('User cancelled file picker');
  }
  else if (response.error) {
    console.log('FilePickerManager Error: ', response.error);
  }
  else {
    this.setState = ()=>({
      file: response,
    });
  }
});
}

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
          Let's find out together
        </Text>
        

        <View style={styles.uploadBtn}>
          
          <Button
            title="Upload Video"
            color="#03a797"
            onPress={() => filePicker()}
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

import React, {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import GlobalStyles from '../Utility/GlobalStyles';
import {RNCamera} from 'react-native-camera';
import CustomHeader from '../ReusableComponents/CustomHeader';
import CustomButton from '../ReusableComponents/CustomButton';
import { observer } from 'mobx-react-lite';
import RecipeStore from '../Store/RecipeStore';


const  Camera = observer( ({navigation}) =>{
  const [takingPic, setTakingPic] = useState(true);
  const [btnColor, setBtnColor] = useState(GlobalStyles.colorCodes.lightyellow);

  const takePicture = async () => {
    let data ='';
    if (takingPic) {
      let options = {
        quality: 0.1,
        base64: true,
      };
      setTakingPic(false);
      setBtnColor(GlobalStyles.colorCodes.darkYellow);
      try {
         data = await camera.takePictureAsync(options);
        stringData = await JSON.stringify(data);
      //  Alert.alert('Photo Captured')
    
      RecipeStore.recipedata.set(data.uri)
      RecipeStore.enableImg.set(true)
        
      } catch (err) {
        Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        return;
      } finally {
        setTakingPic(true);
        setBtnColor(GlobalStyles.colorCodes.lightyellow);
        navigation.navigate('PostScreen')
       
      }
    }

  }


  return (
    <View style={styles.container}>
      <CustomHeader navigation={navigation} />

      <RNCamera
        ref={ref => {
          camera = ref;
        }}
        captureAudio={false}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <View style={[styles.btnView, {backgroundColor: btnColor}]}>
        <CustomButton onPress={() => takePicture()}>
          <Text style={styles.btnText}></Text>
        </CustomButton>
      </View>
    </View>
  );
}
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colorCodes.white,
  },

  btnText: {
    height: 56,
    width: 56,
    borderRadius: 56,
    borderWidth: 3,
    borderColor: 'black',
  },
  btnView: {
    marginVertical: 47,
    borderRadius: 47,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default Camera;

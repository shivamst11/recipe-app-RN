/**
 * Post Component
 * @author Shivam Tripathi
 * @description Post Screen of the application.
 * @flow
 */

import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from '../ReusableComponents/CustomHeader';
import GlobalStyles from '../Utility/GlobalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../ReusableComponents/CustomButton';
import Slider from '@react-native-community/slider';
import {color} from 'react-native-reanimated';

function Post({navigation}) {
  const [slider, setSlider] = useState(30);



  

  return (
    <View style={styles.container}>
      <CustomHeader navigation={navigation} />
      <View style={{marginHorizontal: 24}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}>
          <View style={styles.imgBox}>
            <Ionicons
              onPress={() =>  navigation.navigate('Camera')
               }
              name="md-image"
              size={53.3}
              color={GlobalStyles.colorCodes.grey}
              style={styles.icon}
            />
            <Text
              onPress={() => navigation.navigate('Camera')}
              style={styles.boxHeading}>
              Add Cover Photo
            </Text>
            <Text
              onPress={() => navigation.navigate('Camera')}
              style={styles.boxText}>{`(Up to 12 Mb)`}</Text>
          </View>
          <Text style={styles.title}>Recipe Name</Text>
          <TextInput
            placeholder={'Enter recipe name'}
            style={styles.recipeInput}
          />
          <Text style={styles.title}>Discription</Text>
          <TextInput
            placeholder={'Tell the community a little about your recipe'}
            style={styles.discriptionInput}
          />

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}>Cooking Duration</Text>
            <Text style={styles.time}>{` (in minutes)`}</Text>
          </View>
          <View>
            <View style={styles.flexRow}>
              <Text
                style={[
                  styles.sliderTime,
                  slider <= 9
                    ? {color: GlobalStyles.colorCodes.grey}
                    : {color: GlobalStyles.colorCodes.lightyellow},
                ]}>{`<10`}</Text>
              <Text
                style={[
                  styles.sliderTime,
                  slider <= 29
                    ? {color: GlobalStyles.colorCodes.grey}
                    : {color: GlobalStyles.colorCodes.lightyellow},
                ]}>{`30`}</Text>
              <Text
                style={[
                  styles.sliderTime,
                  slider <= 59
                    ? {color: GlobalStyles.colorCodes.grey}
                    : {color: GlobalStyles.colorCodes.lightyellow},
                ]}>{`>60`}</Text>
            </View>
            <Slider
              style={styles.slider}
              onValueChange={value => setSlider(value)}
              minimumValue={0}
              maximumValue={60}
              minimumTrackTintColor={GlobalStyles.colorCodes.lightyellow}
              maximumTrackTintColor={GlobalStyles.colorCodes.veryLightGrey}
              thumbTintColor={GlobalStyles.colorCodes.lightyellow}
              step={10}
              value={slider}
            />
          </View>

          <CustomButton
            onPress={() => Alert.alert('df')}
            style={styles.nextBtn}>
            <Text style={styles.btnText}> Next</Text>
          </CustomButton>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btnText: {
    alignSelf: 'center',
    marginTop: 18,
    fontSize: 15,
    fontWeight: 'bold',
  },

  imgBox: {
    borderColor: '#D0DBEA',
    marginTop: 32,
    height: 161,
    borderWidth: 2,
    borderStyle: 'dashed',
    alignItems: 'center',

    borderRadius: 16,
  },
  icon: {
    marginTop: 22,
  },
  boxHeading: {
    letterSpacing: 0.5,
    fontSize: 15,
    fontWeight: 'bold',
    color: GlobalStyles.colorCodes.darkGrey,
    marginTop: 15,
  },
  boxText: {
    letterSpacing: 0.5,
    fontSize: 12,
    color: GlobalStyles.colorCodes.lightGrey,
    marginTop: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: GlobalStyles.colorCodes.darkGrey,
    marginTop: 24,
  },
  recipeInput: {
    borderWidth: 1,
    height: 56,
    borderRadius: 32,
    borderColor: '#D0DBEA',
    marginTop: 10,
    paddingLeft: 24,
    fontSize: 15,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'normal',
    letterSpacing: 0.5,
  },
  nextBtn: {
    height: 56,
    borderRadius: 32,
    backgroundColor: GlobalStyles.colorCodes.lightyellow,
    marginTop: 60,
    marginBottom: 80,
  },

  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 24,
  },

  discriptionInput: {
    borderWidth: 1,
    height: 80,
    borderRadius: 8,
    borderColor: '#D0DBEA',
    marginTop: 10,
    paddingLeft: 24,
    paddingBottom: 49,
    fontSize: 15,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'normal',
    letterSpacing: 0.5,
  },
  time: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: GlobalStyles.colorCodes.grey,
    marginTop: 24,
  },
  slider: {marginTop: 17},
  sliderTime: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Post;

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
  TextInput,
  Alert,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import GlobalStyles from '../Utility/GlobalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../ReusableComponents/CustomButton';
import Slider from '@react-native-community/slider';
import RecipeStore from '../Store/RecipeStore';
import {observer} from 'mobx-react-lite';
import CustomImage from '../ReusableComponents/CustomImage';


const Post1 = observer(({navigation, props}) => {
  
  //cooking duration time  from slider
  const [slider, setSlider] = useState(30);

  // state for recipeDetails
  const [recipeD, setRecipeD] = useState({
    recipeName: '',
    category: 'Food',
    recipeDiscrption: '',
    username: 'Ben',
    userImg: 'https://iili.io/Abw35g.png',
  });


  const numofRecipe = RecipeStore.recipeDetails.length;
  recipeD['id'] = numofRecipe + 1;
  recipeD['recipeImg'] = RecipeStore.recipedata.get();
  recipeD['cookingDuration'] = slider;

  // on click next saving all the data in mobx store
  const onClickNext = async () => {
    Alert.alert("Foodies' Spot", 'Confirm to post recipe', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          postRecipe();
        },
      },
    ]);
  };

  // function for posting recipe on feeds
  const postRecipe = () => {
    setRecipeD({
      recipeName: '',
      category: 'Food',
      recipeDiscrption: '',
      username: 'Ben',
      userImg: 'https://iili.io/Abw35g.png',
    });
    RecipeStore.recipedata.set(0);
    RecipeStore.enableImg.set(false);
    navigation.goBack();
    RecipeStore.recipeDetails.push(recipeD);
    navigation.navigate('Home');
  };

  // handling cancel/ backbutton button
  const backbtn = () => {
    setRecipeD({
      recipeName: '',
      category: 'Food',
      recipeDiscrption: '',
      username: 'Ben',
      userImg: 'https://iili.io/Abw35g.png',
    });
    RecipeStore.recipedata.set(0);
    RecipeStore.enableImg.set(false);
    navigation.goBack();
  };

  //function for rendering header
  const RenderHeader = () => {
    return (
      <View style={styles.headerView}>
        <SafeAreaView />
        <CustomButton onPress={() => backbtn()} style={GlobalStyles.backBtn}>
          <Text style={GlobalStyles.buttonTitle}>Cancel</Text>
        </CustomButton>
      </View>
    );
  };

  // function for showing image preview
  const imageContainer = () => {
    return !RecipeStore.enableImg.get() ? (
      <View style={styles.imgBox}>
        <Ionicons
          onPress={() => navigation.navigate('Camera')}
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
    ) : (
      <View style={styles.imgBox}>
        <CustomImage
          style={styles.cptImage}
          source={{uri: RecipeStore.recipedata.get()}}
        />
        <Text
          onPress={() => navigation.navigate('Camera')}
          style={styles.reTake}>
          retake
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <RenderHeader />
      <View style={{marginHorizontal: 24}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}>
          {imageContainer()}

          <Text style={styles.title}>Recipe Name</Text>
          <TextInput
            value={recipeD.recipeName}
            onChangeText={text => setRecipeD({...recipeD, recipeName: text})}
            placeholder={'Enter recipe name'}
            style={styles.recipeInput}
          />

          <Text style={styles.title}>Discription</Text>
          <TextInput
            value={recipeD.recipeDiscrption}
            onChangeText={text =>
              setRecipeD({...recipeD, recipeDiscrption: text})
            }
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
            disabled={recipeD.enableButton}
            onPress={() => onClickNext()}
            style={styles.nextBtn}>
            <Text style={styles.btnText}> Next</Text>
          </CustomButton>
        </ScrollView>
      </View>
    </View>
  );
});


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
  cptImage: {width: 379, height: 157, borderRadius: 16},
  reTake: {
    position: 'absolute',
    right: 10,
    color: GlobalStyles.colorCodes.black,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 10,
    padding: 4,
    top: 5,
    backgroundColor: GlobalStyles.colorCodes.veryLightGrey,
  },
});

export default Post1;

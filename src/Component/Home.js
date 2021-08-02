/**
 * Home Component
 * @author Shivam Tripathi
 * @description Home Screen of the application.
 * @flow
 */

import  React,{useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import CustomImage from '../ReusableComponents/CustomImage';
import {storyData} from '../data/story';
import GlobalStyles from '../Utility/GlobalStyles';
import CustomButton from '../ReusableComponents/CustomButton';
import {category} from '../data/category';

function Home() {

  const [selectedItemIndex, setselectedItemIndex]=useState(0);

  const RenderStory = () => {
    return (
      <View>
        <FlatList
          data={storyData}
          initialNumToRender={5}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => listStory(item)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  const listStory = item => {
    return (
      <CustomButton style={styles.storyBtn}>
        <CustomImage style={styles.storyIcon} source={{uri: item.image}} />
      </CustomButton>
    );
  };

  const renderCategory = () => {
    return (
      <View>
        <FlatList
          data={category}
          initialNumToRender={4}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => listCategory(item,index)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  const listCategory =(item, index) => {
    return (
      <CustomButton
      onPress={()=>onTabpress(index)}
        style={[styles.categorybtn, index === selectedItemIndex ? styles.selectedTab : styles.deselectedTab,]}>
        <Text style={ index === selectedItemIndex ? styles.selectedTabText : styles.deselectedTabText}>{item.name}</Text>
      </CustomButton>
    );
  };

  const onTabpress=(index)=>{
if (index !== selectedItemIndex){
  setselectedItemIndex(index);
}
  }
  return (
    <View style={styles.container}>
      

      <SafeAreaView />
     

      {<RenderStory />}
      <View style={styles.categoryView}>
        <Text style={styles.categoryTitle}>Category</Text>
        {renderCategory()}
      </View>
      <View style={styles.spacing}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colorCodes.white,
  },
  storyIcon: {
    height: 56,
    width: 56,
    resizeMode: 'contain',
  },
  storyBtn: {
    marginTop: 17,
    borderWidth:2,
    borderColor:GlobalStyles.colorCodes.lightyellow,
    marginHorizontal: 8.5,
    height: 59,
    width: 59,
    borderRadius: 59,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryView:
   {marginTop: 24},

  categoryTitle: {
    letterSpacing: 1,
    fontSize: 20,
    marginLeft:7.5,
    fontWeight: 'bold',
    color: GlobalStyles.colorCodes.darkGrey,
  },
  categorybtn:{
    marginTop: 16,
    paddingVertical: 11,
    paddingHorizontal: 24,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 48,
  },
  spacing:{paddingVertical:4, backgroundColor:GlobalStyles.colorCodes.veryLightGrey,marginTop:23},
  selectedTab: {
    backgroundColor: GlobalStyles.colorCodes.lightyellow,
  },
  deselectedTab: {
    backgroundColor: GlobalStyles.colorCodes.veryLightGrey,
  },
  selectedTabText:{
    fontSize:16,fontWeight:'bold',
    color: GlobalStyles.colorCodes.black,
  },
  deselectedTabText:{
    fontSize:16,fontWeight:'bold',
    color: GlobalStyles.colorCodes.grey,
  }
});

export default Home;

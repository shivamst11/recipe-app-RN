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
  ScrollView,
  Dimensions
} from 'react-native';
import CustomImage from '../ReusableComponents/CustomImage';
import {storyData} from '../data/story';
import GlobalStyles from '../Utility/GlobalStyles';
import CustomButton from '../ReusableComponents/CustomButton';
import {category} from '../data/category';
import { RecipeDetails } from '../data/recipeDetails';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BlurView, VibrancyView } from "@react-native-community/blur";

let {width} = Dimensions.get('window');

const OPTION_WIDTH = (width - 120) / 4;

function Home() {

 
  const [selectedItemIndex, setselectedItemIndex]=useState(0);

  const renderStory = () => {
    return (
      <View>
        <FlatList
          data={storyData}
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

const renderRecipeCard=()=>{
  return (
   
    <ScrollView>

      
      <FlatList
            bounces={false}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={RecipeDetails}
            renderItem={({item}) => listRecipeCard(item)}
            keyExtractor={(item) => item.id}
      />

    </ScrollView>
    
  )
}

const listRecipeCard=(item)=>{
  return (
<View style={{flex:1,alignItems:'center'}} >
  <SafeAreaView>
      <View style={{flexDirection:'row',}}>
  <CustomImage source={{uri:item.userImg}} style={{
    height: OPTION_WIDTH-20,
    width: OPTION_WIDTH-20,
    borderRadius:OPTION_WIDTH/4,
    marginVertical:18,
  }}/>
  <Text style={{alignSelf:'center',marginLeft:8, fontSize:15, fontFamily:'sans-serif-medium',fontWeight:'normal',  letterSpacing: 0.5,color:'#2E3E5C',}}>{item.username}</Text>
  </View>

  <CustomImage source={{uri:item.recipeImg}} style={{ 
    height: width/2.5,
    width:width/2.5,
    borderRadius:16,
   }}/>
   <View style={{height:25,width:25,position:'absolute', top:110, right:10,  justifyContent:'center',alignItems:'center',
}}>
    <Ionicons name='heart-outline' color={'white'} size={20}  />
   </View>
   <View/>
  <Text style={styles.recipeName} >{item.recipeName}</Text>
  <Text style={{letterSpacing: 0.5,color:GlobalStyles.colorCodes.grey, fontFamily:'sans-serif-medium'}}>{item.category} . {item.cookingDuration} mins</Text>
  </SafeAreaView>

</View>
  ) 
}

  const onTabpress=(index)=>{
if (index !== selectedItemIndex){
  setselectedItemIndex(index);
}
  }
  return (
    <View style={styles.container}>
      <SafeAreaView />
      {renderStory()}
      <View style={styles.categoryView}>
        <Text style={styles.categoryTitle}>Category</Text>
        {renderCategory()}
      </View>
      <View style={styles.spacing}/>
     

     {renderRecipeCard()} 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colorCodes.white,
  },
  storyIcon: {
    height: OPTION_WIDTH,
    width:  OPTION_WIDTH,
    borderRadius:OPTION_WIDTH,
    resizeMode: 'contain',
    
  },
  storyBtn: {
    marginTop: 17,
    borderWidth:2,
    borderColor:GlobalStyles.colorCodes.lightyellow,
    marginHorizontal: 7.5,
    height: OPTION_WIDTH+3,
    width:  OPTION_WIDTH+3,
    borderRadius:  OPTION_WIDTH+3,
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
  recipeName:{
    letterSpacing: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: GlobalStyles.colorCodes.darkGrey,

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

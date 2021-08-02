/**
 * Post Component
 * @author Shivam Tripathi
 * @description Post Screen of the application.
 * @flow
 */

import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import CustomHeader from '../ReusableComponents/CustomHeader';

function Post({navigation}) {
  return (
    <View style={styles.container}>
      <CustomHeader navigation={navigation}/>
      <Text>Post</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },
  
})

export default Post;
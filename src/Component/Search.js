import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';


function Search() {
  return (
    <View style={styles.container}>
       <Slider
    style={{width: 200, height: 40}}
    minimumValue={0}
    maximumValue={1}
    minimumTrackTintColor="#FFFFFF"
    maximumTrackTintColor="#000000"
    step={1}
  />
   
      <Text>Search</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    justifyContent: 'center',
     alignItems: 'center'
  },
})

export default Search;
import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { observer} from "mobx-react-lite"
import { makeObservable, observable, computed, action,autorun ,configure} from "mobx"
import RecipeStore from '../Store/RecipeStore';

/*
function Profile() {

  function fun(){
    console.log("shivam");
    console.log(RecipeStore.count.get());
  }


  
  return (
    <View style={styles.container}>
      <Button title={'press'} onPress={()=>fun()}/>
      <Text>{RecipeStore.count.get()}</Text>

      <Button title='change' onPress={()=>{ RecipeStore.count.set()}}/>
      <Text>Profile</Text>
    </View>
  );
}
*/

const Mobx2=observer(()=>{

 


  return (
    <View style={styles.container}>
   
    <Text>Profile</Text>
  </View>
  );
})
export default Mobx2;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});



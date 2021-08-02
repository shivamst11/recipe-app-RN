/**
 * Custom Buttons Wrapper
 * @author Shivam Tripathi
 * @description Custom Buttons Wrapper over Touchable Opacity;
 * @flow
 */

 import React, {Component} from 'react';
 import {TouchableOpacity} from 'react-native';
 
 function CustomButton({...props}) {
   
     return (
       <TouchableOpacity accessible activeOpacity={0.8} {...props}>
         {props.children}
       </TouchableOpacity>
     );
   }
 
 export default CustomButton;
 
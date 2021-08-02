/**
 * Custom Image Component
 * @author Shivam Tripathi
 * @description Custom Image Component of the Application
 * @flow
 */

 import React, {Component} from 'react';
 import {Image} from 'react-native'
 
 function CustomImage({...props}) {
   
     return (
       <Image
         {...props} 
         style={props.style}>
         {props.children}
       </Image>
     );
   }
 
 
 export default CustomImage;
 
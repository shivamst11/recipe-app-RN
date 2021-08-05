import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import GlobalStyles from '../Utility/GlobalStyles';
import CustomButton from './CustomButton';
import CustomImage from './CustomImage';

function CustomHeader(props) {
  return (
    <View>
      <SafeAreaView />
      <View style={styles.headerView}>
        <CustomButton
          onPress={() => props.navigation.goBack()}
          style={GlobalStyles.backBtn}>
          <Text style={GlobalStyles.buttonTitle}>Cancel</Text>
        </CustomButton>
        <Text style={GlobalStyles.headerTitle}>{props.title}</Text>
        {props.rightComponent ? (
          props.rightComponent
        ) : (
          <View style={GlobalStyles.backBtn} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default CustomHeader;

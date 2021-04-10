import React from 'react';
import { View, StyleSheet } from 'react-native';
import { McText } from '../components';

const Mine = ({ params }) => {
  return (
    <View style={styles.container}>
      <McText h1>Heading level 1</McText>
      <McText h2>Heading level  2</McText>
      <McText h3>Heading level  3</McText>
      <McText h4>Heading level  4</McText>
      <McText h5>Heading level  5</McText>
      <McText h6>Heading level  6</McText>
      <McText body1>Body level 1</McText>
      <McText body2>Body level  2</McText>
      <McText body3>Body level  3</McText>
      <McText body4>Body level  4</McText>
      <McText body5>Body level  5</McText>
      <McText body6>Body level  6</McText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Mine;

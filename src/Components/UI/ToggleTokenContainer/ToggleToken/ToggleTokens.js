import React, {useState} from 'react';
import {TouchableWithoutFeedback, Text, View} from 'react-native';
import styles from './style';

const ToggleTokens = props => {
  const [mark, setMark] = useState(false);
  let styleBox = styles.container;
  let styleText = styles.text;
  if (mark === true) {
    styleBox = styles.containerOutline;
    styleText = styles.textOutline;
  }

  props.setValue(mark);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setMark(!mark);
      }}>
      <View style={styleBox}>
        <Text style={styleText}>{props.children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ToggleTokens;

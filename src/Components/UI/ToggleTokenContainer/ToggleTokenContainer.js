import React, {useState} from 'react';
import {View} from 'react-native';
import ToggleTokens from './ToggleToken/ToggleTokens';
import style from './style';

const ToggleTokensContainer = props => {
  const [og, setOg] = useState(false);
  const [oo, setOo] = useState(false);
  const [cg, setCg] = useState(false);
  const [co, setCo] = useState(false);

  props.getValue({og: og, oo: oo, cg: cg, co: co});

  return (
    <View style={style.container}>
      <ToggleTokens setValue={setOg}>GOV I</ToggleTokens>
      <ToggleTokens setValue={setOo}>OP I</ToggleTokens>
      <ToggleTokens setValue={setCg}>GOV II</ToggleTokens>
      <ToggleTokens setValue={setCo}>OP II</ToggleTokens>
    </View>
  );
};

export default ToggleTokensContainer;

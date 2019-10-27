import React, {useState} from 'react';
import {Text, View} from 'react-native';
import style from './style';
import NumericInput from 'react-native-numeric-input';

const Home = () => {
  const [team, setTeam] = useState(0);
  const [freshPeople, setFreshPeople] = useState(0);
  const [people, setPeople] = useState(8);


  return (
    <View style={style.container}>
      <Text style={style.text}>How many teams or ironmens will debate?</Text>
      <NumericInput
        value={team}
        minValue={0}
        maxValue={4}
        style={style.input}
        rightButtonBackgroundColor={'#F0F0F0'}
        leftButtonBackgroundColor={'#F0F0F0'}
        rounded={true}
        onChange={value => setTeam(value)}
      />
      <Text style={style.text}>How many people need a team to draw?</Text>
      <NumericInput
        value={people}
        minValue={0}
        maxValue={8}
        style={style.input}
        rightButtonBackgroundColor={'#F0F0F0'}
        leftButtonBackgroundColor={'#F0F0F0'}
        rounded={true}
        onChange={value => setPeople(value)}
        step={2}
      />
      <Text style={style.text}>Which tables are occupied in the debate?</Text>
      <Text style={style.text}>
        If you want more experienced people debate with fresh people in team.
        You can define fresh people group. How many people is in this group?
      </Text>
      <NumericInput
        value={freshPeople}
        minValue={0}
        maxValue={4}
        style={style.input}
        rightButtonBackgroundColor={'#F0F0F0'}
        leftButtonBackgroundColor={'#F0F0F0'}
        rounded={true}
        onChange={value => setFreshPeople(value)}
      />
    </View>
  );
};
export default Home;

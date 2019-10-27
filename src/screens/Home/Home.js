import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import style from './style';
import NumericInput from 'react-native-numeric-input';
import ToggleTokensContainer from '../../Components/UI/ToggleTokenContainer/ToggleTokenContainer';

const Home = () => {
  const [team, setTeam] = useState(0);
  const [freshPeople, setFreshPeople] = useState(0);
  const [people, setPeople] = useState(8);
  let withoutTable = {};

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
      <ToggleTokensContainer getValue={value => (withoutTable = value)} />
      <Text style={style.text}>
        If you need 2 pools to draw, you must define how many people are in one
        of them
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
      <Text style={style.textDescription}>
        Next you must assigns numbers to people and teams. First numbers is
        teams/ironmens. Next number is people from first pull. The end assign
        numbers to people from second pull. For example we have 1 team 3 people
        in first pull and 3 people in second pull. You assign number 1 to team,
        number 2,3,4 to people from first pull and 5,6,7 to people from second
        pull
      </Text>
      <View style={style.blank} />
      <View style={style.buttonContainer}>
        <Button
          style={style.button}
          title={'RANDOM'}
          color={'#61d2dc'}
          onPress={() => console.log(withoutTable)}
        />
      </View>
    </View>
  );
};
export default Home;

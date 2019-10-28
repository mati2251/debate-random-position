import React from 'react';
import {Text, View} from 'react-native';
import style from './style';

const DrawResult = props => {
  const {navigation} = props;
  const config = navigation.getParam('drawConfig', 'NULL');
  let result = {og: [], oo: [], co: [], cg: []};
  const random = () => {
    for (let i = 0; i < config.team; i++) {
      const draw = Math.round(Math.random() * 3) + 1;
      if (draw === 1) {
        if (config.withoutTable.og === false) {
          result.og.push(i);
          config.withoutTable.og = true;
        } else {
          i--;
        }
      } else if (draw === 2) {
        if (config.withoutTable.oo === false) {
          result.oo.push(i);
          config.withoutTable.oo = true;
        } else {
          i--;
        }
      } else if (draw === 3) {
        if (config.withoutTable.cg === false) {
          result.cg.push(i);
          config.withoutTable.cg = true;
        } else {
          i--;
        }
      } else if (draw === 4) {
        if (config.withoutTable.co === false) {
          result.co.push(i);
          config.withoutTable.co = true;
        } else {
          i--;
        }
      }
    }
    const fershPeopleCheck = {og: false, oo: false, cg: false, co: false};
    for (let i = 0; i < config.freshPeople; i++) {
      const draw = Math.round(Math.random() * 3) + 1;
      if (draw === 1) {
        if (config.withoutTable.og === false && fershPeopleCheck.og === false) {
          result.og.push(i + config.team);
          fershPeopleCheck.og = true;
        } else {
          i--;
        }
      } else if (draw === 2) {
        if (config.withoutTable.oo === false && fershPeopleCheck.oo === false) {
          result.oo.push(i + config.team);
          fershPeopleCheck.oo = true;
        } else {
          i--;
        }
      } else if (draw === 3) {
        if (config.withoutTable.cg === false && fershPeopleCheck.cg === false) {
          result.cg.push(i + config.team);
          fershPeopleCheck.cg = true;
        } else {
          i--;
        }
      } else if (draw === 4) {
        if (config.withoutTable.co === false && fershPeopleCheck.co === false) {
          result.co.push(i + config.team);
          fershPeopleCheck.co = true;
        } else {
          i--;
        }
      }
    }
    for (let i = 0; i < config.people - config.freshPeople; i++) {
      const draw = Math.round(Math.random() * 3) + 1;
      console.log(draw);
      if (draw === 1) {
        if (config.withoutTable.og === false) {
          result.og.push(i + config.team + config.freshPeople);
          if (result.og.length === 2) {
            config.withoutTable.og = true;
          }
        } else {
          i--;
        }
      } else if (draw === 2) {
        if (config.withoutTable.oo === false) {
          result.oo.push(i + config.team + config.freshPeople);
          if (result.oo.length === 2) {
            config.withoutTable.oo = true;
          }
        } else {
          i--;
        }
      } else if (draw === 3) {
        if (config.withoutTable.cg === false) {
          result.cg.push(i + config.team + config.freshPeople);
          if (result.cg.length === 2) {
            config.withoutTable.cg = true;
          }
        } else {
          i--;
        }
      } else if (draw === 4) {
        if (config.withoutTable.co === false) {
          result.co.push(i + config.team + config.freshPeople);
          if (result.cg.length === 2) {
            config.withoutTable.co = true;
          }
        } else {
          i--;
        }
      }
    }
  };
  random();
  console.log(result);
  return (
    <View>
      <View style={style.row}>
        <View>
          <Text>{result.og}</Text>
        </View>
        <View>
          <Text>{result.oo}</Text>
        </View>
      </View>
      <View>
        <Text>{result.cg}</Text>
      </View>
      <View>
        <Text>{result.co}</Text>
      </View>
    </View>
  );
};

export default DrawResult;

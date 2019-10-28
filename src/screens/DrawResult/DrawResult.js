import React from 'react';
import {Text, View} from 'react-native';
import style from './style';

const DrawResult = props => {
	const {navigation} = props;
	const config = navigation.getParam('drawConfig', 'NULL');
	let result = {og: [], oo: [], co: [], cg: []};
	const random = () => {
		const teams = {first: [], second: [], third: [], four: []};
		let teamsNumbers = ['first', 'second', 'third', 'four'];
		if (config.withoutTable.og === true) {
			teamsNumbers.splice(teamsNumbers.length - 1);
		}
		if (config.withoutTable.oo === true) {
			teamsNumbers.splice(teamsNumbers.length - 1);
		}
		if (config.withoutTable.cg === true) {
			teamsNumbers.splice(teamsNumbers.length - 1);
		}
		if (config.withoutTable.co === true) {
			teamsNumbers.splice(teamsNumbers.length - 1);
		}
		for (let i = 0; i < config.team; i++) {
			teams[teamsNumbers[i]].push(i+1);
			teamsNumbers = teamsNumbers.filter((item, index) => {
				if (index !== i) {
					return item;
				}
			});
		}
		const copy = [...teamsNumbers];
		for (let i = 0; i < config.freshPeople; i++) {
			const tmp = Math.floor(Math.random() * teamsNumbers.length);
			teams[teamsNumbers[tmp]].push(i + config.team+1);
			teamsNumbers = teamsNumbers.filter((item, index) => {
				if (index !== tmp) {
					return item;
				}
			});
		}
		teamsNumbers = [...copy];
		for (let i = 0; i < config.people - config.freshPeople; i++) {
			const tmp = Math.floor(Math.random() * teamsNumbers.length);
			teams[teamsNumbers[tmp]].push(i + config.team + config.freshPeople+1);
			if (teams[teamsNumbers[tmp]].length === 2) {
				teamsNumbers = teamsNumbers.filter((item, index) => {
					if (index !== tmp) {
						return item;
					}
				});
			}
		}
		let allTeams = ['first', 'second', 'third', 'four'];
		let allPosition = ['og', 'oo', 'cg', 'co'];
		for(let i=0; i<4; i++){
			if(config.withoutTable[allPosition[i]]===true){
				allPosition = allPosition.filter((item, index) => {
					if (index !== i) {
						return item;
					}
				});
			}
		}
		for (let i = 0; i < allTeams.length; i++) {
			const tmp = Math.floor(Math.random() * allPosition.length);
			teams[allTeams[i]].forEach((item) => {
				result[allPosition[tmp]].push(item);
			});
			allPosition = allPosition.filter((item, index) => {
				if (index !== tmp) {
					return item;
				}
			});
		}
	};
	random();
	return (
		<View style={style.container}>
			<View style={style.row}>
				<View style={style.table}>
					<Text style={style.textTitle}>GOV I</Text>
					<Text style={style.text}>{result.og}</Text>
				</View>
				<View style={style.table}>
					<Text style={style.textTitle}>OP I</Text>
					<Text style={style.text}>{result.oo}</Text>
				</View>
			</View>
			<View style={style.row}>
				<View style={style.table}>
					<Text style={style.textTitle}>GOV II</Text>
					<Text style={style.text}>{result.cg}</Text>
				</View>
				<View style={style.table}>
					<Text style={style.textTitle}>OP II</Text>
					<Text style={style.text}>{result.co}</Text>
				</View>
			</View>
		</View>
	);
};

export default DrawResult;

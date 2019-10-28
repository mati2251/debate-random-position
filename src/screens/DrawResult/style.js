import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  row: {
    flexDirection: 'row',
	  height: '50%',
	  paddingBottom: 20
  },
	container: {
  	backgroundColor: '#e4e4e4'
	},
	table: {
  	width: '50%',
		borderColor: '#636363',
		borderWidth: 10,
		height: '80%',
		flex: 1,
		margin: 20,
		borderRadius: 5,
		alignItems: "center"
	},
	textTitle: {
  	color: '#A3A3A3',
		fontSize: 30
	},
	text: {
  	fontSize: 45,
		marginTop: 20,
		color: '#838383',
	}
});

export default style;

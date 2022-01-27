import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

const NumberContainer = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.number}>{props.children}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		height: 35,
		width: 35,
		alignItems: "center",
		borderRadius: 4,
		marginVertical: 10,
	},
	number: {
		color: Colors.typographyDark,
		fontSize: 22,
	},
});

export default NumberContainer;

import React from "react";
import { StyleSheet, Text } from "react-native";

const TitleText = (props) => {
	return (
		<Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
	);
};
const styles = StyleSheet.create({
	text: {
		fontFamily: "open-sans-bold",
		fontSize: 20,
		height: 27,
	},
});
export default TitleText;

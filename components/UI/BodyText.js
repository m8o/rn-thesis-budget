import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const BodyText = (props) => {
	return (
		<Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
	);
};
const styles = StyleSheet.create({
	text: {
		fontFamily: "open-sans",
		fontSize: 16,
		height: 20,
		color: Colors.typographyDark,
	},
});
export default BodyText;

import React from "react";
import { StyleSheet, Text } from "react-native";
import Metrics from "../Constants/Metrics";

const TitleText = (props) => {
	return (
		<Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
	);
};
const styles = StyleSheet.create({
	text: {
		fontFamily: "open-sans-bold",
		fontSize: Metrics.fontSmall,
	},
});
export default TitleText;

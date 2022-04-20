import React from "react";
import { StyleSheet, TextInput } from "react-native";
import Metrics from "../Constants/Metrics";

const InputField = (props) => {
	return (
		<TextInput
			placeholder={props.placeholder}
			style={{ ...styles.input, ...props.style }}
		/>
	);
};
const styles = StyleSheet.create({
	input: {
		height: 50,
		width: "90%",
		borderWidth: 1,
		borderRadius: Metrics.borderRadiusSmall,
		paddingHorizontal: 20,
		fontFamily: "open-sans",
		fontSize: Metrics.fontMedium,
		marginVertical: 5,
	},
});
export default InputField;

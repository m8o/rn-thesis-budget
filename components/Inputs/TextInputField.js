import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Colors from "../../Constants/Colors";
import Metrics from "../../Constants/Metrics";

const TextInputField = (props) => {
	const valueChangeHandler = (text) => {
		props.setValue(text);
	};
	return (
		<View style={styles.container}>
			<TextInput
				keyboardType="default"
				placeholder={props.placeholder}
				style={{ ...styles.input, ...props.style }}
				multiline={false}
				value={props.value}
				onChangeText={valueChangeHandler}
				textAlign="left"
				textAlignVertical="center"
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		width: "100%",
		alignItems: "flex-start",
		marginTop: 16,
		paddingVertical: 6,
		paddingHorizontal: 24,
	},
	input: {
		height: 50,
		width: "100%",
		borderRadius: Metrics.borderRadiusSmall,
		backgroundColor: Colors.backgroundDarkHighlightFloat,
		paddingHorizontal: 20,
		fontFamily: "open-sans",
		fontSize: Metrics.fontMedium,
	},
});
export default TextInputField;

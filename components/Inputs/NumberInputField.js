import React from "react";
import { Keyboard, StyleSheet, TextInput, View } from "react-native";
import Metrics from "../../Constants/Metrics";
import Colors from "../../Constants/Colors";

const NumberInputField = (props) => {
	const valueChangeHandler = (text) => {
		props.setValue(text);
	};
	return (
		<View style={{ ...styles.container, ...props.style }}>
			<TextInput
				placeholder="0,00"
				autoFocus={props.autoFocus}
				keyboardType="numeric"
				style={styles.input}
				value={props.value}
				onChangeText={valueChangeHandler}
				onBlur={() => {
					Keyboard.dismiss();
				}}
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
		marginHorizontal: 24,
	},
	input: {
		height: 70,
		width: "60%",
		minWidth: 230,
		backgroundColor: Colors.backgroundDarkHighlightFloat,
		paddingHorizontal: 20,
		fontFamily: "open-sans-bold",
		fontSize: Metrics.fontLarge,
		borderRadius: Metrics.borderRadiusMedium,
	},
});
export default NumberInputField;

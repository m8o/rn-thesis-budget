import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/colors";

const CustomButton = (props) => {
	return (
		<TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
			<View style={{ ...styles.button, ...props.style }}>
				<Text style={{ ...styles.buttonText, ...props.titleStyle }}>
					{props.title}
				</Text>
			</View>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	button: {
		elevation: 7,
		backgroundColor: Colors.buttonPositive,
		paddingVertical: 12,
		paddingHorizontal: 30,
		borderRadius: 40,
	},
	buttonText: {
		color: "white",
		fontFamily: "open-sans",
		fontSize: 18,
	},
});
export default CustomButton;

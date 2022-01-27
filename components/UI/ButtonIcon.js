import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/colors";

const ButtonIcon = (props) => {
	return (
		<TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
			<View style={{ ...styles.button, ...props.style }}>{props.icon}</View>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.buttonDefault,
		paddingVertical: 12,
		paddingHorizontal: 13,
		borderRadius: 40,
		overflow: "hidden",
	},
});
export default ButtonIcon;

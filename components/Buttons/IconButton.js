import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from "../../Constants/Colors";
import Metrics from "../../Constants/Metrics";

const IconButton = (props) => {
	return (
		<View style={{ ...styles.container, ...props.style }}>
			<TouchableOpacity onPress={props.onPress}>
				<View style={{ ...styles.iconContainer, ...props.buttonStyle }}>
					<Ionicons name={props.name} size={30} color={Colors.backgroundDark} />
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
	},
	iconContainer: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff", //TODO promijeni na nešto iz Colors
		borderRadius: Metrics.borderRadiusMedium,
		height: 55,
		width: 55,
	},
});
export default IconButton;

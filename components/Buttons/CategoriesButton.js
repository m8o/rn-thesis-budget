import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from "../../Constants/Colors";
import Metrics from "../../Constants/Metrics";
import TitleText from "../TitleText";
import { accessibilityProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const CategoriesButton = (props) => {
	const activeBackground = {
		backgroundColor: props.active
			? props.color
			: Colors.backgroundLightHighlight,
		opacity: props.active ? 0.7 : 1,
	};
	return (
		<View style={{ ...styles.container, ...props.style }}>
			<TouchableOpacity onPress={props.onPress}>
				<View
					style={{
						...styles.iconContainer,
						...activeBackground,
					}}
				>
					<Ionicons
						name={props.iconName}
						size={30}
						color={props.active ? Colors.typographyDark : props.color}
					/>
					<TitleText>{props.title}</TitleText>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 2.5,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
	},
	iconContainer: {
		height: "100%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: Metrics.borderRadiusMedium,
		height: 115,
		width: 115,
	},
});
export default CategoriesButton;

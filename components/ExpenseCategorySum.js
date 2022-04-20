import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import IconButton from "../components/Buttons/IconButton";
import Colors from "../Constants/Colors";
import Metrics from "../Constants/Metrics";
import DefaultText from "./DefaultText";
import TitleText from "./TitleText";
const ExpenseCategorySum = (props) => {
	return (
		<View style={styles.container}>
			<IconButton
				name={props.categoryIcon}
				buttonStyle={{
					backgroundColor: Colors.backgroundDarkHighlightSoft,
				}}
			/>
			<View style={styles.categoryBarContainer}>
				<TouchableOpacity style={{ width: "100%" }}>
					<View style={styles.categoryBar}>
						<TitleText style={{ fontSize: Metrics.fontSmall }}>
							{props.categoryName}{" "}
						</TitleText>
						<DefaultText> {props.amount}</DefaultText>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		height: 71,
		width: "100%",
		paddingHorizontal: 24,
		paddingVertical: 8,
	},
	categoryBarContainer: {
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
		marginLeft: 6,
	},
	categoryBar: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		backgroundColor: Colors.backgroundDarkHighlightSoft,
		borderRadius: Metrics.borderRadiusMedium,
		height: "100%",
		width: "100%",
		paddingHorizontal: 14,
	},
});
export default ExpenseCategorySum;

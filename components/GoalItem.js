import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const GoalItem = (props) => {
	return (
		<TouchableOpacity activeOpacity={0.7} onPress={props.onDelete}>
			<View style={styles.listItem}>
				<Text>{props.value}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		backgroundColor: "#ccc",
		borderColor: "black",
		borderWidth: 1,
		marginTop: 4,
	},
});

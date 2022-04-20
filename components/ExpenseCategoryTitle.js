import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../Constants/Colors";

const ExpenseCategoryTitle = (props) => {
	return (
		<View style={styles.gridItem}>
			<TouchableOpacity
				style={styles.gridItemTouchable}
				onPress={props.onSelect}
			>
				<View style={{ ...styles.container, backgroundColor: props.color }}>
					<Text style={styles.title} numberOfLines={2}>
						{props.title}
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};
const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
	},
	gridItemTouchable: {
		flex: 1,
	},
	container: {
		flex: 1,
		borderRadius: 10,
		elevation: 3,
		padding: 15,
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 20,
		textAlign: "right",
	},
});
export default ExpenseCategoryTitle;

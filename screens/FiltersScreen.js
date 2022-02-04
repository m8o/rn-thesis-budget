import React from "react";
import { StyleSheet, Text, View } from "react-native";

/**
 * Screen for displaying category filters
 * @returns
 */

const FiltersScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>The Category Filters Screen</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
export default FiltersScreen;

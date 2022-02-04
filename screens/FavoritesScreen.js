import React from "react";
import { StyleSheet, Text, View } from "react-native";

/**
 * Screen for displaying favorite meals
 * @returns
 */

const FavoritesScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>The Category Favorite Meals</Text>
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
export default FavoritesScreen;

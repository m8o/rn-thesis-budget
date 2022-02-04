import { StackActions } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

/**
 * Screen for displaying meal details
 * @returns
 */

const MealDetailsScreen = (props) => {
	const { mealId } = props.route.params;
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	useEffect(() => {
		props.navigation.setOptions({ title: selectedMeal.title });
	}, []);

	return (
		<View style={styles.screen}>
			<Text>{selectedMeal.steps}</Text>
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
export default MealDetailsScreen;

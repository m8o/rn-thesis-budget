import { CommonActions } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";
/**
 * Screen for displaying category meals
 * @returns
 */

const CategoryMealsScreen = (props) => {
	const renderMealItem = (itemData) => {
		return (
			<MealItem
				title={itemData.item.title}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				image={itemData.item.imageUrl}
				onSelectMeal={() => {
					props.navigation.dispatch(
						CommonActions.navigate({
							name: "MealDetails",
							params: {
								mealId: itemData.item.id,
							},
						})
					);
				}}
			/>
		);
	};
	const { categoryId } = props.route.params;
	const selectedCategory = CATEGORIES.find(
		(category) => category.id === categoryId
	);
	useEffect(() => {
		props.navigation.setOptions({ title: selectedCategory.title });
	}, []);
	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(categoryId) >= 0
	);

	return (
		<View style={styles.screen}>
			<FlatList
				style={styles.list}
				data={displayedMeals}
				renderItem={renderMealItem}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		justifyContent: "space-evenly",
		margin: 10,
	},
	list: {
		width: "100%",
		height: "100%",
	},
});
export default CategoryMealsScreen;

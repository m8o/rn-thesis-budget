import { CommonActions } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";

/**
 * Screen for displaying meal categories
 * @returns
 */

const CategoriesScreen = (props) => {
	const renderGridItem = (itemData) => {
		return (
			<CategoryGridTitle
				onSelect={() => {
					props.navigation.dispatch(
						CommonActions.navigate({
							name: "CategoryMeals",
							params: {
								categoryId: itemData.item.id,
							},
						})
					);
				}}
				title={itemData.item.title}
				color={itemData.item.color}
			/>
		);
	};
	return (
		<FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
export default CategoriesScreen;

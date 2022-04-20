import { CommonActions } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import IconButton from "../components/Buttons/IconButton";
import DefaultText from "../components/DefaultText";
import ExpenseCategorySum from "../components/ExpenseCategorySum";
import Colors from "../Constants/Colors";

const ExpensesScreen = (props) => {
	let expensesSumByCategory = {};
	const { expenses, categories } = useSelector((state) => state);
	if (expenses.length > 0) {
		expenses.forEach((element) => {
			if (expensesSumByCategory[element.categoryId]) {
				expensesSumByCategory[element.categoryId] += parseFloat(element.amount);
			} else {
				expensesSumByCategory[element.categoryId] = parseFloat(element.amount);
			}
		});
	}
	useEffect(() => {
		props.navigation.setOptions({
			headerRight: () => (
				<IconButton
					name="cog-outline"
					style={{ marginHorizontal: 16 }}
					onPress={() => {
						props.navigation.dispatch(
							CommonActions.navigate({
								name: "Settings",
							})
						);
					}}
				/>
			),
		});
	}, []);

	let renderingElement;
	if (expenses.length <= 0) {
		renderingElement = (
			<DefaultText style={styles.noExpensesText}>
				No expenses this month
			</DefaultText>
		);
	} else {
		renderingElement = [];
		for (const expense in expensesSumByCategory) {
			console.log("aaaa", expensesSumByCategory);
			renderingElement.push(
				<ExpenseCategorySum
					amount={expensesSumByCategory[expense]}
					categoryIcon={categories[expense].icon}
					categoryName={categories[expense].name}
				/>
			);
		}
	}
	return (
		<View style={styles.container}>
			{React.Children.toArray(renderingElement)}
			<IconButton
				name="add"
				style={styles.addButton}
				onPress={() => {
					props.navigation.dispatch(
						CommonActions.navigate({
							name: "AddNewExpense",
						})
					);
				}}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	addButton: {
		position: "absolute",
		bottom: 15,
		right: 16,
	},
	noExpensesText: {
		fontSize: 20,
	},
});

export default ExpensesScreen;

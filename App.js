import React, { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
	const { screen } = styles;
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const onDelete = (goalId) => {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id !== goalId);
		});
	};
	return (
		<View style={screen}>
			<Button
				title="Add new goal"
				onPress={() => {
					setIsAddMode(true);
				}}
			/>
			<GoalInput
				onAddModeClose={() => {
					setIsAddMode(false);
				}}
				onAddGoal={setCourseGoals}
				visible={isAddMode}
			/>
			<View>
				<FlatList
					keyExtractor={(item) => item.id}
					data={courseGoals}
					renderItem={(itemData) => (
						<GoalItem
							onDelete={onDelete.bind(this, itemData.item.id)}
							value={itemData.item.value}
						/>
					)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: { padding: 12 },
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	input: {
		borderColor: "black",
		borderWidth: 1,
		padding: 10,
		flexGrow: 1,
		marginRight: 4,
	},
	listItem: {
		padding: 10,
		backgroundColor: "#ccc",
		borderColor: "black",
		borderWidth: 1,
		marginTop: 4,
	},
});

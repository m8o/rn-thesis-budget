import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {
	const [enteredGoal, setEnteredGoal] = useState("");
	const goalInputHandler = (text) => {
		setEnteredGoal(text);
	};

	const addGoalHandler = () => {
		if (enteredGoal !== "") {
			props.onAddGoal((currentState) => [
				...currentState,
				{ id: Math.random().toString(), value: enteredGoal },
			]);
			setEnteredGoal("");
			props.onAddModeClose();
		}
	};
	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course goal"
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title="close"
							onPress={props.onAddModeClose}
							color={"red"}
						/>
					</View>
					<View style={styles.button}>
						<Button title="add" onPress={addGoalHandler} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default GoalInput;
const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		marginBottom: 4,
		borderColor: "black",
		borderWidth: 1,
		padding: 10,
		marginRight: 4,
		width: "80%",
		minWidth: 200,
		maxWidth: 360,
	},
	buttonContainer: {
		width: "50%",
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	button: {
		width: "40%",
	},
});

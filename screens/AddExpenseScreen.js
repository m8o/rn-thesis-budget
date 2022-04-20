import React, { useEffect, useState } from "react";
import {
	Alert,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import IconButton from "../components/Buttons/IconButton";
import CategoriesSelect from "../components/CategoriesSelect";
import NumberInputField from "../components/Inputs/NumberInputField";
import TextInputField from "../components/Inputs/TextInputField";
import DateInputField from "../components/Inputs/DateInputField";
import { CommonActions } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addNewExpense } from "../store/actions/expenses";

const AddExpenseScreen = (props) => {
	const [amount, setAmount] = useState();
	const [categoryId, setCategoryId] = useState();
	const [note, setNote] = useState();
	const [date, setDate] = useState(new Date());

	const dispatch = useDispatch();

	useEffect(() => {
		props.navigation.setOptions({
			headerLeft: () => (
				<IconButton
					name="return-down-back"
					style={{ marginHorizontal: 16 }}
					onPress={() => {
						if (
							amount !== undefined ||
							categoryId !== undefined ||
							note !== undefined
						) {
							Alert.alert(
								"Discard changes?",
								"Are you sure you want to discard your changes?",
								[
									{
										text: "Cancel",
										onPress: () => {},
										style: "cancel",
									},
									{
										text: "OK",
										onPress: () => props.navigation.goBack(),
									},
								],
								{ cancelable: true }
							);
						} else {
							props.navigation.goBack();
						}
					}}
				/>
			),
		});
	}, [amount, categoryId, note]);
	const addExpenseHandler = () => {
		dispatch(addNewExpense({ date, amount, categoryId, note, photo: null }));
		props.navigation.goBack();
	};
	return (
		<View style={styles.container}>
			<ScrollView keyboardShouldPersistTaps="never">
				<NumberInputField
					value={amount}
					setValue={setAmount}
					style={{ marginTop: 10 }}
					autofocus={true}
				/>
				<CategoriesSelect value={categoryId} setValue={setCategoryId} />
				<TextInputField
					value={note}
					setValue={setNote}
					placeholder="Add a note..."
				/>
				<DateInputField date={date} setDate={setDate} />
			</ScrollView>
			{amount !== undefined && (
				<IconButton
					name={"checkmark"}
					style={styles.addButton}
					onPress={addExpenseHandler}
				/>
			)}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	addButton: {
		position: "absolute",
		bottom: 16,
		right: 16,
	},
});

export default AddExpenseScreen;

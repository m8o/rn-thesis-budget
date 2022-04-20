import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Metrics from "../../Constants/Metrics";
import DateTimePicker from "@react-native-community/datetimepicker";
import Colors from "../../Constants/Colors";

const DateInputField = (props) => {
	const [showDatePicker, setShowDatePicker] = useState(false);
	// const [date, setDate] = useState(new Date());
	const dateChangeHandler = (event, selectedDate) => {
		const currentDate = selectedDate || props.date;
		props.setDate(currentDate);
		if (event.type === "dismissed" || event.type === "set") {
			setShowDatePicker(false);
			return;
		}
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.input}
				onPress={() => {
					setShowDatePicker(true);
				}}
			>
				<Text style={styles.text} color={Colors.typographyDark}>
					{props.date.toLocaleDateString()}
				</Text>
			</TouchableOpacity>
			{showDatePicker && (
				<DateTimePicker
					textColor={Colors.backgroundApprove}
					testID="datePicker"
					value={props.date}
					mode="date"
					display="calendar"
					onChange={dateChangeHandler}
				/>
			)}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		width: "100%",
		alignItems: "flex-start",
		paddingVertical: 6,
		paddingHorizontal: 24,
	},
	input: {
		height: 50,
		width: "100%",
		justifyContent: "center",
		borderRadius: Metrics.borderRadiusSmall,
		paddingHorizontal: 20,
		backgroundColor: Colors.backgroundDarkHighlightFloat,
	},
	text: {
		fontFamily: "open-sans",
		fontSize: Metrics.fontMedium,
	},
});
export default DateInputField;

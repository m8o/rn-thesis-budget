import React from "react";
import {
	ImageBackground,
	StyleSheet,
	Text,
	TouchableNativeFeedback,
	View,
} from "react-native";
import Colors from "../Constants/Colors";

const MealItem = (props) => {
	return (
		<View style={styles.mealItem}>
			<TouchableNativeFeedback onPress={props.onSelectMeal}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground
							source={{ uri: props.image }}
							style={styles.bgImage}
						>
							<Text style={styles.title} numberOfLines={1}>
								{props.title}
							</Text>
						</ImageBackground>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
						<Text style={styles.details}>{props.duration}m</Text>
						<Text style={styles.details}>{props.complexity.toUpperCase()}</Text>
						<Text style={styles.details}>
							{props.affordability.toUpperCase()}
						</Text>
					</View>
				</View>
			</TouchableNativeFeedback>
		</View>
	);
};
const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		width: "100%",
		backgroundColor: Colors.backgroundDark,
		opacity: 0.9,
		borderRadius: 10,
		overflow: "hidden",
		marginBottom: 5,
	},
	bgImage: {
		width: "100%",
		height: "100%",
		justifyContent: "flex-end",
	},
	mealRow: {
		flexDirection: "row",
	},
	title: {
		color: Colors.typographyDark,
		fontFamily: "open-sans-bold",
		fontSize: 22,
		backgroundColor: "rgba(0, 0, 0, 0.7)",
		paddingVertical: 5,
		paddingHorizontal: 12,
	},
	mealHeader: {
		height: "85%",
	},
	mealDetail: {
		paddingHorizontal: 10,
		justifyContent: "space-evenly",
		alignItems: "center",
		height: "15%",
	},
	details: {
		color: Colors.typographyDark,
	},
});
export default MealItem;

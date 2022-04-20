import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from "../Constants/Colors";
import CategoriesButton from "./Buttons/CategoriesButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import TitleText from "./TitleText";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesSelect = (props) => {
	return (
		<View>
			<View style={styles.header}>
				<TitleText style={styles.title}>Categories</TitleText>
				<TouchableOpacity>
					<Ionicons name="ellipsis-vertical" size={20} />
				</TouchableOpacity>
			</View>
			<ScrollView
				horizontal={true}
				style={styles.scrollView}
				contentContainerStyle={styles.categoriesContainer}
			>
				{CATEGORIES.map((category, index) => {
					return (
						<CategoriesButton
							key={category.id}
							active={category.id === props.value}
							iconName={category.icon}
							color={category.color}
							title={category.name}
							onPress={() => props.setValue(category.id)}
						/>
					);
				})}
			</ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	header: {
		marginHorizontal: 24,
		marginVertical: 12,
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
	},
	title: {
		color: Colors.typographyDark,
		opacity: 0.4,
	},
	categoriesContainer: {
		marginLeft: 21.5,
		width: 530,
		height: 240,
		flexDirection: "column",
		flexWrap: "wrap",
		alignItems: "center",
	},
	scrollView: {
		height: 240,
		width: "100%",
	},
});
export default CategoriesSelect;

import React from "react";

import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import TitleText from "./UI/TitleText";

const Header = (props) => {
	return (
		<View style={styles.header}>
			<TitleText style={styles.headerTitle}>{props.title}</TitleText>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 100,
		backgroundColor: Colors.backgroundPrimary,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: "#ccc",
		elevation: 6,
	},
	headerTitle: {
		color: Colors.typographyDark,
		marginTop: 10,
	},
});
export default Header;

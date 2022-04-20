import { CommonActions } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/Buttons/IconButton";

const HistoryScreen = (props) => {
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
	return (
		<View style={styles.container}>
			<Text>HistoryScreen</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default HistoryScreen;

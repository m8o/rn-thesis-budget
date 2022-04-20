import { CommonActions } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/Buttons/IconButton";

const OverviewScreen = (props) => {
	useEffect(() => {
		props.navigation.setOptions({
			headerRight: () => (
				<IconButton
					style={{ marginHorizontal: 16 }}
					name="cog-outline"
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
			<Text>OverviewScreen</Text>
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

export default OverviewScreen;

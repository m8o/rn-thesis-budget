import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/Buttons/IconButton";

const SettingsScreen = (props) => {
	useEffect(() => {
		props.navigation.setOptions({
			headerLeft: () => (
				<IconButton
					name="return-down-back"
					style={{ marginHorizontal: 16 }}
					onPress={() => {
						props.navigation.goBack();
					}}
				/>
			),
		});
	}, []);

	return (
		<View style={styles.container}>
			<Text>SettingsScreen</Text>
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
export default SettingsScreen;

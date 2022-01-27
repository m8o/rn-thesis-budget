import React from "react";
import {
	Button,
	Image,
	ImageBackground,
	StyleSheet,
	Text,
	View,
} from "react-native";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/UI/BodyText";
import CustomButton from "../components/UI/CustomButton";
import TitleText from "../components/UI/TitleText";

const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<ImageBackground
				style={styles.image}
				source={require("../assets/success.png")}
			>
				<TitleText>GAME IS OVER</TitleText>
				<BodyText>Number of rounds:</BodyText>
				<NumberContainer>{props.roundsNumber}</NumberContainer>
				<BodyText>Number was:</BodyText>
				<NumberContainer>{props.userNumber}</NumberContainer>
				<CustomButton
					title="NEW GAME"
					color={"green"}
					onPress={props.onRestart}
				/>
			</ImageBackground>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		paddingTop: 150,
		height: "100%",
		width: "100%",
		alignItems: "center",
	},
});
export default GameOverScreen;

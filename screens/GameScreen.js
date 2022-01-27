import React, { useEffect, useRef, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import TitleText from "../components/UI/TitleText";
import { Ionicons } from "@expo/vector-icons";
import ButtonIcon from "../components/UI/ButtonIcon";
import BodyText from "../components/UI/BodyText";
import Colors from "../constants/colors";

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rndNum = Math.floor(Math.random() * (max - min)) + min;
	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
};

const renderListItem = (value, numberOfTheRound) => (
	<View key={value} style={styles.listItem}>
		<BodyText>#{numberOfTheRound}</BodyText>
		<BodyText>{value}</BodyText>
	</View>
);

const GameScreen = (props) => {
	const { userChoice, onGameOver } = props;
	const [initialGuess, setInitialGuess] = useState(
		generateRandomBetween(1, 100, userChoice)
	);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [pastGuesses, setPastGuesses] = useState([initialGuess]);
	const currentLow = useRef(1);
	const currentHigh = useRef(100);
	const nextGuessHandler = (direction) => {
		if (
			(direction === "lower" && currentGuess < props.userChoice) ||
			(direction === "greater" && currentGuess > props.userChoice)
		) {
			Alert.alert("Don't lie", "You know that is wrong", [
				{ text: "Sorry!", style: "cancel" },
			]);
			return;
		}

		if (direction === "lower") {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess + 1;
		}

		const nextGuess = generateRandomBetween(
			currentLow.current,
			currentHigh.current,
			currentGuess
		);
		setPastGuesses((currentState) => {
			return [nextGuess, ...currentState];
		});
		setCurrentGuess(nextGuess);
	};

	useEffect(() => {
		if (currentGuess === userChoice) {
			onGameOver(pastGuesses.length);
		}
	}, [currentGuess, userChoice, onGameOver]);

	return (
		<View style={styles.screen}>
			<TitleText style={styles.title}>Opponent's Guess</TitleText>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<ButtonIcon
					icon={<Ionicons name="arrow-down" size={24} color={"white"} />}
					onPress={nextGuessHandler.bind(this, "lower")}
				/>
				<ButtonIcon
					icon={<Ionicons name="arrow-up" size={24} color={"white"} />}
					onPress={nextGuessHandler.bind(this, "greater")}
				/>
			</Card>
			<ScrollView
				contentContainerStyle={styles.listContainer}
				style={{
					width: "100%",
				}}
			>
				{pastGuesses.map((guess, index) =>
					renderListItem(guess, pastGuesses.length - index)
				)}
			</ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingVertical: 10,
		alignItems: "center",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: 20,
		height: 100,
		width: 300,
	},
	title: {
		marginVertical: 10,
	},
	resultsContainer: {
		borderWidth: 1,
	},
	listContainer: {
		width: "100%",
		alignItems: "center",
		marginTop: 10,
		flexGrow: 1,
		justifyContent: "flex-end",
	},
	listItem: {
		backgroundColor: Colors.backgroundPrimary,
		padding: 15,
		marginVertical: 10,
		height: 40,
		flexDirection: "row",
		width: "60%",
		maxWidth: 300,
		alignItems: "center",
		justifyContent: "space-between",
	},
});
export default GameScreen;

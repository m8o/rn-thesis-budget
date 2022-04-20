import { SafeAreaView, StyleSheet } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import NavigationComponent from "./navigation/NavigationComponent";
import { combineReducers, createStore } from "redux";
import expenseReducer from "./store/reducers/expenses";
import { Provider } from "react-redux";
import categoryReducer from "./store/reducers/categories";

const rootReducer = combineReducers({
	expenses: expenseReducer,
	categories: categoryReducer,
});
const store = createStore(rootReducer);

export default function App() {
	let [fontsLoaded] = Font.useFonts({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<Provider store={store}>
			<SafeAreaView style={styles.container}>
				<NavigationComponent />
			</SafeAreaView>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

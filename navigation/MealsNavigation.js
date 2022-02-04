import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";
import Colors from "../Constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
const Stack = createStackNavigator();

const MealsNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Categories"
				screenOptions={{
					headerMode: "screen",
					headerTintColor: Colors.typographyDark,
					headerStyle: { backgroundColor: Colors.backgroundDark },
				}}
			>
				<Stack.Screen
					name="Categories"
					component={CategoriesScreen}
					options={{
						title: "Categories",
					}}
				/>
				<Stack.Screen
					name="CategoryMeals"
					component={CategoryMealsScreen}
					options={{
						title: "Category Meals",
					}}
				/>
				<Stack.Screen
					name="MealDetails"
					component={MealDetailsScreen}
					options={{
						title: "Meal Details",
						headerRight: () => (
							<Button onPress={() => alert("This is a button!")} title="Info" />
						),
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default MealsNavigation;

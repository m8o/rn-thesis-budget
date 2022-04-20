import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Colors from "../Constants/Colors";
import ExpensesScreen from "../screens/ExpensesScreen";
import HistoryScreen from "../screens/HistoryScreen";
import OverviewScreen from "../screens/OverviewScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/SettingsScreen";
import AddExpenseScreen from "../screens/AddExpenseScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="Expenses"
			backBehavior="initialRoute"
			sceneContainerStyle={{
				backgroundColor: Colors.backgroundLight,
			}}
			screenOptions={{
				tabBarHideOnKeyboard: true,
				tabBarLabelStyle: {
					fontFamily: "open-sans-bold",
				},
				headerStyle: {
					height: 120,
					backgroundColor: "transparent",
					elevation: 0,
				},
				tabBarStyle: {
					backgroundColor: Colors.backgroundLight,
				},
				tabBarInactiveTintColor: Colors.typographyDark,
				tabBarActiveBackgroundColor: "#fff",
				tabBarActiveTintColor: Colors.typographyApprove,
			}}
		>
			<Tab.Screen
				name={"History"}
				component={HistoryScreen}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							color={color}
							size={25}
							name={focused ? "calendar" : "calendar-outline"}
						/>
					),
					title: "History",
					tabBarLabel: "History",
				}}
			/>
			<Tab.Screen
				name={"Expenses"}
				component={ExpensesScreen}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							color={color}
							size={25}
							name={focused ? "wallet" : "wallet-outline"}
						/>
					),
					headerTitleStyle: {
						color: "transparent",
					},
					tabBarLabel: "Expenses",
				}}
			/>
			<Tab.Screen
				name={"Overview"}
				component={OverviewScreen}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							color={color}
							size={25}
							name={focused ? "stats-chart" : "stats-chart-outline"}
						/>
					),
					title: "Overview",
					tabBarLabel: "Overview",
				}}
			/>
		</Tab.Navigator>
	);
};

const NavigationComponent = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						height: 120,
						backgroundColor: "transparent",
						elevation: 0,
					},
					headerTitleAlign: "center",
					cardStyle: {
						backgroundColor: Colors.backgroundLight,
					},
				}}
			>
				<Stack.Screen
					name="TabNavigator"
					component={TabNavigator}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="AddNewExpense"
					component={AddExpenseScreen}
					options={{
						title: "Add New Expense",
					}}
				/>
				<Stack.Screen
					name="Settings"
					component={SettingsScreen}
					options={{
						gestureEnabled: true,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default NavigationComponent;

import { NavigationContainer } from "@react-navigation/native";
import {
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { Icon } from "@components/Icon";

import { GroupScreen } from "@screens/GroupScreen";
import { HomeScreen } from "@screens/HomeScreen";
import { TeamScreen } from "@screens/TeamScreen";

const Tab = createBottomTabNavigator();

function setRouteIcon(
	iconName: string
): Pick<BottomTabNavigationOptions, "tabBarIcon"> {
	return {
		tabBarIcon: ({ focused }) => (
			<Icon name={iconName} size={24} color={focused ? "#c1c1c1" : "#111"} />
		),
	};
}
export const Routes = () => {
	return (
		<NavigationContainer independent>
			<Tab.Navigator
				initialRouteName="home"
				screenOptions={{
					headerShown: false,
					tabBarActiveTintColor: "#c1c1c1",
					tabBarInactiveTintColor: "#111",
				}}
			>
				<Tab.Screen
					name="home"
					component={HomeScreen}
					options={{ ...setRouteIcon("home"), title: "Início" }}
				/>
				<Tab.Screen
					name="team"
					component={TeamScreen}
					options={{ ...setRouteIcon("soccer-field"), title: "Times" }}
				/>
				<Tab.Screen
					name="group"
					component={GroupScreen}
					options={{ ...setRouteIcon("table"), title: "Grupos" }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

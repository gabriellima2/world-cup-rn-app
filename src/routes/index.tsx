import { NavigationContainer } from "@react-navigation/native";
import {
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { Icon } from "@components/Icon";

import { GroupScreen } from "@screens/GroupScreen";
import { HomeScreen } from "@screens/HomeScreen";
import { StackTeams } from "./Stacks";

import { handleTabNavigationVisibility } from "@utils/handle-tab-navigation-visibility";
import { headerDefaultStyle } from "@styles/header-default-style";
import { theme } from "@theme";

const Tab = createBottomTabNavigator();

function setRouteIcon(
	iconName: string
): Pick<BottomTabNavigationOptions, "tabBarIcon"> {
	return {
		tabBarIcon: ({ focused }) => (
			<Icon
				name={iconName}
				size={24}
				color={focused ? theme.utilColor : theme.fontColor}
			/>
		),
	};
}
export const Routes = () => {
	return (
		<NavigationContainer independent>
			<Tab.Navigator
				initialRouteName="home"
				screenOptions={({ route }) => ({
					...headerDefaultStyle,

					tabBarHideOnKeyboard: true,
					tabBarActiveTintColor: theme.utilColor,
					tabBarInactiveTintColor: theme.fontColor,

					tabBarStyle: {
						display: handleTabNavigationVisibility(route, "search"),
						height: 50,
						borderTopWidth: 2,
						borderTopColor: theme.minColor,
						position: "absolute",
						backgroundColor: theme.mainColor.secondary,
					},
					tabBarLabelStyle: {
						fontFamily: "Poppins_500Medium",
					},
				})}
			>
				<Tab.Screen
					name="home"
					component={HomeScreen}
					options={{
						...setRouteIcon("home"),
						title: "World Cup 2022",
						tabBarLabel: "Início",
					}}
				/>
				<Tab.Screen
					name="teams"
					component={StackTeams}
					options={{
						...setRouteIcon("soccer-field"),
						headerShown: false,
						tabBarLabel: "Seleções",
					}}
				/>
				<Tab.Screen
					name="groups"
					component={GroupScreen}
					options={{ ...setRouteIcon("table"), title: "Grupos" }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

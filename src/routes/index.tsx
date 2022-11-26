import { NavigationContainer } from "@react-navigation/native";
import {
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { Icon } from "@components/Icon";

import { GroupScreen } from "@screens/GroupScreen";
import { HomeScreen } from "@screens/HomeScreen";
import { TeamScreen } from "@screens/TeamScreen";
import { theme } from "@theme";

const Tab = createBottomTabNavigator();

const styles: BottomTabNavigationOptions = {
	tabBarHideOnKeyboard: true,
	tabBarActiveTintColor: theme.utilColor,
	tabBarInactiveTintColor: theme.fontColor,

	headerStyle: {
		borderBottomWidth: 2,
		borderBottomColor: theme.minColor,
		backgroundColor: theme.mainColor.primary,
	},
	headerTitleStyle: {
		fontFamily: "Poppins_700Bold",
		textTransform: "capitalize",
		fontSize: 16,
		color: theme.fontColor,
	},

	tabBarStyle: {
		height: 50,
		borderTopWidth: 2,
		borderTopColor: theme.minColor,
		position: "absolute",
		backgroundColor: theme.mainColor.secondary,
	},
	tabBarLabelStyle: {
		fontFamily: "Poppins_500Medium",
	},
};

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
			<Tab.Navigator initialRouteName="home" screenOptions={{ ...styles }}>
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
					name="team"
					component={TeamScreen}
					options={{ ...setRouteIcon("soccer-field"), title: "Seleções" }}
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

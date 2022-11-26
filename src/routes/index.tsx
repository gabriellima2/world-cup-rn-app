import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { GroupScreen } from "@screens/GroupScreen";
import { HomeScreen } from "@screens/HomeScreen";
import { TeamScreen } from "@screens/TeamScreen";

const Tab = createBottomTabNavigator();

export const Routes = () => {
	return (
		<NavigationContainer independent>
			<Tab.Navigator
				initialRouteName="home"
				screenOptions={{ headerShown: false }}
			>
				<Tab.Screen name="home" component={HomeScreen} />
				<Tab.Screen name="team" component={TeamScreen} />
				<Tab.Screen name="group" component={GroupScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

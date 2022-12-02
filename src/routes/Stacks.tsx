import { createStackNavigator } from "@react-navigation/stack";

import { Search } from "@components/Search";

import { SearchScreen } from "@screens/SearchScreen";
import { TeamScreen } from "@screens/TeamScreen";

import { headerDefaultStyle } from "@styles/header-default-style";
import type { TStacksParams } from "@globalTypes/TStackParams";
import type { IChildren } from "@interfaces/IChildren";

const Stack = createStackNavigator<TStacksParams>();

interface NavigatorProps extends IChildren {
	initialRouteName: keyof TStacksParams;
}

const Navigator = (props: NavigatorProps) => (
	<Stack.Navigator
		initialRouteName={props.initialRouteName}
		screenOptions={{
			...headerDefaultStyle,
		}}
	>
		{props.children}
	</Stack.Navigator>
);

export const StackTeams = () => (
	<Navigator initialRouteName="team">
		<Stack.Screen
			name="team"
			component={TeamScreen}
			options={{ title: "Seleções", headerRight: () => <Search.Button /> }}
		/>
		<Stack.Screen
			name="search"
			component={SearchScreen}
			options={{ title: "", headerRight: () => <Search.Input /> }}
		/>
	</Navigator>
);

import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ApolloProvider } from "@apollo/client";
import {
	useFonts,
	Poppins_300Light,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_600SemiBold,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { Routes } from "@routes/index";
import { client } from "@services/client";

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_300Light,
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_600SemiBold,
		Poppins_700Bold,
	});

	if (!fontsLoaded) return <Text>Carregando...</Text>;

	return (
		<ApolloProvider client={client}>
			<StatusBar style="auto" />
			<Routes />
		</ApolloProvider>
	);
}

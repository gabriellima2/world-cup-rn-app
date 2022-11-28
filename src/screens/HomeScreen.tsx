import { View } from "react-native";

import { FlagTeams } from "@components/Teams/FlagTeams";
import { Text } from "@components/Text";
import { News } from "@components/News";

import { AppLayout } from "@layouts/AppLayout";

export const HomeScreen = () => {
	return (
		<AppLayout>
			<View>
				<FlagTeams />
			</View>
			<View>
				<Text.Strong>Notícias</Text.Strong>
				<View>
					<News />
				</View>
			</View>
		</AppLayout>
	);
};

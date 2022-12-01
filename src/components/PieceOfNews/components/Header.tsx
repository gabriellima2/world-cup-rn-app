import { StyleSheet, View } from "react-native";

import { TeamsPreview } from "@components/TeamsPreview";
import { Text } from "@components/Text";

import { theme } from "@theme";

export const Header = () => (
	<View style={styles.header}>
		<TeamsPreview />
		<Text.Strong style={styles.header__title}>Notícias</Text.Strong>
	</View>
);

const styles = StyleSheet.create({
	header: {
		marginTop: 16,
	},
	header__title: {
		fontSize: 13,
		color: theme.utilColor,
		marginBottom: 8,
	},
});

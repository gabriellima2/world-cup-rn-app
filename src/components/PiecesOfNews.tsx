import { Dimensions, Image, StyleSheet, View } from "react-native";

import { FlagTeams } from "./Teams/FlagTeams";
import { List } from "./List";
import { Text } from "./Text";

import { piecesOfNews } from "@mocks/piecesOfNews";
import type { NewsModel } from "@models/news-model";
import { theme } from "@theme";

const { width } = Dimensions.get("window");

const Header = () => (
	<View style={styles.header}>
		<FlagTeams />
		<Text.Strong style={styles.header__title}>Notícias</Text.Strong>
	</View>
);

const News = (props: NewsModel) => (
	<View style={styles.news}>
		<Image
			source={{ uri: props.image_url || undefined }}
			resizeMode="stretch"
			style={styles.news__image}
		/>
		<View style={styles.texts}>
			<Text.Title style={styles.texts__title}>{props.title}</Text.Title>
			<Text.Paragraph numberOfLines={2} style={styles.texts__paragraph}>
				{props.presentation_text}
			</Text.Paragraph>
		</View>
	</View>
);

export const PiecesOfNews = () => (
	<List<NewsModel>
		data={piecesOfNews}
		Item={News}
		contentContainerStyle={styles.container}
		ListHeaderComponent={Header}
	/>
);

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 12,
	},
	news: {
		marginBottom: 24,
		borderRadius: 8,
		backgroundColor: theme.minColor,
	},
	news__image: {
		width: "100%",
		height: width - 160,

		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		backgroundColor: theme.minColor,
	},
	texts: {
		padding: 16,
	},
	texts__title: {
		marginBottom: 2,
		textTransform: "capitalize",
		fontSize: 16,
	},
	texts__paragraph: {
		color: theme.utilColor,
		fontSize: 13,
	},
	header: {
		marginTop: 16,
	},
	header__title: {
		fontSize: 13,
		color: theme.utilColor,
		marginBottom: 8,
	},
});

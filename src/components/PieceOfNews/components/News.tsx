import { Dimensions, Image, StyleSheet, View } from "react-native";

import { Text } from "@components/Text";

import { theme } from "@theme";
import type { NewsModel } from "@models/news-model";

const { width } = Dimensions.get("window");

export const News = (props: NewsModel) => (
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

const styles = StyleSheet.create({
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
});

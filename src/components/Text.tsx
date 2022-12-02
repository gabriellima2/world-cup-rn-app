import { StyleSheet, Text as TextRN, TextProps } from "react-native";

import { theme } from "@styles/theme";

const Title = (props: TextProps) => (
	<TextRN {...props} style={[styles.title, props.style]} />
);

const Paragraph = (props: TextProps) => (
	<TextRN {...props} style={[styles.paragraph, props.style]} />
);

const Light = (props: TextProps) => (
	<TextRN {...props} style={[styles.light, props.style]} />
);

const Medium = (props: TextProps) => (
	<TextRN {...props} style={[styles.medium, props.style]} />
);

const Strong = (props: TextProps) => (
	<TextRN {...props} style={[styles.strong, props.style]} />
);

const styles = StyleSheet.create({
	title: {
		fontFamily: "Poppins_700Bold",
		color: theme.fontColor,
		fontSize: 18,
	},
	paragraph: {
		fontFamily: "Poppins_400Regular",
		color: theme.fontColor,
	},
	light: {
		fontFamily: "Poppins_300Light",
		color: theme.fontColor,
	},
	medium: {
		fontFamily: "Poppins_500Medium",
		color: theme.fontColor,
	},
	strong: {
		fontFamily: "Poppins_600SemiBold",
		color: theme.fontColor,
	},
});

export const Text = { Title, Paragraph, Light, Medium, Strong };

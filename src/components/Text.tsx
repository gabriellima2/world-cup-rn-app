import { StyleSheet, Text as TextRN, TextProps } from "react-native";

import { theme } from "@theme";

const Title = (props: TextProps) => (
	<TextRN {...props} style={[props.style, styles.title]} />
);

const Paragraph = (props: TextProps) => (
	<TextRN {...props} style={[props.style, styles.paragraph]} />
);

const Strong = (props: TextProps) => (
	<TextRN {...props} style={[props.style, styles.strong]} />
);

const Light = (props: TextProps) => (
	<TextRN {...props} style={[props.style, styles.light]} />
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
	strong: {
		fontFamily: "Poppins_600SemiBold",
		color: theme.fontColor,
	},
	light: {
		fontFamily: "Poppins_300Light",
		color: theme.fontColor,
	},
});

export const Text = { Title, Paragraph, Strong, Light };

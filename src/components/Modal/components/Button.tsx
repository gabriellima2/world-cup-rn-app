import {
	StyleSheet,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";

import { Text } from "@components/Text";

export const Button = (props: TouchableOpacityProps) => (
	<TouchableOpacity {...props} activeOpacity={0.6}>
		<Text.Medium style={styles.button__text}>{props.children}</Text.Medium>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	button__text: {
		fontSize: 13,
	},
});

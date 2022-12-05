import { Text } from "@components/Text";
import {
	StyleSheet,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";

export const Button = (props: TouchableOpacityProps) => (
	<TouchableOpacity {...props} style={[props.style, styles.button]}>
		<Text.Medium>{props.children}</Text.Medium>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	button: {},
});

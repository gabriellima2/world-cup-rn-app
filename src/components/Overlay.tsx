import {
	StyleSheet,
	TouchableWithoutFeedback,
	TouchableWithoutFeedbackProps,
	View,
} from "react-native";
import type { IChildren } from "@globalTypes/IChildren";

interface OverlayProps
	extends IChildren,
		Omit<TouchableWithoutFeedbackProps, "children" | "onPress" | "style"> {
	onPress: () => void;
}

export const Overlay = (props: OverlayProps) => (
	<TouchableWithoutFeedback style={{ flex: 1 }} {...props}>
		<View style={styles.overlay}>
			<TouchableWithoutFeedback>{props.children}</TouchableWithoutFeedback>
		</View>
	</TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#00000060",
	},
});

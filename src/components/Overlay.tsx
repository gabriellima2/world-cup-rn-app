import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import type { IChildren } from "@globalTypes/IChildren";

interface OverlayProps extends IChildren {
	onPress: () => void;
}

export const Overlay = (props: OverlayProps) => (
	<TouchableWithoutFeedback style={{ flex: 1 }} onPress={props.onPress}>
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

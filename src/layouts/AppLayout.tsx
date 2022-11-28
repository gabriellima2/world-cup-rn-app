import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import type { IChildren } from "@interfaces/IChildren";
import { theme } from "@theme";

export const AppLayout = (props: IChildren) => (
	<LinearGradient
		colors={[theme.mainColor.primary, theme.mainColor.secondary]}
		style={styles.container}
	>
		<View style={styles.container}>{props.children}</View>
	</LinearGradient>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 8,
		paddingTop: 12,
	},
});

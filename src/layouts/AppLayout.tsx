import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { SafeContainer } from "@components/SafeContainer";

import type { IChildren } from "@interfaces/IChildren";
import { theme } from "@theme";

export const AppLayout = (props: IChildren) => (
	<LinearGradient
		colors={[theme.mainColor.primary, theme.mainColor.secondary]}
		style={styles.container}
	>
		<SafeContainer style={styles.container}>{props.children}</SafeContainer>
	</LinearGradient>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

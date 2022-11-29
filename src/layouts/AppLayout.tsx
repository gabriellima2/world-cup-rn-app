import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import type { IChildren } from "@interfaces/IChildren";
import { theme } from "@theme";

interface AppLayoutProps extends IChildren {
	hasHorizontalSpacing?: boolean;
}

export const AppLayout = ({
	hasHorizontalSpacing = true,
	...props
}: AppLayoutProps) => {
	const bottomTabBarHeight = useBottomTabBarHeight();

	return (
		<LinearGradient
			colors={[theme.mainColor.primary, theme.mainColor.secondary]}
			style={{ ...styles.container, paddingBottom: bottomTabBarHeight }}
		>
			<View
				style={{
					...styles.container,
					paddingHorizontal: hasHorizontalSpacing ? 8 : 0,
				}}
			>
				{props.children}
			</View>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

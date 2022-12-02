import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import type { IChildren } from "@globalTypes/IChildren";
import { theme } from "@styles/theme";

interface AppLayoutProps extends IChildren {
	hasHorizontalSpacing?: boolean;
}

export const AppLayout = ({
	hasHorizontalSpacing,
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

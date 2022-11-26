import { SafeAreaView, StatusBar, Platform } from "react-native";

import type { IViewProps } from "@interfaces/IDefaultProps";

const isAndroid = Platform.OS === "android";
const statusBarHeight = StatusBar.currentHeight || 44;

export const SafeContainer = (props: IViewProps) => (
	<SafeAreaView
		{...props}
		style={[props.style, { paddingTop: isAndroid ? statusBarHeight : 0 }]}
	/>
);

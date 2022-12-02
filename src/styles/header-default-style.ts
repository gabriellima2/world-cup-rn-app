/* eslint-disable prettier/prettier */
import type{ StackNavigationOptions } from "@react-navigation/stack";
import { theme } from "@styles/theme";

export const headerDefaultStyle:
	 Pick<StackNavigationOptions, "headerTintColor" | "headerStyle" | "headerTitleStyle">
	 = {
	 	headerTintColor: theme.fontColor,
	 	headerStyle: {
	 		borderBottomWidth: 2,
	 		borderBottomColor: theme.minColor,
	 		backgroundColor: theme.mainColor.primary,
	 	},
	 	headerTitleStyle: {
	 		fontFamily: "Poppins_700Bold",
	 		textTransform: "capitalize",
	 		fontSize: 16,
	 		color: theme.fontColor,
	 	},
	 };

import React from "react";
import { StyleSheet, TextProps, View, ViewProps } from "react-native";

import { Text } from "./Text";
import { theme } from "@theme";

interface HeaderProps extends Omit<TextProps, "children"> {
	title: string;
}

const Cell = (props: ViewProps) => (
	<View {...props} style={[styles.cell, props.style]} />
);

const Header = ({ title, ...props }: HeaderProps) => (
	<Text.Strong {...props} style={[styles.header, props.style]}>
		{title}
	</Text.Strong>
);

const Area = (props: ViewProps) => {
	return <View {...props} style={props.style} />;
};

export const Table = { Area, Header, Cell };

const styles = StyleSheet.create({
	header: {
		alignItems: "center",
		paddingHorizontal: 16,
		paddingVertical: 4,
		borderRadius: 4,

		textTransform: "capitalize",
		backgroundColor: theme.minColor,
	},
	cell: {
		alignItems: "center",
		flexDirection: "row",
		flexWrap: "wrap",

		paddingHorizontal: 16,
		paddingVertical: 8,

		borderTopWidth: 1,
		borderTopColor: theme.minColor,
		borderStyle: "solid",
	},
});

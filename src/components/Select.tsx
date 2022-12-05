import PickerSelect, { PickerSelectProps } from "react-native-picker-select";
import { View, StyleSheet } from "react-native";

import { Text } from "./Text";

interface SelectProps extends PickerSelectProps {
	label: string;
}

export const Select = ({ label, ...props }: SelectProps) => (
	<View style={styles.container}>
		<Text.Paragraph>{label}</Text.Paragraph>
		<PickerSelect
			{...props}
			style={{ viewContainer: styles.select__container }}
		/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
	select__container: {
		flex: 1,
	},
});

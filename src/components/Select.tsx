import { View, StyleSheet } from "react-native";
import PickerSelect, {
	PickerSelectProps,
	PickerStyle,
} from "react-native-picker-select";

import { Text } from "./Text";
import { theme } from "@styles/theme";

interface SelectProps extends PickerSelectProps {
	label: string;
}

export const Select = ({ label, ...props }: SelectProps) => (
	<View style={styles.container}>
		<Text.Medium style={styles.label}>{label}</Text.Medium>
		<PickerSelect {...props} style={pickerStyles} />
	</View>
);

const pickerStyles = StyleSheet.create<PickerStyle>({
	viewContainer: {
		flex: 1,
		height: 50,
	},
	placeholder: {
		color: theme.fontColor,
	},
	inputIOS: {
		height: 50,

		color: theme.fontColor,
		borderBottomWidth: 1,
		borderBottomColor: theme.minColor,
	},
	inputAndroid: {
		height: 50,

		color: theme.fontColor,
		borderBottomWidth: 1,
		borderBottomColor: theme.minColor,
	},
});

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	label: {
		marginRight: 4,
		fontSize: 13,
	},
});

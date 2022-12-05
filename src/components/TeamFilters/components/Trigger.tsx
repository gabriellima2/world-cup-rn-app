import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Icon } from "@components/Icon";
import { theme } from "@styles/theme";

export const Trigger = (props: TouchableOpacityProps) => {
	return (
		<TouchableOpacity {...props}>
			<Icon name="filter-variant" size={24} color={theme.fontColor} />
		</TouchableOpacity>
	);
};

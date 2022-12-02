import { StyleSheet, TouchableOpacity } from "react-native";
import { useStackNavigate } from "@hooks/useNavigate";

import { Icon } from "@components/Icon";

import { theme } from "@styles/theme";

export const Button = () => {
	const navigate = useStackNavigate("search");

	return (
		<TouchableOpacity
			onPress={navigate}
			activeOpacity={1}
			style={styles.button}
		>
			<Icon name="search-web" size={28} color={theme.fontColor} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		marginRight: 16,
	},
});

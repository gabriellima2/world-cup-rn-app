import { TouchableOpacity } from "react-native";
import { useStackNavigate } from "@hooks/useNavigate";

import { Icon } from "@components/Icon";

import { theme } from "@styles/theme";

export const Button = () => {
	const navigate = useStackNavigate("search");

	return (
		<TouchableOpacity onPress={navigate}>
			<Icon name="search-web" size={32} color={theme.fontColor} />
		</TouchableOpacity>
	);
};

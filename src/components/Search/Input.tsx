import { TextInput } from "react-native";
import { theme } from "@styles/theme";

export const Input = () => {
	return (
		<TextInput
			placeholder="Faça sua pesquisa"
			placeholderTextColor={theme.fontColor}
		/>
	);
};

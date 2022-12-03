import { StyleSheet, TextInput } from "react-native";

import { useSearchContext } from "@contexts/SearchContext";
import { theme } from "@styles/theme";

export const Input = () => {
	const { searchValue, changeSearchValue } = useSearchContext();

	return (
		<TextInput
			placeholder="Faça sua pesquisa"
			placeholderTextColor="#ffffff80"
			style={styles.input}
			autoCapitalize="none"
			returnKeyType="search"
			autoCorrect={false}
			value={searchValue}
			accessibilityLabel="Campo de pesquisa"
			onChangeText={(text: string) => changeSearchValue(text)}
		/>
	);
};

const styles = StyleSheet.create({
	input: {
		width: "100%",

		borderRadius: 4,
		marginRight: 20,
		paddingVertical: 2,
		paddingHorizontal: 8,

		fontSize: 13,
		color: theme.fontColor,
		fontFamily: "Poppins_400Regular",

		backgroundColor: theme.minColor,
	},
});

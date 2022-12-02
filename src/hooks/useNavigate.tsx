import { useNavigation } from "@react-navigation/native";

import type { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import type { TStacksParams } from "src/@types/TStackParams";

export function useStackNavigate(routes: keyof TStacksParams) {
	const navigation = useNavigation<StackNavigationProp<TStacksParams>>();

	return () => navigation.navigate(routes);
}

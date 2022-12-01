import { StyleSheet } from "react-native";

import { useGroups } from "./hooks/useGroups";

import { Loading } from "@components/Loading";
import { Error } from "@components/Error";
import { List } from "@components/List";
import { Group } from "./components";

export const Groups = () => {
	const { data, error, loading } = useGroups();

	if (error || !data) return <Error message="Oops! Verifique sua conexão" />;

	if (loading) return <Loading />;

	return (
		<List
			data={data.groups}
			Item={Group}
			contentContainerStyle={styles.container}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 24,
		paddingBottom: 12,
	},
});

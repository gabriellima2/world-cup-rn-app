import { StyleSheet } from "react-native";

import { TeamFlag, useTeamsFlag } from "./hooks/useTeamsFlag";

import { Loading } from "@components/Loading";
import { Error } from "@components/Error";
import { List } from "@components/List";
import { Team } from "./components";

export const TeamsPreview = () => {
	const { data, error, loading } = useTeamsFlag();

	if (error || !data) return <Error message="Oops! Verifique sua conexão" />;

	if (loading) return <Loading />;

	return (
		<List<TeamFlag>
			data={data.teams}
			Item={Team}
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles.container}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingBottom: 24,
		paddingTop: 4,
		alignItems: "center",
		justifyContent: "center",
	},
});

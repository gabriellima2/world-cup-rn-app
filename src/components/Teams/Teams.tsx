import { StyleSheet } from "react-native";

import { useTeams } from "./hooks/useTeams";

import { Loading } from "@components/Loading";
import { Error } from "@components/Error";
import { List } from "@components/List";
import { Team } from "./components";

import type { TeamModel } from "@models/team-model";

export const Teams = () => {
	const { data, error, loading } = useTeams();

	if (error || !data?.teams)
		return <Error message="Oops! Verifique sua conexão e/ou renicie o app" />;

	if (loading) return <Loading />;

	return (
		<List<TeamModel>
			data={data.teams}
			Item={Team}
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

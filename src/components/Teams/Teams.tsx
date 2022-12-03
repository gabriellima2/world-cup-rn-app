import { StyleSheet } from "react-native";

import { List } from "@components/List";
import { Team } from "./components";

import type { TeamModel } from "@models/team-model";

interface TeamsProps {
	teams: TeamModel[];
}

export const Teams = (props: TeamsProps) => {
	return (
		<List<TeamModel>
			data={props.teams}
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

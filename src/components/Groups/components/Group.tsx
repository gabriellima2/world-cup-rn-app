import { StyleSheet } from "react-native";

import { Table } from "@components/Table";
import { Flag } from "@components/Flag";
import { Text } from "@components/Text";

import type { GroupModel } from "@models/group-model";

interface GroupProps extends GroupModel {}

export const Group = (props: GroupProps) => (
	<Table.Area style={styles.container}>
		<Table.Header title={`Grupo ${props.id}`} />
		{props.teams.map((team) => (
			<Table.Cell key={team.id}>
				<Flag url={team.flag_url} style={styles.team__image} />
				<Text.Strong style={styles.team__name}>{team.name}</Text.Strong>
			</Table.Cell>
		))}
	</Table.Area>
);

const styles = StyleSheet.create({
	container: {
		marginTop: 4,
	},
	team__image: {
		width: 30,
		height: 30,
	},
	team__name: {
		textTransform: "capitalize",
		marginLeft: 12,
	},
});

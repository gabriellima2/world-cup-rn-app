import { StyleSheet, View } from "react-native";

import { useTeams } from "@hooks/useTeams";

import { Loading } from "@components/Loading";
import { Error } from "@components/Error";
import { Flag } from "@components/Flag";
import { List } from "@components/List";
import { Text } from "@components/Text";

import type { TeamModel } from "@models/team-model";
import { theme } from "@theme";

const Team = (props: TeamModel) => (
	<View style={styles.item}>
		<View style={styles.item__main}>
			<Flag url={props.flag_url} style={styles.item__image} />
			<View style={styles.item__texts}>
				<Text.Title style={styles.item__texts__name}>{props.name}</Text.Title>
				<Text.Medium style={styles.item__texts__region}>
					{props.region}
				</Text.Medium>
			</View>
		</View>
		<Text.Medium style={styles.item__group}>Grupo {props.group}</Text.Medium>
	</View>
);

export const CompletTeams = () => {
	const { data, error, loading } = useTeams();

	if (error || !data?.teams)
		return <Error message="Oops! Verifique sua conexão e/ou renicie o app" />;

	if (loading) return <Loading />;

	return <List<TeamModel> data={data.teams} Item={Team} />;
};

const styles = StyleSheet.create({
	item: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",

		padding: 16,
		borderRadius: 8,

		marginBottom: 12,

		backgroundColor: theme.minColor,
	},
	item__image: {
		width: 55,
		height: 55,
	},
	item__main: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	item__texts: {
		marginLeft: 16,
	},
	item__texts__name: {
		textTransform: "capitalize",
		fontSize: 14,
	},
	item__texts__region: {
		textTransform: "capitalize",
		color: theme.utilColor,
		fontSize: 12,
	},
	item__group: {
		textTransform: "capitalize",
		fontSize: 11,
	},
});

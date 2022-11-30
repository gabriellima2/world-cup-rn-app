import { StyleSheet, View } from "react-native";

import { Loading } from "@components/Loading";
import { Error } from "@components/Error";
import { List } from "@components/List";
import { Flag } from "@components/Flag";

import { TeamFlag, useTeamsFlag } from "@hooks/useTeamsFlag";

const Team = (props: TeamFlag) => (
	<View style={styles.item}>
		<Flag url={props.flag_url} />
	</View>
);

export const FlagTeams = () => {
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
	item: {
		marginHorizontal: 4,
	},
});

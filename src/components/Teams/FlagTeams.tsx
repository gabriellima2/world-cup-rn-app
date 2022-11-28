import { Image, StyleSheet, View } from "react-native";

import { Loading } from "@components/Loading";
import { Error } from "@components/Error";
import { List } from "@components/List";

import { TeamFlag, useTeamsFlag } from "@hooks/useTeamsFlag";

const Team = (props: TeamFlag) => (
	<View style={styles.item}>
		<Image source={{ uri: props.flag_url }} style={styles.item__image} />
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
	item__image: {
		width: 50,
		height: 50,
		borderRadius: 1000,
	},
});

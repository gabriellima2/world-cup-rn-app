import { StyleSheet, View } from "react-native";

import { TeamFlag } from "../hooks/useTeamsFlag";
import { Flag } from "@components/Flag";

export const Team = (props: TeamFlag) => (
	<View style={styles.item}>
		<Flag url={props.flag_url} />
	</View>
);

const styles = StyleSheet.create({
	item: {
		marginHorizontal: 4,
	},
});

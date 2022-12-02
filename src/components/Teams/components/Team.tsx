import { StyleSheet, View } from "react-native";

import { Flag } from "@components/Flag";
import { Text } from "@components/Text";

import type { TeamModel } from "@models/team-model";
import { theme } from "@styles/theme";

export const Team = (props: TeamModel) => (
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

import { useQuery } from "@apollo/client";

import { GET_TEAMS_FLAG } from "@graphql/teams-schema";
import type { TeamModel } from "@models/team-model";

export type TeamFlag = Pick<TeamModel, "flag_url" | "id">;

interface Data {
	teams: TeamFlag[];
}

export function useTeamsFlag() {
	const { data, error, loading } = useQuery<Data>(GET_TEAMS_FLAG);

	return {
		data,
		error,
		loading,
	};
}

import { useQuery } from "@apollo/client";

import { GET_TEAMS } from "@graphql/teams-schema";
import type { TeamModel } from "@models/team-model";

export type TeamFlag = Pick<TeamModel, "flag_url" | "id">;

interface Data {
	teams: TeamFlag[];
}

export function useTeamsFlag() {
	const { data, error, loading } = useQuery<Data>(GET_TEAMS);

	return {
		data,
		error,
		loading,
	};
}

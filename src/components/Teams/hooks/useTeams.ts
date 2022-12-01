import { useQuery } from "@apollo/client";

import { GET_TEAMS } from "../schemas/teams-schema";
import type { TeamModel } from "@models/team-model";

interface Data {
	teams: TeamModel[];
}

export function useTeams() {
	const { data, error, loading } = useQuery<Data>(GET_TEAMS);

	return {
		data,
		error,
		loading,
	};
}

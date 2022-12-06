import { useQuery } from "@apollo/client";

import { GET_TEAMS } from "../schemas/teams-schema";
import type { TeamModel } from "@models/team-model";
import type { FiltersModel } from "@models/filters-model";

interface Data {
	teams: TeamModel[];
}

interface UseTeamsParams {
	filters?: FiltersModel;
}

export function useTeams({ filters }: UseTeamsParams) {
	const { data, error, loading } = useQuery<Data>(GET_TEAMS, {
		variables: { ...filters },
	});

	return {
		data,
		error,
		loading,
	};
}

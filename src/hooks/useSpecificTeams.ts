import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

import { GET_BY_NAME_TEAMS } from "@schemas/teams-schema";

import type { TeamModel } from "@models/team-model";
import { debounce } from "@utils/debounce";

interface UseSpecificTeamsParams {
	name: string;
}

interface Response {
	teams: TeamModel[];
}

export function useSpecificTeams({ name }: UseSpecificTeamsParams) {
	const [loadTeams, { data, loading, error }] = useLazyQuery<Response>(
		GET_BY_NAME_TEAMS,
		{
			variables: { name },
		}
	);

	useEffect(() => {
		debounce(async () => await loadTeams(), 120);
	}, [name]);

	return {
		loading,
		data,
		error,
	};
}

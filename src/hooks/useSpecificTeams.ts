import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { TeamModel } from "@models/team-model";

interface UseSpecificTeamsParams {
	name: string;
	filters: [];
}

interface Response {
	teams: TeamModel[];
}

const GET_TEAMS = gql`
	query GetTeams($name: String!) {
		teams(name: $name) {
			id
			name
			group
			region
			flag_url
		}
	}
`;

export function useSpecificTeams({ name, filters }: UseSpecificTeamsParams) {
	const { data, loading, error } = useQuery<Response>(GET_TEAMS, {
		variables: { name },
	});

	return {
		loading,
		data,
		error,
	};
}

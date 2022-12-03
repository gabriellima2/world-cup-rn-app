import { gql } from "@apollo/client";

export const GET_TEAMS = gql`
	query GetTeams {
		teams {
			id
			name
			group
			region
			flag_url
		}
	}
`;

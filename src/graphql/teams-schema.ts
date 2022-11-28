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

export const GET_TEAMS_FLAG = gql`
	query GetTeams {
		teams {
			id
			flag_url
		}
	}
`;

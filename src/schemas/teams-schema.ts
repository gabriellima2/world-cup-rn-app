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

export const GET_BY_NAME_TEAMS = gql`
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

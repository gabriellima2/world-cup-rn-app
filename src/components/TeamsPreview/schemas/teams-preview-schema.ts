import { gql } from "@apollo/client";

export const GET_TEAMS_FLAG = gql`
	query GetTeams {
		teams {
			id
			flag_url
		}
	}
`;

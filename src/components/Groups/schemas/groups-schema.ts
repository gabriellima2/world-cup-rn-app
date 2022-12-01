import { gql } from "@apollo/client";

export const GET_GROUPS = gql`
	query GetGroups {
		groups {
			id
			teams {
				id
				name
				flag_url
			}
		}
	}
`;

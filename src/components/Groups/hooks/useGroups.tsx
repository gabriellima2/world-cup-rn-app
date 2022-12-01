import { useQuery } from "@apollo/client";

import type { GroupModel } from "@models/group-model";
import { GET_GROUPS } from "../schemas/groups-schema";

interface Response {
	groups: GroupModel[];
}

export function useGroups() {
	const { data, error, loading } = useQuery<Response>(GET_GROUPS);

	return {
		data,
		error,
		loading,
	};
}

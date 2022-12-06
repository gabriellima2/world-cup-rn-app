import { useTeams } from "@hooks/useTeams";

import { useFiltersContext } from "@contexts/FiltersContext";

import { Error } from "@components/Error";
import { Teams } from "@components/Teams";
import { Loading } from "@components/Loading";

import { AppLayout } from "@layouts/AppLayout";

export const TeamScreen = () => {
	const { filters } = useFiltersContext();
	const { data, error, loading } = useTeams({ filters });

	return (
		<AppLayout>
			<>
				{error && (
					<Error message="Oops! Verifique sua conexão e/ou renicie o app" />
				)}

				{loading ? <Loading /> : <Teams teams={data!.teams} />}
			</>
		</AppLayout>
	);
};

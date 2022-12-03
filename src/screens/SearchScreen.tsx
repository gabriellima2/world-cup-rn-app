import { useSpecificTeams } from "@hooks/useSpecificTeams";
import { useSearchContext } from "@contexts/SearchContext";

import { Loading } from "@components/Loading";
import { Error } from "@components/Error";
import { Teams } from "@components/Teams";

import { AppLayout } from "@layouts/AppLayout";

export const SearchScreen = () => {
	const { searchValue } = useSearchContext();
	const { data, error, loading } = useSpecificTeams({
		name: searchValue,
	});

	const hasNoResults = !loading && !data?.teams.length;

	if (error) {
		return (
			<AppLayout>
				<Error message="Oops! Verifique sua conexão e/ou renicie o app" />
			</AppLayout>
		);
	}

	return (
		<AppLayout>
			{hasNoResults && (
				<Error message="Desculpe! Nenhum resultado encontrado" />
			)}

			{loading ? <Loading /> : <Teams teams={data?.teams || []} />}
		</AppLayout>
	);
};

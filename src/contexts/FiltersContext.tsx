import { createContext, useContext, useState } from "react";

import type { IChildren } from "@globalTypes/IChildren";
import type { FiltersModel } from "@models/filters-model";

interface FiltersContextProperties {
	filters: FiltersModel;
	addFilters: (newFilters: FiltersModel) => void;
}

const FiltersContext = createContext({} as FiltersContextProperties);

export const FiltersContextProvider = ({ children }: IChildren) => {
	const [filters, setFilters] = useState<FiltersModel>({
		group: null,
		region: null,
	});

	const addFilters = (newFilters: FiltersModel) => setFilters(newFilters);

	return (
		<FiltersContext.Provider value={{ filters, addFilters }}>
			{children}
		</FiltersContext.Provider>
	);
};

export const useFiltersContext = () => useContext(FiltersContext);

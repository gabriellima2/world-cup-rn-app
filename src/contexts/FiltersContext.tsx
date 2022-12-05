import { createContext, useContext, useState } from "react";
import type { IChildren } from "@globalTypes/IChildren";

interface Filters {
	group: string | null;
	region: string | null;
}

interface FiltersContextProperties {
	filters: Filters;
	handleChangeFilter: (key: keyof Filters, value: string) => void;
}

const FiltersContext = createContext({} as FiltersContextProperties);

export const FiltersContextProvider = ({ children }: IChildren) => {
	const [filters, setFilters] = useState<Filters>({
		group: null,
		region: null,
	});

	const handleChangeFilter = (key: keyof Filters, value: string) => {
		setFilters((prevState) => ({
			...prevState,
			[key]: value,
		}));
	};

	return (
		<FiltersContext.Provider value={{ filters, handleChangeFilter }}>
			{children}
		</FiltersContext.Provider>
	);
};

export const useFiltersContext = () => useContext(FiltersContext);

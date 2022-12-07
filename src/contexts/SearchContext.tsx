import { createContext, useState, useContext } from "react";
import type { IChildren } from "@globalTypes/IChildren";

interface SearchContextProperties {
	searchValue: string;
	changeSearchValue: (value: string) => void;
}

export const SearchContext = createContext({} as SearchContextProperties);

export const SearchContextProvider = ({ children }: IChildren) => {
	const [searchValue, setSearchValue] = useState("");

	const changeSearchValue = (value: string) => setSearchValue(value);

	return (
		<SearchContext.Provider value={{ searchValue, changeSearchValue }}>
			{children}
		</SearchContext.Provider>
	);
};

export const useSearchContext = () => useContext(SearchContext);

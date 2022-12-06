import { View } from "react-native";

import { useFiltersContext } from "@contexts/FiltersContext";

import { Select } from "@components/Select";
import { Modal } from "@components/Modal";
import { Trigger } from "./components";

import { filterGroups, filterRegions } from "./constants/filters";
import type { FiltersModel } from "@models/filters-model";

export const TeamFilters = () => {
	const { addFilters } = useFiltersContext();

	const currentFilters: FiltersModel = { group: null, region: null };

	const handleApply = () => addFilters(currentFilters);

	const handleFilterChange = (key: keyof FiltersModel, value: string) => {
		currentFilters[key] = value;
	};

	return (
		<Modal Trigger={Trigger} onApply={handleApply} title="Filtrar por">
			<View>
				<Select
					label="Grupo"
					onValueChange={(value: string) => handleFilterChange("group", value)}
					placeholder={{ label: "Todos", value: null }}
					items={[...filterGroups]}
				/>

				<Select
					label="Região"
					onValueChange={(value: string) => handleFilterChange("region", value)}
					placeholder={{ label: "Todas", value: null }}
					items={[...filterRegions]}
				/>
			</View>
		</Modal>
	);
};

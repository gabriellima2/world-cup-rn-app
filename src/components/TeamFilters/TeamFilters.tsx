import { StyleSheet, View } from "react-native";

import { useFiltersContext } from "@contexts/FiltersContext";

import { Select } from "@components/Select";
import { Modal } from "@components/Modal";
import { Trigger } from "./components";

import { filterGroups, filterRegions } from "./constants/filters";

export const TeamFilters = () => {
	const { filters, handleChangeFilter } = useFiltersContext();

	const handleApply = () => console.log(filters);

	return (
		<Modal Trigger={Trigger} onApply={handleApply}>
			<View>
				<Select
					label="Grupo"
					onValueChange={(value: string) => handleChangeFilter("group", value)}
					placeholder={{ label: "Todos", value: null }}
					items={[...filterGroups]}
				/>

				<Select
					label="Região"
					onValueChange={(value: string) => handleChangeFilter("region", value)}
					placeholder={{ label: "Todas", value: null }}
					items={[...filterRegions]}
				/>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({});

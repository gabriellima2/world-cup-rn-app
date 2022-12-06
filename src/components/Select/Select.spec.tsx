import { render, screen } from "@testing-library/react-native";
import { Item } from "react-native-picker-select";

import { Select } from "./Select";

const SELECT_LABEL = "Lib";
const SELECT_PLACEHOLDER = "Todos";

describe("Select Component", () => {
	const itemsMock: Item[] = [{ label: "Testing", value: "testing" }];
	const onValueChangeMock = jest.fn();

	beforeEach(() =>
		render(
			<Select
				label={SELECT_LABEL}
				items={[...itemsMock]}
				onValueChange={onValueChangeMock}
				placeholder={{ label: SELECT_PLACEHOLDER, value: null }}
			/>
		)
	);

	describe("Render", () => {
		it("should render correctly", () => {
			expect(screen.getByText(SELECT_LABEL)).toBeTruthy();
			expect(screen.getByDisplayValue(SELECT_PLACEHOLDER)).toBeTruthy();
		});
	});
});

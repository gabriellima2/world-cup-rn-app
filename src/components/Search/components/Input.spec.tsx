import { fireEvent, render, screen } from "@testing-library/react-native";

import { SearchContext } from "@contexts/SearchContext";
import { Input } from "./Input";

const INPUT_PLACEHOLDER = "Faça sua pesquisa";

describe("Search Input Component", () => {
	const changeSearchValueMock = jest.fn();

	beforeAll(() => {
		render(
			<SearchContext.Provider
				value={{
					searchValue: "",
					changeSearchValue: changeSearchValueMock,
				}}
			>
				<Input />
			</SearchContext.Provider>
		);
	});

	describe("Render", () => {
		it("should render", () => {
			expect(screen.getByPlaceholderText(INPUT_PLACEHOLDER)).toBeTruthy();
		});
	});

	describe("Interactions", () => {
		describe("Change Text", () => {
			it("should get the typed value", () => {
				const TYPE_VALUE = "Type testing";
				const input = screen.getByPlaceholderText(INPUT_PLACEHOLDER);

				fireEvent.changeText(input, TYPE_VALUE);

				expect(changeSearchValueMock).toHaveBeenCalledWith(TYPE_VALUE);
			});
		});
	});
});

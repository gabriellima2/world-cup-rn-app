import { fireEvent, render, screen } from "@testing-library/react-native";

import { Button } from "./Button";

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => ({
	useNavigation: () => ({ navigate: mockedNavigate }),
}));

describe("Search Button Component", () => {
	beforeEach(() => {
		render(<Button />);
	});

	describe("Render", () => {
		it("should render", async () => {
			expect(screen.getByLabelText("Buscar")).toBeTruthy();
		});
	});

	describe("Interactions", () => {
		describe("Press", () => {
			it("should call function the navigate when press on button", () => {
				const button = screen.getByLabelText("Buscar");

				fireEvent.press(button);

				expect(mockedNavigate).toHaveBeenCalledTimes(1);
			});
		});
	});
});

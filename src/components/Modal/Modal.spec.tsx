import { fireEvent, render, screen } from "@testing-library/react-native";

import { Button } from "./components";
import { Modal } from "./Modal";

const TITLE_MODAL = "Modal to testing";
const CONFIRM_BUTTON_TEXT = "Aplicar";
const CANCEL_BUTTON_TEXT = "Cancelar";
const TEXT_TRIGGER_MOCK = "Abrir";

const TriggerMock = () => <Button>{TEXT_TRIGGER_MOCK}</Button>;

describe("Modal Component", () => {
	const onApplyMock = jest.fn();

	beforeEach(() => {
		render(
			<Modal Trigger={TriggerMock} onApply={onApplyMock} title={TITLE_MODAL} />
		);
	});

	describe("Render", () => {
		it("should render trigger", () => {
			expect(screen.getByText(TEXT_TRIGGER_MOCK)).toBeTruthy();
		});
	});

	describe("Interactions", () => {
		describe("Open", () => {
			it("should open modal when clicking the trigger button", () => {
				fireEvent.press(screen.getByText(TEXT_TRIGGER_MOCK));

				expect(screen.getByText(TITLE_MODAL)).toBeTruthy();
				expect(screen.getByText(CONFIRM_BUTTON_TEXT)).toBeTruthy();
				expect(screen.getByText(CANCEL_BUTTON_TEXT)).toBeTruthy();
			});
		});

		describe("Close", () => {
			beforeEach(() => {
				fireEvent.press(screen.getByText(TEXT_TRIGGER_MOCK));
			});

			it("should close modal when clicking the cancel button", () => {
				const cancelButton = screen.getByText(CANCEL_BUTTON_TEXT);

				fireEvent.press(cancelButton);

				expect(screen.queryByText(TITLE_MODAL)).toBeFalsy();
				expect(screen.queryByText(CANCEL_BUTTON_TEXT)).toBeFalsy();
				expect(screen.queryByText(CONFIRM_BUTTON_TEXT)).toBeFalsy();
			});

			it("should close modal and call the apply function when clicking the confirm button", () => {
				const confirmButton = screen.getByText(CONFIRM_BUTTON_TEXT);

				fireEvent.press(confirmButton);

				expect(screen.queryByText(TITLE_MODAL)).toBeFalsy();
				expect(screen.queryByText(CANCEL_BUTTON_TEXT)).toBeFalsy();
				expect(screen.queryByText(CONFIRM_BUTTON_TEXT)).toBeFalsy();
				expect(onApplyMock).toHaveBeenCalledTimes(1);
			});

			it("should close modal when click outside", () => {
				const overlay = screen.getByTestId("overlay_modal");

				fireEvent.press(overlay);

				expect(screen.queryByText(TITLE_MODAL)).toBeFalsy();
				expect(screen.queryByText(CANCEL_BUTTON_TEXT)).toBeFalsy();
				expect(screen.queryByText(CONFIRM_BUTTON_TEXT)).toBeFalsy();
			});
		});
	});
});

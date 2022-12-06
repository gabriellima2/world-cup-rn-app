import { useState } from "react";
import {
	View,
	Modal as RNModal,
	ModalProps as RNModalProps,
	StyleSheet,
	TouchableOpacityProps,
	Dimensions,
} from "react-native";

import { Overlay } from "@components/Overlay";
import { Button } from "./components";

import { theme } from "@styles/theme";
import { Text } from "@components/Text";

interface ModalProps extends Omit<RNModalProps, "visible" | "animationType"> {
	Trigger: (props: TouchableOpacityProps) => JSX.Element;
	onApply: () => void;
	title: string;
}

const { width } = Dimensions.get("window");

export const Modal = ({ Trigger, onApply, title, ...props }: ModalProps) => {
	const [isVisible, setIsVisible] = useState(false);

	const handleHide = () => setIsVisible(false);

	const handleConfirm = () => {
		onApply();
		handleHide();
	};

	return (
		<>
			<Trigger onPress={() => setIsVisible(true)} />

			{isVisible && (
				<View style={styles.center}>
					<RNModal
						{...props}
						animationType="fade"
						visible={isVisible}
						transparent
					>
						<Overlay onPress={handleHide} testID="overlay_modal">
							<View style={styles.container}>
								<Text.Title style={styles.container__title}>{title}</Text.Title>
								{props.children}

								<View style={styles.buttons}>
									<Button style={styles.button__left} onPress={handleHide}>
										Cancelar
									</Button>
									<Button onPress={handleConfirm}>Aplicar</Button>
								</View>
							</View>
						</Overlay>
					</RNModal>
				</View>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
	},
	container: {
		width: width - 100,
		paddingVertical: 16,
		paddingHorizontal: 20,
		borderRadius: 6,
		backgroundColor: theme.mainColor.primary,
	},
	container__title: {
		fontSize: 16,
		marginBottom: 4,
	},
	buttons: {
		alignSelf: "flex-end",
		flexDirection: "row",
		marginTop: 16,
	},
	button__left: {
		marginRight: 20,
	},
});

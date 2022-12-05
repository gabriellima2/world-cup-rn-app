import { useState } from "react";
import {
	View,
	Modal as RNModal,
	ModalProps as RNModalProps,
	StyleSheet,
	TouchableOpacityProps,
} from "react-native";

import { Button } from "./components";

interface ModalProps extends Omit<RNModalProps, "visible" | "animationType"> {
	Trigger: (props: TouchableOpacityProps) => JSX.Element;
	onApply: () => void;
}

export const Modal = ({ Trigger, onApply, ...props }: ModalProps) => {
	const [isVisible, setIsVisible] = useState(false);

	const handleHide = () => setIsVisible(false);

	if (!isVisible) return <Trigger onPress={() => setIsVisible(true)} />;

	return (
		<View style={styles.center}>
			<RNModal animationType="fade" visible={isVisible} {...props}>
				{props.children}

				<View>
					<Button onPress={handleHide}>Cancelar</Button>
					<Button
						onPress={() => {
							onApply();
							handleHide();
						}}
					>
						Aplicar
					</Button>
				</View>
			</RNModal>
		</View>
	);
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

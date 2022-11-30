import { Image, ImageProps, StyleSheet } from "react-native";

interface FlagProps extends Omit<ImageProps, "source"> {
	url: string;
}

export const Flag = (props: FlagProps) => (
	<Image
		{...props}
		source={{ uri: props.url }}
		style={[styles.image, props.style]}
	/>
);

const styles = StyleSheet.create({
	image: {
		width: 50,
		height: 50,
		borderRadius: 1000,
	},
});

import { Text } from "./Text";

interface ErrorProps {
	message: string;
}

export const Error = (props: ErrorProps) => (
	<Text.Title>😞 {props.message}</Text.Title>
);

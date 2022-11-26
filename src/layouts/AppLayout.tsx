import { SafeContainer } from "@components/SafeContainer";
import type { IChildren } from "@interfaces/IChildren";

export const AppLayout = (props: IChildren) => (
	<SafeContainer>{props.children}</SafeContainer>
);

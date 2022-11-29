import { PiecesOfNews } from "@components/PiecesOfNews";
import { AppLayout } from "@layouts/AppLayout";

export const HomeScreen = () => {
	return (
		<AppLayout hasHorizontalSpacing={false}>
			<PiecesOfNews />
		</AppLayout>
	);
};

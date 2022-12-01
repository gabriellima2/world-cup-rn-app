import { Header, News } from "./components";
import { List } from "../List";

import { piecesOfNews } from "@mocks/piecesOfNews";
import type { NewsModel } from "@models/news-model";

export const PiecesOfNews = () => (
	<List<NewsModel>
		data={piecesOfNews}
		Item={News}
		ListHeaderComponent={Header}
	/>
);

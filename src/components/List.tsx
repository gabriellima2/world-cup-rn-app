import { useCallback } from "react";
import { FlatList, ListRenderItemInfo, FlatListProps } from "react-native";

interface DataDefaultProps {
	id: number | string;
}

interface ListProps<TData>
	extends Omit<FlatListProps<TData>, "data" | "renderItem" | "keyExtractor"> {
	data: TData[];
	Item: (props: TData) => JSX.Element;
}

export const List = <TData extends DataDefaultProps>({
	Item,
	...props
}: ListProps<TData>) => {
	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<TData>) => <Item {...item} />,
		[]
	);

	const keyExtractor = useCallback(({ id }: TData) => id.toString(), []);

	return (
		<FlatList<TData>
			{...props}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
		/>
	);
};

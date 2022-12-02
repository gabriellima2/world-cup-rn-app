import {
	getFocusedRouteNameFromRoute,
	ParamListBase,
	RouteProp,
} from "@react-navigation/native";

export function handleTabNavigationVisibility(
	route: RouteProp<ParamListBase, string>,
	routeToHideTab: string
): "flex" | "none" {
	const focusedRouteName = getFocusedRouteNameFromRoute(route);

	if (!focusedRouteName) return "flex";

	return focusedRouteName === routeToHideTab ? "none" : "flex";
}

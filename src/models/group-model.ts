import type { TeamModel } from "./team-model";

export interface GroupModel {
	id: string;
	teams: Pick<TeamModel, "flag_url" | "id" | "name">[];
}

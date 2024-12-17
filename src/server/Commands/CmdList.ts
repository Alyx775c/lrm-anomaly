
import { AnimationService } from "shared/Services";
import { voidPlayerCall } from "./CmdList.d";

export type CmdRecord = Record<string, voidPlayerCall | { [key: string]: voidPlayerCall }>;

const commands: CmdRecord = {
	"/e": {
		sit: (plr: Player) => {
			let char = plr.Character;
			let animator = char?.FindFirstChild("Humanoid")?.FindFirstChild("Animator") as Animator;

			AnimationService.pWipePlay(animator, 83566894055814, true);
		},
	},
};

export { commands };

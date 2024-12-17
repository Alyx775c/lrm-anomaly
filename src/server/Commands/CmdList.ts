import { voidPlayerCall } from './CmdList.d';
import { CSAnimationHelper } from "shared/Services";

export type CmdRecord = Record<string, voidPlayerCall | { [key: string]: voidPlayerCall }>;

const commands: CmdRecord = {
	"/e": {
		sit: (plr: Player) => {
			let char = plr.Character;
			let animator = char?.FindFirstChild("Humanoid")?.FindFirstChild("Animator") as Animator;

			CSAnimationHelper.pWipePlay(animator, 83566894055814, true);
		},
	},
};

export { commands };

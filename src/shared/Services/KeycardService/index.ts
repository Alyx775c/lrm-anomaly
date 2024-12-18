import AccessLevels from "shared/AccessLevels";
import BaseTool from "shared/ToolTypes";
import Keycard from "shared/ToolTypes/Keycard";

class CSKeycardService {
	/**
	 * hasPerms
	 * @param plr Player to check clearance on
	 * @param clearance Clearance to check
	 * @returns boolean
	 */

	public hasPerms(plr: Player, clearance: keyof typeof AccessLevels) {
		if (plr.Character === undefined) return;

		for (const [_, v] of pairs(plr.Character.GetChildren())) {
			if (v.IsA("Tool") && v.FindFirstChild("Data")) {
				let data = require(v.FindFirstChild("Data") as ModuleScript) as BaseTool;
				if (data._T === "Keycard") {
					let kcData = data as Keycard;
					let goalIDX = AccessLevels[clearance];

					if ((kcData.AccessLevel as unknown as number) >= goalIDX) {
						return true;
					}
				}
			}
		}

		return false;
	}
}

export { CSKeycardService };

import AccessLevels from "shared/AccessLevels";

class CSKeycardService {
	/**
	 * hasPerms
	 * @param plr Player to check clearance on
	 * @param clearance Clearance to check
	 * @returns boolean
	 */
	public hasPerms(plr: Player, clearance: keyof typeof AccessLevels) {
		// right now this doesnt do anything but will later when proper roles are implemented
		// clearance is a string
		
		return true;
	}
}


export { CSKeycardService };

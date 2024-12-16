import AccessLevels from "shared/AccessLevels";

class I_CSKeycardService {
	/**
	 * hasPerms
	 */
	public hasPerms(plr: Player, clearance: keyof typeof AccessLevels) {
		// right now this doesnt do anything but will later when proper roles are implemented
		return true;
	}
}

const CSKeycardService = new I_CSKeycardService();

export { CSKeycardService };

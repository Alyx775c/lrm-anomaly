interface ReplicatedStorage extends Instance {
	Services: ModuleScript;
	Alyx: Folder & {
		IsAdmin: RemoteEvent;
		EmoteEvent: RemoteEvent;
		AccessLevels: ModuleScript;
		Services: ModuleScript & {
			AnimationHelper: ModuleScript;
			KeycardService: ModuleScript;
			ChatService: ModuleScript;
		};
		Variables: ModuleScript;
		DoorTypes: Folder & {
			BlastDoor: ModuleScript;
			Constants: ModuleScript;
		};
	};
	DoorTypes: Folder & {
		Docs: ModuleScript;
	};
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			["@rbxts"]: Folder & {
				types: Folder & {
					include: Folder & {
						generated: Folder;
					};
				};
				["compiler-types"]: Folder & {
					types: Folder;
				};
				services: ModuleScript;
			};
		};
	};
}

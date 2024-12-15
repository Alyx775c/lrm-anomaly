interface ReplicatedStorage extends Instance {
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			["@rbxts"]: Folder & {
				services: ModuleScript;
				["compiler-types"]: Folder & {
					types: Folder;
				};
				types: Folder & {
					include: Folder & {
						generated: Folder;
					};
				};
			};
		};
	};
	Alyx: Folder & {
		EmoteEvent: RemoteEvent;
		Events: ModuleScript;
		Services: Folder & {
			AnimationHelper: ModuleScript;
		};
	};
}

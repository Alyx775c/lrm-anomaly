interface ServerScriptService extends Instance {
	AlyxLuaImpl: Folder & {
		["CmdList.lua"]: ModuleScript;
		Admins: ModuleScript;
		["AdminCmds.lua"]: ModuleScript;
	};
	Alyx: Folder & {
		Events: Script;
		Commands: Script & {
			CmdList: ModuleScript;
			AdminCmds: ModuleScript;
		};
	};
}

import { Players, ServerScriptService } from "@rbxts/services";
import { CmdRecord, commands } from "./CmdList";
import adminCommands from "./AdminCmds";

let lList = require(ServerScriptService.AlyxLuaImpl["CmdList.lua"]) as CmdRecord;
let lAdminList = require(ServerScriptService.AlyxLuaImpl["AdminCmds.lua"]) as CmdRecord;

for (let [base, ext] of pairs(lList)) {
	commands[base] = ext;
}

let usrCommands: Record<string, CmdRecord> = {};

Players.PlayerAdded.Connect((plr: Player) => {
	usrCommands[plr.Name] = {};

	for (let [_, usr] of ipairs(require(script.FindFirstChild("Admins") as ModuleScript) as Array<string>)) {
		if (plr.Name === usr) {
			for (let [base, ext] of pairs(adminCommands)) {
				usrCommands[plr.Name][base] = ext;
			}

			for (let [base, ext] of pairs(lAdminList)) {
				usrCommands[plr.Name][base] = ext;
			}
		}
	}
	
	plr.Chatted.Connect((msg: string) => {
		let lwr = msg.lower();
		let args = lwr.split(" ");

		let tempCMD = commands;
		for (const [b, e] of pairs(usrCommands[plr.Name])) {
			tempCMD[b] = e;
		}

		for (let [base, ext] of pairs(commands)) {
			if (args[0] === base) {
				if (typeOf(ext) === "function") {
					(ext as (_: Player) => void)(plr);
				} else {
					for (let [post, func] of pairs(ext as Record<string, (_: Player) => void>)) {
						if (args[1] === post) func(plr);
					}
				}
			}
		}
	});
});

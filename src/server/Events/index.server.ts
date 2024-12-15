import { ReplicatedStorage } from "@rbxts/services";
import { Variables } from "shared/Variables";

let EmoteEvent = ReplicatedStorage.Alyx.EmoteEvent;

EmoteEvent.OnServerEvent.Connect((plr: Player) => {
	let animator = plr.Character?.FindFirstChild("Humanoid")?.FindFirstChild("Animator") as Animator;
	let hrp = plr.Character?.PrimaryPart;
	Variables.PlayersFrozen[plr.Name] = false;
	if (hrp) hrp.Anchored = false;

	for (let [_, anim] of ipairs(animator.GetPlayingAnimationTracks())) {
		anim.Stop();
	}
});

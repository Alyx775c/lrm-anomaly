import { Players } from "@rbxts/services";
import { PlayerVariable } from "shared/Variables";

Players.PlayerAdded.Connect((player) => {
    let vals = new Instance("Folder");
    vals.Name = "PlayerValues";
    vals.Parent = player;

    PlayerVariable(player, "DoorDebounce")
});
import { Players, RunService } from "@rbxts/services";
import { Variables } from "shared/Variables";

RunService.Heartbeat.Connect((dt: number) => {
    for (const player of Players.GetPlayers()) {
        if (Variables.DoorDebounce(player).read() <= 0) {
            Variables.DoorDebounce(player).write(0)
            return;
        };
        let deb = Variables.DoorDebounce(player)
        let val = deb.read();
        deb.write(val - dt)
    }
});

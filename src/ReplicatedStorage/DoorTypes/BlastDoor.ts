import AccessLevels from "ReplicatedStorage/AccessLevels";
import { DoorType } from "./Base";
import { LINEAR_TWEEN } from "./Constants";

const Door: DoorType = {
    AccessLevel: "Confidential",
    Offsets: {
        "DOORA": new CFrame(0, 0, 2.7),
        "DOORB": new CFrame(0, 0, -2.7)
    } as Record<string, CFrame>,
    Sounds: {
        Opening: "rbxassetid://4416840411",
        Denied: "rbxassetid://1464205581",
        Allowed: "rbxassetid://1464193038"
    },
    TweenDets: LINEAR_TWEEN(0.5)
}

export = Door;
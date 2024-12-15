import AccessLevels from "ReplicatedStorage/AccessLevels";

interface DoorType {
	AccessLevel: keyof typeof AccessLevels;
	Offsets: Record<string, CFrame>;
	Sounds: Sounds;
	TweenDets: TweenInfo | undefined;
}

type Sounds = {
	Opening: string;
	Denied: string;
	Allowed: string;
};

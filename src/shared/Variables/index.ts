const PlayerVariable = (plr: Player, name: string) => {
	let val = plr.FindFirstChild("PlayerValues")?.FindFirstChild(name) as NumberValue;
	if (!val) {
		val = new Instance("NumberValue");
		val.Name = name;
		val.Parent = plr.FindFirstChild("PlayerValues");
	}

	const read = () => {
		return val.Value;
	};
	const write = (value: number) => {
		val.Value = value;
	};

	return { read, write };
};

type Variables = {
	["PlayersFrozen"]: Record<string, boolean>;
	["DoorDebounce"]: SetRead<number>;
};

type SetRead<ValueType> = (plr: Player) => {
	read: () => ValueType;
	write: (value: ValueType) => void;
};

const C_Variables: Variables = {
	PlayersFrozen: {},
	DoorDebounce: (plr: Player) => ({
		read: () => {
			return PlayerVariable(plr, "DoorDebounce").read();
		},
		write: (value) => {
			return PlayerVariable(plr, "DoorDebounce").write(value);
		},
	}),
} as Variables;

export { PlayerVariable, C_Variables as Variables};

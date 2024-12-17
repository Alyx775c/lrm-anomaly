type SetRead<ValueType> = (plr: Player) => {
	read: () => ValueType;
	write: (value: ValueType) => void;
};

type Variables = {
	["PlayersFrozen"]: Record<string, boolean>;
	["DoorDebounce"]: SetRead<number>;
};


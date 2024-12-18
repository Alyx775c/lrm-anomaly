import AccessLevels from "shared/AccessLevels";
import BaseTool from ".";

interface Keycard extends BaseTool {
    AccessLevel: keyof typeof AccessLevels;
};

export = Keycard;
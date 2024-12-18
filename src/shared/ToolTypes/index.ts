enum Types {
    Keycard
}

interface BaseTool {
    _T: keyof typeof Types;
}

export = BaseTool;
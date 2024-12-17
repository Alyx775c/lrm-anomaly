import { CSAnimationHelper as I_CSAH } from "shared/Services/AnimationHelper";
import { CSKeycardService as I_CSKS } from "shared/Services/KeycardService";

let CSAnimationHelper = new I_CSAH();
let CSKeycardService = new I_CSKS();

export { CSKeycardService as KeycardService, CSAnimationHelper };

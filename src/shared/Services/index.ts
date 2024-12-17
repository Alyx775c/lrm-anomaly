import { CSAnimationHelper as I_CSAH } from "./AnimationHelper";
import { CSKeycardService as I_CSKS } from "./KeycardService";

let CSAnimationHelper = new I_CSAH();
let CSKeycardService = new I_CSKS();

export { CSKeycardService as KeycardService, CSAnimationHelper as AnimationService };

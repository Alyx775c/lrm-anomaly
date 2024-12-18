import { CSAnimationHelper as I_CSAH } from "./AnimationHelper";
import { CSKeycardService as I_CSKS } from "./KeycardService";
import { CSChatService as I_CSCS } from "./ChatService";

let CSAnimationHelper = new I_CSAH();
let CSKeycardService = new I_CSKS();
let CSChatService = new I_CSCS();

export { CSKeycardService as KeycardService, CSAnimationHelper as AnimationService, CSChatService as ChatService };

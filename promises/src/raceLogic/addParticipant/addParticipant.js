import constants from "../../constants/constants";
import { checkInputValue } from '../../helpers/checkInputValue';
import { checkObject } from '../../helpers/checkObject';
import { drawCircle } from '../../animation/drawCircle/drawCircle';

export function addParticipant(){
    const participant = {};
    participant.name = checkInputValue(constants.inputName);
    participant.mark = checkInputValue(constants.inputMark, true);
    participant.age = checkInputValue(constants.inputAge, true);
    participant.skills = checkInputValue(constants.inputSkills)
                        .split(",")
                        .map(item => item.trim());
    participant.english = checkInputValue(constants.inputEnglish);
    participant.x = 100;
    participant.y = 200 * constants.participants.length + 100;
    participant.r = 25;

    if(!checkObject(participant)){
        return false;
    }

    drawCircle(3000, participant.x, participant.y, participant.r, "green", participant.name);

    constants.participants.push(participant);
}
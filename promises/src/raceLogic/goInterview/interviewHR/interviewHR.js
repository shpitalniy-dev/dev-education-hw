import { generationNumber } from '../../../generateLogic/generationNumber/generationNumber';
import { drawCircle } from '../../../animation/drawCircle/drawCircle';
import { draw } from '../../../animation/drawCircle/drawCircle';

export function interviewHR(participant){
    return new Promise((resolve, reject) => {
        const delay = generationNumber(1000, 3000);
        const timer = drawCircle(delay, participant.x * 3, participant.y - 2 * participant.r, participant.r, "purple", "HR");
        setTimeout(() => {
            if(participant.age >= 21 && participant.age <= 27){
                console.log(participant.name + " passed HR interview");
                clearInterval(timer);
                draw(1, participant.x * 3, participant.y - 2 * participant.r, participant.r, "green", "HR");
                resolve(participant);
            }else{
                console.log(participant.name + " failed HR interview");
                clearInterval(timer);
                draw(1, participant.x * 3, participant.y - 2 * participant.r, participant.r, "red", "HR");
                // reject(`${participant.name} failed HR course`);
            }
        }, delay);
    })
}
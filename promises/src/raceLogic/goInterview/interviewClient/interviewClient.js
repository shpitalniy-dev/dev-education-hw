import { generationNumber } from '../../../generateLogic/generationNumber/generationNumber';
import { drawCircle } from '../../../animation/drawCircle/drawCircle';
import { draw } from '../../../animation/drawCircle/drawCircle';

export function interviewClient(participant){
    return new Promise((resolve, reject) => {
        const delay = generationNumber(5000, 10000);
        const timer = drawCircle(delay, participant.x * 3, participant.y + 2 * participant.r, participant.r, "purple", "Client");
        setTimeout(() => {
            if(participant.english === "B1" || participant.english === "B2" || participant.english === "C1" ){
                console.log(participant.name + " passed Client interview");
                clearInterval(timer);
                draw(1, participant.x * 3, participant.y + 2 * participant.r, participant.r, "green", "Client");
                resolve(participant);
            }else{
                console.log(participant.name + " failed Client interview");
                clearInterval(timer);
                draw(1, participant.x * 3, participant.y + 2 * participant.r, participant.r, "red", "Client");
                // reject(`${participant.name} failed Client course`);
            }
        }, delay);
    })
}
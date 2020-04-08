import { generationNumber } from '../../../generateLogic/generationNumber/generationNumber';
import { drawCircle } from '../../../animation/drawCircle/drawCircle';
import { draw } from '../../../animation/drawCircle/drawCircle';

export function interviewProject(participant){
    return new Promise((resolve, reject) => {
        const delay = generationNumber(10000, 20000);
        const timer = drawCircle(delay, participant.x * 3, participant.y, participant.r, "purple", "Project");
        setTimeout(() => {
            if(participant.skills.length > 1){
                console.log(participant.name + " passed Project interview");
                clearInterval(timer);
                draw(1, participant.x * 3, participant.y, participant.r, "green", "Project");
                resolve(participant);
            }else{
                console.log(participant.name + " failed Project interview");
                clearInterval(timer);
                draw(1, participant.x * 3, participant.y, participant.r, "red", "Project");
                // reject(`${participant.name} failed Project course`);
            }
        }, delay);
    })
}
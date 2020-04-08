import { generationNumber } from '../../generateLogic/generationNumber/generationNumber';
import { drawCircle } from '../../animation/drawCircle/drawCircle';
import { draw } from '../../animation/drawCircle/drawCircle';

export function goJSCourse(participant){
    return new Promise((resolve, reject) => {
        const delay = generationNumber(5000, 10000);
        const timer = drawCircle(delay, participant.x * 2, participant.y, participant.r, "purple", "JS Course");
        setTimeout(() => {
            if(participant.mark > 3){
                console.log(participant.name + " passed JS course");
                clearInterval(timer);
                draw(1, participant.x * 2, participant.y, participant.r, "green", "JS Course");
                resolve(participant);
            }else{
                console.log(participant.name + " failed JS course");
                clearInterval(timer);
                draw(1, participant.x * 2, participant.y, participant.r, "red", "JS Course");
                // reject(`${participant.name} failed JS course`)
            }
        }, delay);
    })
}
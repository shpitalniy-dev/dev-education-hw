import constants from "../../constants/constants";
import { goJSCourse } from '../goJSCourse/goJSCourse';
import { goInterview } from '../goInterview/goInterview';

export function startRace(){
    const promisesArray = [];
    for(let i = 0; i < constants.participants.length; i++){
        promisesArray.push(
            goJSCourse(constants.participants[i])
            .then(goInterview)
        )
    }
    Promise.race(promisesArray)
    .then(participant => alert(`WIN ${participant.name}`))
    .catch(error => console.log(error));
}
import { interviewHR } from "./interviewHR/interviewHR";
import { interviewProject } from './interviewProject/interviewProject';
import { interviewClient } from './interviewClient/interviewClient';

// export function goInterview(participant){
//     return Promise.all([
//         interviewHR(participant),   
//         interviewProject(participant),
//         interviewClient(participant)
//     ]).then(result => result[0]);
// }

export function goInterview(participant){
    return interviewHR(participant)
    .then(interviewProject)
    .then(interviewClient);
}
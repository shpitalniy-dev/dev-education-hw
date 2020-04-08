import { generationNumber } from '../generationNumber/generationNumber';

export function generationSkills(){
    const arrSkills = ["JS", "React", "WordPress"];
    const num = generationNumber(0, arrSkills.length - 1);
    return arrSkills.slice(0, num + 1);
}
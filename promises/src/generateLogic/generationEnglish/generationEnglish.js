import { generationNumber } from '../generationNumber/generationNumber';

export function generationEnglish(){
    const arrEnglish = ["A0", "A1", "A2", "B1", "B2", "C1"];
    const num = generationNumber(0, arrEnglish.length - 1);
    return arrEnglish[num];
}
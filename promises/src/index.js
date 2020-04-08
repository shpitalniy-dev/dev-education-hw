import './styles/style.less';
import { generationName } from './generateLogic/generationName/generateName';
import { generationNumber } from './generateLogic/generationNumber/generationNumber';
import { generationSkills } from './generateLogic/generationSkills/generationSkills';
import { generationEnglish } from './generateLogic/generationEnglish/generationEnglish';
import { generationAll } from './generateLogic/generationAll/generationAll';
import { addParticipant } from './raceLogic/addParticipant/addParticipant';
import { showParticipants } from "./raceLogic/showParticipants/showParticipants";
import { startRace } from './raceLogic/startRace/startRace';
import { clearParticipants } from './raceLogic/clearParticipants/clearParticipants';
import constants from './constants/constants';

window.onload = function(){
    constants.btnGenerateName.onclick = () => generationName().then(data => constants.inputName.value = data);
    constants.btnGenerateMark.onclick = () => constants.inputMark.value = generationNumber(1,5);
    constants.btnGenerateAge.onclick = () => constants.inputAge.value = generationNumber(18,35);
    constants.btnGenerateSkills.onclick = () => constants.inputSkills.value = generationSkills().toString();
    constants.btnGenerateEnglish.onclick = () => constants.inputEnglish.value = generationEnglish();
    constants.btnGenerateAll.onclick = generationAll;
    constants.btnAddParticipant.onclick = addParticipant;
    constants.btnShowParticipants.onclick = showParticipants;
    constants.btnStartRace.onclick = startRace;
    constants.btnClearParticipants.onclick = clearParticipants;
    constants.canvas.width = constants.canvas.parentElement.clientWidth;
    constants.canvas.height = constants.canvas.parentElement.clientHeight;
}



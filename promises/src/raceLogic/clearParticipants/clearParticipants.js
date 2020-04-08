import constants from '../../constants/constants';

export function clearParticipants(){
    constants.participants.length = 0;
    constants.ctx.clearRect(0, 0, constants.canvas.width, constants.canvas.height);
}
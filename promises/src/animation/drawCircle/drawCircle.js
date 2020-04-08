import constants from '../../constants/constants';

// export function drawCircle(duration, x, y, r, color, text){
//     const start = performance.now();

//     requestAnimationFrame(function animate(time){
//         let progress = (time - start)/duration;
//         if(progress > 1) progress = 1;

//         draw(progress, x, y, r, color, text);

//         if(progress < 1){
//             requestAnimationFrame(animate);
//         }
//     })
// }

export function drawCircle(duration, x, y, r, color, text){
    const start = performance.now();
    let progress;

    const timer = setInterval(() => {
        if(progress > 1){
            clearInterval(timer);
            return;
        }
        let now = performance.now();
        progress = (now - start)/duration;
        draw(progress, x, y, r, color, text);
    }, 10);
    return timer;
}

export function draw(progress, x, y, r, color, text = false){
    constants.ctx.clearRect(x - r - 1, y - r - 1, 2 * (r + 1), 2 * (r + 1));

    let current = progress * 2 * Math.PI;
    constants.ctx.beginPath();
    constants.ctx.arc(x, y, r, 0, current);
    constants.ctx.strokeStyle = color;
    constants.ctx.stroke();
    if(text) constants.ctx.fillText(text, x - r, y);
    constants.ctx.closePath();
}
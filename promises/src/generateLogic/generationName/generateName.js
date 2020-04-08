import constants from '../../constants/constants';

export async function generationName(input){
    return await fetch(constants.userUrl)
    .then(response => response.json())
    .then(result => result.results[0].name.first)
    .catch(error => console.log(error));
}
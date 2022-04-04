var sum = 0;
function addThree() {
    sum = sum + 3;
    console.log(sum)

}
addThree();

function addFive() {
    sum= sum + 5;
    console.log(sum)

}
addFive();

module.exports = {

    addThree,
    addFive

};
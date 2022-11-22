const workouts = [
    ['Arms', 'Easy'],
    ['Arms', 'Medium'],
    ['Arms', 'Hard'],
    ['Chest', 'Easy'],
    ['Chest', 'Medium'],
    ['Chest', 'Hard'],
    ['Back', 'Easy'],
    ['Back', 'Medium'],
    ['Back', 'Hard'],
]

function getWorkout() {
randBodyPart = Math.floor(Math.random() * workouts.length)
randWorkOut = Math.floor(Math.random() * workouts.length)

console.log('Your workout today is: ' + workouts[randBodyPart][0] + '. It will be a(n) ' + workouts[randWorkOut][1] + ' workout.')
document.getElementById("workout").innerHTML = 'Your workout today is: ' + workouts[randBodyPart][0] + '. It will be a(n) ' + workouts[randWorkOut][1] + ' workout.'
}

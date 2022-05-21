const MissionComander =  require('../my_launchx_app/app/missionComander')

const Carlo  = new MissionComander("Carlo");
const GitCarlo = new MissionComander ("carlogilmar")
const specialist  = new MissionComander("Software Developer and Digital Artist")
console.log(Carlo.name) 
console.log(GitCarlo.name)
console.log(specialist.name)
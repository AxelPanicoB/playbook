/* -------------------------- PullRequest --------------------------------- */

const PullRequest = {

        tittle : "Dudas ejercicios de la semna 2",
        branchName:"ejemplos",
        dateCreated:new Date('04/15/2022'),
        status: "Verified",
        repositoryNameAssociated:"MissionNodeJS",

        get getStatus() {
        return `This Pull Request is ${this.status}`
        },

        get getTitleAndAutor(){
            return `The tittle of pull request is ${this.tittle} and the name the autor is ${autor =  "Axel Panico"}`
        }

}

console.log (PullRequest.getStatus)
console.log (PullRequest.getTitleAndAutor) 
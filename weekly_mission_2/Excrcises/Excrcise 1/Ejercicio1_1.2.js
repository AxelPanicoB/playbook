/* -------------------------- Issue -------------------------------------- */

const Issue = {
 title: "05 Live 2 Semana 2 [Miércoles 13 de Abril] #39",
 repositoryNameAssociated: "Semana 2",
 status: "Open",
 numberOfComents: "57",
 labels: ["Finalizado", "Live 2","Semana-2"],
 author: "CarloGilmar",
 dateCreated: new Date('04/12/2022'),
 lastUpdated: new Date('04/14/2022'), 

 get getTitleAndAuthor(){
     return  this.author
 },

 get getGeneralInfo(){
     return Issue
 } 
}

console.log("Autor:", Issue.getTitleAndAuthor)
console.log("Informacion general:", Issue.getGeneralInfo)

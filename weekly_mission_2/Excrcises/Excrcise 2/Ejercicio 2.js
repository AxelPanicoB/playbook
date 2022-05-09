const { extractIdentifiers } = require("@vue/compiler-core")

const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
   console.log("***************************** 1 **********************")
//Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
explorers.forEach(names => console.log(names.name))

console.log("****************************** 2 *********************")
//Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach(stck => console.log(stck.stack))
console.log("****************************** 3 *********************")
//Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const explorerStacks = explorers.map(list => list.stack)
console.log(explorerStacks)
console.log("******************************* 4 ********************")
/*Obtén la lista de explorers que tengan en su stack "js", usa FILTER
 (para validar un elemento en un lista se usa el método includes)*/
const explorJs = explorers.filter(explorersList => explorersList.stack.includes("js"))
console.log(explorJs)
console.log("****************************** 5 *********************")
/*Busca el primer explorer que sea de la CDMX, usa FIND */
const explorersCDMX = explorers.find(explorersCiudad => explorersCiudad.city==="CDMX")
console.log(explorersCDMX)
console.log("****************************** 6 *********************")
/*Obtén la suma de todos los exercises_completed, usa REDUCE */
const allEcercises = explorers.reduce((acc, excercises) => acc + excercises.exercises_completed, 0)
console.log(allEcercises)

console.log("****************************** 7 *********************")
/*Obtén la validación si al menos uno de los explorers tiene la propiedad 
exercisesFinished en frontend como true, usa SOME */

const FrontEnd = explorers.some(frontendtrue => frontendtrue.missions.frontend.exercisesFinished)
console.log(FrontEnd)

console.log("****************************** 8 *********************")
/*Obtén la validación si todos los explorers tienen la propiedad isFinished del 
onboarding como true. Usa EVERY.
 */
const onboarding =  explorers.every(onboardingEvery => onboardingEvery.missions.onboarding.exercisesFinished)
console.log(onboarding)
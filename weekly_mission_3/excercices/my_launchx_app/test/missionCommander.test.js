const MissionComander =  require ("../app/missionComander");


describe("Unit Tsts for Mission Commander Class",() =>{
  test('1) Create a mission commander object', () =>{
    const myMissiopnCommander =  new MissionComander("Woopa")
    expect(myMissiopnCommander.name).toBe("Wuupa")
  })
})

describe("Esto es una suite de pruebas", () => {
    test('Caso de prueba 1', () => {
      const result = 1 + 2 
      expect(result).toBe(3);
    });
  })
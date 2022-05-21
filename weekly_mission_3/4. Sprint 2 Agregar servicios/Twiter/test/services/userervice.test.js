const { onUpdated } = require("vue")
const User = require("../../app/models/user")
const UserService = require("../../app/services/userService")

describe("Test for UserService", () =>{
    test("1. Create a new using the UserService", () =>{
        const user = UserService.create(
            1,
            "AxelPanicoB",
            "Axel",
        )

        expect(user.username).toBe("AxelPanicoB")
        expect(user.name).toBe("Axel")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()

    })

    test("2. Get all user data in a list", () =>{
        const user = UserService.create(
            1,
            "AxelPanicoB",
            "Axel",)
        const UserInfoInList = UserService.getInfo(user)
        expect(UserInfoInList[0]).toBe(1)
        expect(UserInfoInList[1]).toBe("AxelPanicoB")
        expect(UserInfoInList[2]).toBe("Axel")
        expect(UserInfoInList[3]).toBe("Sin bio")
    })

    test("3. Update username", () =>{
        const user = UserService.create(
            1,
            "AxelPanicoB",
            "Axel",)
            UserService.updateUserUsername(user,"AxelP")
            expect(user.username).toBe("AxelP")
    })

    test("4. Given a list of users give me the list of username",()=>{
        const user1 = UserService.create(1,"AxelPanicoB1","Axel")
        const user2 = UserService.create(2,"AxelPanicoB2","Axel")
        const user3 = UserService.create(3,"AxelPanicoB3","Axel")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("AxelPanicoB1")
        expect(usernames).toContain("AxelPanicoB1")
        expect(usernames).toContain("AxelPanicoB1")

        })

})
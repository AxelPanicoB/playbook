const User =  require('./../../app/models/user');

describe("Unit Test for Users Class", ()=>{
    test('1Crate an Uase Object', () =>{
        const user = new User (
            1,
            "AxelPanicoB",
            "Axel", 
            "Bio");
        expect(user.id).toBe(1);
        expect(user.username).toBe("AxelPanicoB");
        expect(user.name).toBe("Axel");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    });

    test('Add getters', () =>{
        const user = new User( 1,
            "AxelPanicoB",
            "Axel", 
            "Bio");

        expect(user.username).toBe("AxelPanicoB");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    });

    test('Add etters', () => {
        const user = new User(
            1,
            "AxelPanicoB",
            "Axel",
            "Bio"
            );
            user.setUsername= "Panico";
            expect(user.username).toBe("Panico");

            user.setBio="New Bio";
            expect(user.bio).toBe("New Bio");
    });
});
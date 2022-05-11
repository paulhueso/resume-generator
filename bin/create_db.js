var db = connect('127.0.0.1:27017/resume-generator'), users = null;
db.dropDatabase();

print('Database created');

db.users.insertMany([
{
    firstname: 'Paul',
    surname : 'Hueso',
    address : '5 rue Gustave Crauk',
    mail : 'paul.hueso@gmail.com',
    password : '$2b$10$bhjCePLtv9EWQByP8adl8edGREqYZ2SL/mZIHTv7IoHXO/NyO5l3G',
    tel : "0603861269",
    cv_list : [ObjectId("111111111111111111111111"),ObjectId("111111111111111111111112")],
    current_organization: "Super Organisation"
},
{
    firstname : 'Achille',
    surname : 'Magnin',
    address : '5 rue du viking',
    mail : 'achille@gmail.com',
    password : 'admin',
    tel : "0603861269",
    cv_list : []
}
]);
print("User 'Achille' and 'Paul' created");

db.cvs.insertMany([
{
    _id: ObjectId("111111111111111111111111"),
    title: 'CV n°2 de Paul',
    type: false,
    experiences : [
        {
            title : "Stage developpeur fullstack - Unlatch",
            period : "Aout 2021 - Janvier 2022",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
            title : "Stage developpeur fullstack - Deuxieme",
            period : "Aout 2021 - Janvier 2022",
            description : ""
        }
    ],
    formations : [
        {
            name : "ICY - INSA HdF",
            period: "2020-2023",
            description : "super experience, je recommande, +1 pour l\"organisation"
        },
        {
            name : "Prepa integree - Polytech Sorbonne",
            period: "2018-2020",
            description : "J\"y ai appris beaucoup de choses"
        }
        
    ]
},
{
    _id: ObjectId("111111111111111111111112"),
    title: 'CV n°1 de Paul',
    type: true,
    experiences : [
        {
            title : "Stage developpeur fullstack - Unlatch",
            period : "Aout 2021 - Janvier 2022",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
            title : "Stage developpeur fullstack - Deuxieme",
            period : "Aout 2021 - Janvier 2022",
            description : ""
        }
    ],
    formations : [
        {
            name : "ICY - INSA HdF",
            period: "2020-2023",
            description : "super experience, je recommande, +1 pour l\"organisation"
        },
        {
            name : "Prepa integree - Polytech Sorbonne",
            period: "2018-2020",
            description : "J\"y ai appris beaucoup de choses"
        }
        
    ]
}
])

print("Paul's resume created");

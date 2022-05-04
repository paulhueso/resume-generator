var db = connect('127.0.0.1:27017/data'), users = null;
db.dropDatabase();

print("Database created");

db.users.insert({
    'firstname': 'Paul',
    'surname' : 'Hueso',
    'address' : '5 rue Gustave Crauk',
    'mail' : 'paul.hueso@gmail.com',
    'password' : '123456',
    'tel' : "0603861269",
    'cv_list' : [
        {
            'experiences' : [
                {
                    'organization' : 'Unlatch',
                    'title' : 'Stage developpeur fullstack',
                    'from' : 'Aout 2021',
                    'to' : 'Janvier 2022',
                    'description' : ''
                }
            ],
            'formations' : [
                {
                    'school' : 'Polytech Sorbonne',
                    'name' : 'Prepa integree',
                    'from' : '2018',
                    'to' : '2020',
                    'description' : 'J\'y ai appris beaucoup de choses'
                },
                {
                    'school' : 'INSA HdF',
                    'name' : 'ICY',
                    'from' : '2020',
                    'to' : '2023',
                    'description' : 'super experience, je recommande, +1 pour l\'organisation'
                }
            ]
        }
    ]
});

db.users.insert({
    'firstname': 'Achille',
    'surname' : 'Magnin',
    'address' : '5 rue du viking',
    'mail' : 'achille@gmail.com',
    'password' : 'admin',
    'tel' : "0603861269",
    'cv_list' : [
        {
            'experiences' : [
                {
                    'organization' : 'Unlatch',
                    'title' : 'Stage developpeur fullstack',
                    'from' : 'Aout 2021',
                    'to' : 'Janvier 2022',
                    'description' : ''
                }
            ],
            'formations' : [
                {
                    'school' : 'Polytech Sorbonne',
                    'name' : 'Prepa integree',
                    'from' : '2018',
                    'to' : '2020',
                    'description' : 'J\'y ai appris beaucoup de choses'
                },
                {
                    'school' : 'INSA HdF',
                    'name' : 'ICY',
                    'from' : '2020',
                    'to' : '2023',
                    'description' : 'super experience, je recommande, +1 pour l\'organisation'
                }
            ]
        }
    ]
});

print("User created");

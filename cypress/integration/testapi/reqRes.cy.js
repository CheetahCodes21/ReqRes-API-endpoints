// For List of Users
describe('Test suite for List of Users', () => {
    it('List users', () => {
        cy.request({
            method:'GET',
            url:"https://reqres.in/api/users/2",
        }).then(Response =>{
            expect(Response.status).to.eq(200);
        })
    });
});

// For Single User
describe('Test suite for Single User', () => {
    it('Single user', () => {
        cy.request({
            method:'GET',
            url:"https://reqres.in/api/users/2"
        }).then(Response =>{
            expect(Response.status).to.eq(200);

        })
    });
});

// For Single User Not Found
describe('Test suite for user not found', () => {
    it('Single user not found', () => {
        cy.request({
            method:'GET',
            url:"https://reqres.in/api/users/29",
            failOnStatusCode: false
        }).then(Response =>{
            expect(Response.status).to.eq(404);
            expect(Response.body).to.be.empty; 
        })
    });
});

// For List of Resources
describe('Test suite for list of resources', () => {
    it('List Resources', () => {
        cy.request({
            method:'GET',
            url:"https://reqres.in/api/unknown",
        }).then(Response =>{
            expect(Response.status).to.eq(200);
        })
    });
});

//For Single Resource
describe('Test suite for single resource', () => {
    it('Single Resource', () => {
        cy.request({
            method:'GET',
            url:"https://reqres.in/api/unknown/2"
        }).then((Response) => {
            expect(Response.status).to.eq(200);
        });
    });
});

//  For Single Resource Not Found
describe('Test suite for Single Resource Not Found', () => {
    it('Single Resource Not Found', () => {
        cy.request({
            method:'GET',
            url:"https://reqres.in/api/users/23",
            failOnStatusCode: false
        }).then(Response =>{
            expect(Response.status).to.eq(404);
            expect(Response.body).to.be.empty; 
        })
    });
});

// For Create User
describe('Test suite for create User', () => {
    it('Create User', () => {
        
        cy.request({
            method:'POST',
            url:"https://reqres.in/api/users",
            body: {
                "name": "morpheus",
                "job": "leader",
            }
    }).then(Response => {
        expect(Response.status).to.eq(201);
    })
    });
});

// For Updating User
describe('Test suite for Collection of update User', () => {
    it('Update User', () => {

        cy.request({
            method:'PUT',
            url:"https://reqres.in/api/users/2",
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(Response => {
            expect(Response.status).to.eq(200);
        })
    });
});

//Update User 2nd approach
describe('Test suite for updating user', () => {
    it('Update User', () => {

        cy.request({
            method:'PATCH',
            url:"https://reqres.in/api/users/2",
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(Response => {
            expect(Response.status).to.eq(200);
        })
    });
});

// For deleting User
describe('Test suite for delete User', () => {
    it('delete user', () => {
        cy.request({
            method:'DELETE',
            url:"https://reqres.in/api/users/2"
        }).then(Response =>{
            expect(Response.status).to.eq(204)
        })
    });
});

//Register successful
describe('Test suite for success register', () => {
    it('Register-Successful', () => {
        cy.request({
            method: 'POST',
            url: "https://reqres.in/api/register",
            body: {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('token');
            
            expect(response.body.id).to.eq(4);
            expect(response.body.token).to.eq('QpwL5tke4Pnpja7X4');
        });
    });
});

// For unsuccess register
describe('Test suite for unsuccess register', () => {
    it('Register-Unsuccessful', () => {
        cy.request({
            method: 'POST',
            url: "https://reqres.in/api/register",
            body: {
                "email": "sydney@fife"
            },
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.status).to.eq(400);
            
            expect(response.body).to.have.property('error');
            expect(response.body.error).to.eq('Missing password');
        });
    });
});

// login success
describe('Test suite for success login', () => {
    it('Login-Successful', () => {
        cy.request({
            method: 'POST',
            url: "https://reqres.in/api/login",
            body: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            
            expect(response.body).to.have.property('token');
            expect(response.body.token).to.eq('QpwL5tke4Pnpja7X4');
        });
    });
});
// For unsuccess login
describe('Test suite for unsuccess login', () => {
    it('Login-Unsuccessful', () => {
        cy.request({
            method: 'POST',
            url: "https://reqres.in/api/login",
            body: {
                "email": "peter@klaven"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
            
            expect(response.body).to.have.property('error');
            expect(response.body.error).to.eq('Missing password');
        });
    });
});

// For delayed response
describe('Test suite for delayed response', () => {
    it('Delayed Response', () => {
        const startTime = new Date().getTime();

        cy.request({
            method: 'GET',
            url: "https://reqres.in/api/users?delay=3"
        }).then((response) => {
            expect(response.status).to.eq(200);
            
            const elapsedTime = new Date().getTime() - startTime;
            expect(elapsedTime).to.be.greaterThan(3000); 
            expect(response.body.data).to.be.an('array');
            
            response.body.data.forEach(user => {
                expect(user).to.have.property('id');
                expect(user).to.have.property('email');
                expect(user).to.have.property('first_name');
                expect(user).to.have.property('last_name');
                expect(user).to.have.property('avatar');
            });
        });
    });
});

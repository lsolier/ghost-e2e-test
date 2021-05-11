const loginUrl = "http://localhost:2368/ghost/#/signin";
const appName = "App Ghost";

describe( `${appName} under e2e testing`, function() {
    it(`visits ${appName} to create post and publish it`, function() {
        cy.log("🚩 Iniciando sesion");
        cy.visit(loginUrl);
        cy.get('input[placeholder="Email Address"]').type('l.solier@uniandes.edu.co');
        cy.get('input[placeholder="Password"]').type('Lui$$olier15');
        cy.contains('Sign in').click();

        cy.location({ timeout: 15000 }).should((loc) => {
            expect(loc.href).to.include('/site')
        });
        cy.log("🚩 Seleccionando opcion Posts");
        cy.contains('Posts').click({force: true});

        cy.location({ timeout: 15000 }).should((loc) => {
            expect(loc.href).to.include('/posts')
        });
        cy.log("🚩 Seleccionando opcion para crear nuevo post");
        cy.contains('New post').click({force: true});
        
        cy.location({ timeout: 15000 }).should((loc) => {
            expect(loc.href).to.include('/editor/post')
        });
        cy.log("🚩 Ingresando titulo y descripcion");
        cy.get('textarea[placeholder="Post Title"]').type('Mi primer Post desde Cypress');
        cy.get('div[data-placeholder="Begin writing your post..."][contenteditable]').click();

        cy.location({ timeout: 15000 }).should((loc) => {
            expect(loc.href).to.include('/editor/post')
        });
        cy.get('div[data-placeholder="Begin writing your post..."][contenteditable]').type('Descripcion corta', { force: true });
        
        cy.location({ timeout: 15000 }).should((loc) => {
            expect(loc.href).to.include('/editor/post')
        });

        cy.log("🚩 Publicando post");
        cy.contains('div[role=button]','Publish').click({force: true});
        cy.wait(2000);
        cy.contains('button','Publish').click({force: true});
        cy.wait(2000);
    })
    
    afterEach(()=>{
        cy.task('logEnd')
    })
});
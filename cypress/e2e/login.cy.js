describe('Автотесты на форму логина', function () {
   it('верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })
   it('забыли пароль, ввести любой имейл', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('max@lonkin.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })
   it('верный логин, не верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('qtgsgsysys7');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })
   it('не верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('max@lonkin.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })
   it('логин без @, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
   })
   it('проверку на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        
   })
})
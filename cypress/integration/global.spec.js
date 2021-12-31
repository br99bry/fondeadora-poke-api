'use strict'

describe('Flujo de usabilidad', () => {

  it('Debe cargar el home Pokemon', () => {
    cy.visit('/');
  })

  it('Elegir una generación y luego regresar al home', ()=>{
    cy.visit('/');
    cy.get(':nth-child(1) > .sc-bdvvtL').click();
    cy.get('a').click();
    cy.get('.sc-hKwDye').should('be.visible');
  })

  it('Elegir una generación, elegir un pokemon y confirmar elección', ()=>{
    cy.visit('/');
    cy.get(':nth-child(1) > .sc-bdvvtL').click();
    cy.get('.sc-egiyK > :nth-child(1) > .sc-jrQzAO').click();
    cy.get('.sc-pVTFL > :nth-child(2)').click();
    cy.get('.sc-fotOHu').should('be.visible');
  })

  it('Elegir una generación, elegir un pokemon y cancelar elección para al final elegir otro y confirmar su elección', ()=>{
    cy.visit('/');
    cy.get(':nth-child(1) > .sc-bdvvtL').click();
    cy.get('.sc-egiyK > :nth-child(1) > .sc-jrQzAO').click();
    cy.get('.sc-pVTFL > :nth-child(3)').click();
    cy.get(':nth-child(2) > .sc-jrQzAO').click();
    cy.get('.sc-pVTFL > :nth-child(2)').click();
    cy.get('.sc-fotOHu').should('be.visible');
  })

  it('Elegir una generación, volver al home para elegir otra generación y luego confirmar la seleccion de un pokemon', () => {
    cy.visit('/');
    cy.get(':nth-child(1) > .sc-bdvvtL').click();
    cy.get('a').click();
    cy.get(':nth-child(2) > .sc-bdvvtL').click();
    cy.get('.sc-egiyK > :nth-child(1) > .sc-jrQzAO').click();
    cy.get('.sc-pVTFL > :nth-child(2)').click();
    cy.get('.sc-fotOHu').should('be.visible').and('contain','Haz elegido a');
  });

})
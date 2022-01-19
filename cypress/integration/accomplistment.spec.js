/// <reference types="cypress" />

describe("Accomplishment dashboard",()=> {
    beforeEach( () => {
          cy.visit("/accomplishments")
    })

    it("should show case error if info is missing",()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("Lai La em day hihi")
        cy.get("[data-cy='accomplishment-input']").type("Lai La em day")
        cy.contains("Submit Accomplishment").click()
        cy.contains("Complete the items above to continue").should("be.visible")

    })

    it("should display validation component if all info is i input",()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("Lai La em day")
        cy.get("[data-cy='accomplishment-input']").type("Lai La em day")
        cy.get("[type='checkbox']").click()
        cy.contains("Submit Accomplishment").click()
        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")
    })

    it("should return back to accomplish dasboard with empty inputs when 'Go back' btn is clicked",()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("Lai La em day")
        cy.get("[data-cy='accomplishment-input']").type("Lai La em day")
        cy.get("[type='checkbox']").click()
        cy.contains("Submit Accomplishment").click()
        cy.contains("Go Back").click()
        cy.contains("h2","Accomplishment").should("be.visible")
        cy.get("[data-cy='accomplishment-title-input']").should("have.value","")
        cy.get("[data-cy='accomplishment-input']").should("have.value","")
        cy.get("[type='checkbox']").should("not.be.checked")

    })
})  
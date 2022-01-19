/// <reference types="cypress" />

describe("habit dashboard",()=> {
    beforeEach( () => {
          cy.visit("/habits")
    })

    it("should display modal when add button is clicked",()=>{
        cy.contains("button","Add").click()
        cy.contains("Add a new habit").should("be.visible")
    })

    it("should display habit card when new habit is added",()=>{
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']").type("Hello 4 nha")
        cy.contains("Save Changes").click()
        cy.contains("Hello 4 nha")
        .should("be.visible")
        .and("have.class","HabitCard__habit-container")
    })

    it("should change icon when habit card is clicked",()=>{
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']").type("Hello 4 nha")
        cy.contains("Save Changes").click()
        cy.get("[src='/static/media/close.fa7e5ead.svg']").should("be.visible")
        cy.contains("Hello 4 nha").click()
        cy.get("[src='/static/media/check.9e8832df.svg']").should("be.visible")

    })
})
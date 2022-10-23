import elements from '../support/test-data';

const visitHomePage = () => {
  cy.visit('/')
  cy.findByText(elements.cookiePolicy.acceptText).click();
}

beforeEach(() => {
  visitHomePage()
})

describe('As an actor, I want to navigate to the vision page from the navigation bar', () => {
  it('should navigate user to vision page from nav header', () => {
    cy.get(elements.navBar.navId).get(elements.navBar.linkClass)
      .filter(`:contains("${elements.navBar.visionText}")`).click();
    cy.findByText(elements.visionPage.headingText).should('be.visible');
  })
})
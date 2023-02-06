describe('Home page tests', () => {
  it('pagination with real data', () => {
    cy.intercept('https://api.punkapi.com/v2/beers?page=1&per_page=25').as('request');

    cy.visit('/');
    cy.wait('@request');

    cy.get('h1').should('have.text', 'Beer Wiki');
    cy.get('h2').should('have.text', 'List of Beers');

    cy.get('ul li').should('have.length', 25);

    // check first element is first beer
    cy.get('ul li')
      .first()
      .within(() => {
        cy.get('a').should('have.attr', 'href', '/beers/1');
      });

    cy.get('nav[aria-label="Pagination"]').within(() => {
      cy.get('button').contains(2).click();
    });

    cy.url().should('contain', '?page=2');

    // if first element has another link than previous, pagination works
    cy.get('ul li')
      .first()
      .within(() => {
        cy.get('a').should('not.have.attr', 'href', '/beers/1');
      });

    cy.get('ul li').should('have.length', 25);

    cy.get('nav[aria-label="Pagination"]').within(() => {
      cy.get('button').contains(3).click();
    });

    cy.url().should('contain', '?page=3');

    cy.get('ul li').should('have.length', 25);

    cy.get('nav[aria-label="Pagination"]').within(() => {
      cy.get('button').contains(4).click();
    });

    cy.get('ul li').should('have.length', 25);

    cy.url().should('contain', '?page=4');
  });

  it('empty list message when no beers', () => {
    cy.intercept('https://api.punkapi.com/v2/beers?page=1&per_page=25', {
      fixture: 'emptyBeersResponse.json',
    });

    cy.visit('/');

    cy.get('ul li').should('not.exist');

    cy.contains('There are no beers to display');
  });

  it('error message when response has error', () => {
    cy.intercept('https://api.punkapi.com/v2/beers?page=1&per_page=25', {
      statusCode: 500,
    });

    cy.visit('/');

    cy.get('ul li').should('not.exist');

    cy.contains('Something went wrong, please try again later');
  });
});

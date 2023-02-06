describe('Beer details page tests', () => {
  it('check page with mocked data', () => {
    cy.intercept('https://api.punkapi.com/v2/beers/1', { fixture: 'beer.json' }).as('beerRequest');

    cy.visit('/');

    cy.get('h1').should('have.text', 'Beer Wiki');
    cy.get('h2').should('have.text', 'List of Beers');

    cy.get('ul li').should('have.length', 25);

    // check first element is first beer
    cy.get('ul li')
      .first()
      .within(() => {
        cy.get('a').should('have.attr', 'href', '/beers/1').click();
      });

    cy.get('header').within(() => {
      cy.get('h2').should('have.text', 'Fake Lager');
      cy.get('p').should(
        'have.text',
        'Fake is the new black. Fake is where it is at. Fake Art, fake brands, fake breasts, and fake lager. We want to play our part in the ugly fallout from the Lager Dream. Say hello to Fake Lager – a zesty, floral 21st century faux masterpiece with added BrewDog bitterness.',
      );
      cy.contains('IBU: 40');
      cy.contains('ABV: 4.7');
      cy.contains('Bohemian Pilsner.');
    });

    cy.get('img').should('have.attr', 'src', 'https://images.punkapi.com/v2/8.png');

    cy.get('h3').contains('Food Pairing');
    cy.get('ol').within(() => {
      cy.contains('Fried crab cakes with avocado salsa');
      cy.contains('Spicy shredded pork roll with hot dipping sauce');
      cy.contains('Key lime pie');
    });

    cy.get('h4').contains('Author: samjbmason');

    cy.get('button').contains('Back').click();

    cy.url().should('equal', Cypress.config().baseUrl + '/');
  });

  it('error when fetching beer', () => {
    cy.intercept('https://api.punkapi.com/v2/beers/1', { statusCode: 500, body: {} }).as(
      'beerRequest',
    );

    cy.visit('/');

    cy.get('ul li')
      .first()
      .within(() => {
        cy.get('a').should('have.attr', 'href', '/beers/1').click();
      });

    cy.contains('Something went wrong, please try again later');
  });
});

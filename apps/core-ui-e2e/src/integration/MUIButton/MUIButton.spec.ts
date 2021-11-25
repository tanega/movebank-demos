describe('core-ui: MUIButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=muibutton--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to MUIButton!');
    });
});

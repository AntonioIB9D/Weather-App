import NavbarUI from '../../src/components/Navbar';
import Formulario from '../../src/components/Formulario';

describe('Navbar.cy.jsx', () => {
  it('Click button navbar', () => {
    cy.mount(<NavbarUI />);
    cy.get('.button-navbar').click();
  });
});

describe(`App Running Test`, () => {
  it("passes", () => {
    cy.visit(`http://localhost:3000/login`);
    cy.location(`pathname`).should(`include`, `/login`);

    cy.visit(`http://localhost:3000/signup`);
    cy.location(`pathname`).should(`include`, `/signup`); 
  });
});

describe(`Login Test`, () => {
  it(`passes`, () => {
    cy.visit(`http://localhost:3000/login`);

    cy.get(`input[name=username]`).type("sabrinas");
    cy.get(`input[name=password]`).type(`@@@@no`).type(`{enter}`);

    cy.location(`pathname`).should(`not.include`, `/login`);
  });
});
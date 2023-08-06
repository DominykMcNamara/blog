

describe("creating a user", () => {
  beforeEach(() => {
    cy.task("resetDB");
    cy.task("seedDB");
  });
  it("will return an error if the username is already stored in the database", () => {
    cy.request({
      method: "POST",
      url: "/api/signup",
      failOnStatusCode: false,
      body: {
        firstName: "Maple",
        lastName: "McNamara",
        username: "Dom",
        password: "Maple",
        email: "maple@maple.com",
      },
    }).then((response) => {
      expect(response.status).to.eq(409);
      expect(response.body).to.have.property(
        "message",
        "Username already exists"
      );
    });
  });
  it("will return an error if the email is already stored in the database", () => {
    cy.request({
      method: "POST",
      url: "/api/signup",
      failOnStatusCode: false,
      body: {
        firstName: "Maple",
        lastName: "McNamara",
        username: "Maple",
        password: "mmc",
        email: "dom@dom.com",
      },
    }).then((response) => {
      expect(response.status).to.eq(409);
      expect(response.body).to.have.property("message", "Email already in use");
    });
  });
  it("Will throw an error if a the firstName is missing", () => {
    cy.request({
      method: "POST",
      url: "/api/signup",
      failOnStatusCode: false,
      body: {
        firstName: "",
        lastName: "McNamara",
        username: "Maple",
        password: "mmc",
        email: "maple@maple.com",
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property(
        "message",
        "Required data is missing"
      );
    });
  });
  it("Will throw an error if a the lastName is missing", () => {
    cy.request({
      method: "POST",
      url: "/api/signup",
      failOnStatusCode: false,
      body: {
        firstName: "Maple",
        lastName: "",
        username: "Maple",
        password: "mmc",
        email: "maple@maple.com",
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property(
        "message",
        "Required data is missing"
      );
    });
  });
  it("Will throw an error if a the username is missing", () => {
    cy.request({
      method: "POST",
      url: "/api/signup",
      failOnStatusCode: false,
      body: {
        firstName: "Maple",
        lastName: "McNamara",
        username: "",
        password: "mmc",
        email: "maple@maple.com",
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property(
        "message",
        "Required data is missing"
      );
    });
  });
  it("Will Create a new User", () => {
    cy.request({
      method: "POST",
      url: "/api/signup",
      failOnStatusCode: false,
      body: {
        firstName: "Maple",
        lastName: "McNamara",
        username: "Maple",
        password: "mmc",
        email: "maple@maple.com",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

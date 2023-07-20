describe("creating a user", () => {
  it("will return an error if the username is already stored in the database", () => {
    cy.request("POST", "/api/signup", {
      firstName: "Mack",
      lastName: "McNamara",
      username: "MMCN",
      password: "mmc",
      email: "m@m.com",
    }).then((response) => {
      expect(response.body).to.have.property(
        "message",
        "Username already exists"
      );
    });
  });
  it("will return an error if the email is already stored in the database", () => {
    cy.request("POST", "/api/signup", {
      firstName: "Mackenzie",
      lastName: "McNamara",
      username: "MMGCN",
      password: "mmc",
      email: "m@m.com",
    }).then((response) => {
      expect(response.body).to.have.property("message", "Email already in use");
    });
  });
  it("Will throw an error if a the firstName is missing", () => {
    cy.request("POST", "/api/signup", {
      firstName: "",
      lastName: "McNamara",
      username: "MMGCNNNN",
      password: "mmc",
      email: "m@mNN.com",
    }).then((response) => {
      expect(response.body).to.have.property(
        "message",
        "Required data is missing"
      );
    });
  });
  it("Will throw an error if a the lastName is missing", () => {
    cy.request("POST", "/api/signup", {
      firstName: "Mackenzie",
      lastName: "",
      username: "MMGCNNNNN",
      password: "mmc",
      email: "m@mNNNNdsa.com",
    }).then((response) => {
      expect(response.body).to.have.property(
        "message",
        "Required data is missing"
      );
    });
  });
  it("Will throw an error if a the username is missing", () => {
    cy.request("POST", "/api/signup", {
      firstName: "Mackenzie",
      lastName: "McNamara",
      username: "",
      password: "mmc",
      email: "m@mNaaaadsad.com",
    }).then((response) => {
      expect(response.body).to.have.property(
        "message",
        "Required data is missing"
      );
    });
  });
  it("Will hash the password", () => {
    cy.request("POST", "/api/signup", {
      firstName: "Mackenzie",
      lastName: "McNamara",
      username: "Dommmmmdsadsad",
      password: "mmc",
      email: "m@mNaaaaaaaaaadasdasdas.com",
    }).then((response) => {
      expect(response.body).to.eq('mmc')
    });
  });
});

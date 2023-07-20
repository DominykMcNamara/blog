describe("creating a user", () => {
  it("will return an error if the username is already stored in the database", () => {
    cy.request({
      method: "POST",
      url: "/api/signup",
      failOnStatusCode: false,
      body: {
        firstName: "Mack",
        lastName: "McNamara",
        username: "MMCN",
        password: "mmc",
        email: "m@m.com",
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
        firstName: "Mackenzie",
        lastName: "McNamara",
        username: "MMGCN",
        password: "mmc",
        email: "m@m.com",
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
        username: "MMGCNNNN",
        password: "mmc",
        email: "m@mNN.com",
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
        firstName: "Mackenzie",
        lastName: "",
        username: "MMGCNNNNNrewrewrw",
        password: "mmc",
        email: "m@mNNNNdrwerewrwerwsa.com",
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
        firstName: "Mackenzie",
        lastName: "McNamara",
        username: "",
        password: "mmc",
        email: "m@mNaaaadsrwerewrewrwad.com",
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
        firstName: "Mackenzie",
        lastName: "McNamara",
        username: "Dommedyredtrydemmmdsadsad",
        password: "mmc",
        email: "m@mNaaaaaaaaafdsfdsfsdfsdadasdasdas.com",
      },
    }).then((response) => {
      expect(response.status).to.eq(201)
      
    });
  });
});

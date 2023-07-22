import { defineConfig } from "cypress";
import resetDB from "./cypress/tasks/resetDB";
import seedDB from "./cypress/tasks/seedDB";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      on("task", {
        resetDB,
        seedDB,
      });
      // implement node event listeners here
    },
  },

  component: {
    specPattern: "pages/*.cy.{js,jsx,ts,tsx}",
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});

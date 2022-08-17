export class BasePage {
  open(url) {
    // let pg = require('pg');
    // let connectionString = "postgres://postgres:AkMbDo===best_devs/18.198.226.126:5432/teamsoft";
    // let pgClient = new pg.Client(connectionString);
    // pgClient.connect();
    // let query = pgClient.query("SELECT id from info_user");

    // query.on("row", function(row,result){

    //   result.addRow(row);
    //   console.log(row);

    //   });

    // cy.task("dbQuery",
    // {
    //   query: "select name from info_user",
    //   connection: "postgres://postgres:AkMbDo===best_devs/18.198.226.126:5432/teamsoft"
    // }).then((res) => {
    //   console.log(res);
    // })

    // cy.postgresql(`SELECT name FROM info_user where name ilike '%test%'`).should('eq', 'test');
    return cy.visit(url);
  }

  authorization(login, password) {
    cy.get("#username")
      .type(login)
      .get("#password")
      .type(password)
      .get('button[type="submit"]')
      .click({ force: true });
  }

  selectService(service) {
    cy.contains(service).click();
  }
}
export const basePage = new BasePage();

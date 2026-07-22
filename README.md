# Cypress Starter — lokalni test framework

Osnovni Cypress projekt za automatizirano testiranje web stranica.

## 1. Instalacija

Preduslov: instaliran [Node.js](https://nodejs.org) (verzija 18 ili novija).

U folderu projekta pokreni:

```bash
npm install
```

Ovo će skinuti Cypress i sve potrebno.

## 2. Podešavanje stranice koju testiraš

Otvori `cypress.config.js` i promijeni `baseUrl` na stranicu koju želiš testirati:

```js
baseUrl: "https://tvoja-stranica.com",
```

## 3. Pokretanje testova

**Interaktivni mod (preporučeno za pisanje/debug testova)** — otvara vizuelni Cypress runner
gdje vidiš browser uživo i svaki korak testa:

```bash
npm run cy:open
```

**Headless mod (za brzo pokretanje svih testova iz terminala)**:

```bash
npm run cy:run
```

**Headed mod (vidiš browser, ali bez interaktivnog UI-a)**:

```bash
npm run cy:run:headed
```

## 4. Struktura projekta

```
cypress-starter/
├── cypress/
│   ├── e2e/                  # ovdje ide svaki test fajl (*.cy.js)
│   │   └── example.cy.js
│   └── support/
│       ├── commands.js       # tvoje custom komande (npr. cy.login())
│       └── e2e.js            # učitava se prije svakog testa
├── cypress.config.js         # konfiguracija (baseUrl, timeouts...)
├── package.json
└── README.md
```

## 5. Pisanje novog testa

Napravi novi fajl u `cypress/e2e/`, npr. `login.cy.js`:

```js
describe('Login funkcionalnost', () => {
  it('uspješan login', () => {
    cy.visit('/login');
    cy.get('#username').type('test');
    cy.get('#password').type('lozinka123');
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/dashboard');
  });
});
```

## Korisni linkovi

- Dokumentacija: https://docs.cypress.io
- Selektori best practices: https://docs.cypress.io/guides/references/best-practices

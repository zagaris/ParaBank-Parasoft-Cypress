# ParaBank-Parasoft-Cypress

## Quick Start

Clone the repo.

```bash
https://github.com/zagaris/ParaBank-Parasoft-Cypress
cd ParaBank-Parasoft-Cypress
```

Install the dependencies.

```bash
npm install
```

Open test enviroment.

```bash
npm run cy:open
```

Run tests and generate Allure report.

```bash
npm run cy:test
```

Open Allure report.

```bash
npm run allure:open
```

(Optional) Run tests via docker cli.

```bash
docker run -it -v $PWD:/e2e -w /e2e cypress/included:8.2.0
```

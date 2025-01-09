# AngularBootstrap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Font Awesome

### Configuration

add in angular.json

```json
"styles": [
    "node_modules/@fortawesome/fontawesome-free/css/all.min.css"
    ],

```

## Bootstrap

### Configuration

add in angular.json

```json
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
"scripts": [
    "node_modules/@popperjs/core/dist/umd/popper.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
    ]
```

### Breakpoint

| Breakpoint        | Classe                      | Dimensions |
| ----------------- | --------------------------- | ---------- |
| Extra small       | Aucune (point de référence) | `<576px`   |
| Small             | `sm`                        | `≥576px`   |
| Medium            | `md`                        | `≥768px`   |
| Large             | `lg`                        | `≥992px`   |
| Extra large       | `xl`                        | `≥1200px`  |
| Extra extra large | `xxl`                       | `≥1400px`  |

### Container

| Container Class  | Extra small `<576px` | Small `≥576px` | Medium `≥768px` | Large `≥992px` | Extra large `≥1200px` | Extra extra large `≥1400px` |
| ---------------- | -------------------- | -------------- | --------------- | -------------- | --------------------- | --------------------------- |
| `.container`     | Auto                 | 540px          | 720px           | 960px          | 1140px                | 1320px                      |
| `.container-sm`  | Auto                 | 540px          | 720px           | 960px          | 1140px                | 1320px                      |
| `.container-md`  | Auto                 | Auto           | 720px           | 960px          | 1140px                | 1320px                      |
| `.container-lg`  | Auto                 | Auto           | Auto            | 960px          | 1140px                | 1320px                      |
| `.container-xl`  | Auto                 | Auto           | Auto            | Auto           | 1140px                | 1320px                      |
| `.container-xxl` | Auto                 | Auto           | Auto            | Auto           | Auto                  | 1320px                      |

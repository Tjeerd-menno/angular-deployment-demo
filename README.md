# Octo Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.
It demonstrates using the Angular [APP_INITIALIZER](https://angular.io/docs/ts/latest/api/core/index/APP_INITIALIZER-let.html) for loading a configuration file which gets populated during deployment (using Octopus Deploy)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Publish to Octopus Deploy Server

Run `npm run package -- --octopusApiUrl "<YOUR_OCTOPUS_URL_HERE>" --octopusApiKey "<YOUR_OCTOPUS_API_KEY_HERE>"` to build a production package and publish it to the Octopus package feed.

## Creating & Pushing Node Projects

There's a guide on creating & pushing Node Project on the Octopus Deploy website [here](https://octopus.com/docs/guides/node-on-nix-deployments/create-&-push-node.js-project).
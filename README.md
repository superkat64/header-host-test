# Custom Ink Single Page Application Template

## Usage

If you are looking to create a new SPA (Single Page Application),

1. Run `git clone https://github.com/customink/ci-spa-starter.git --branch master --single-branch shiny-spa`
2. Run `cd shiny-spa`
3. Run `yarn install`
4. Run `yarn start`

## Setting up local development with pigment

In order to develop pigment alongside your new application, you'll need to go through a few short steps.

1. clone [pigment](https://github.com/customink/pigment/) alongside your new app
2. `cd pigment`
3. `npx lerna clean`
4. `npx lerna bootstrap --hoist`
5. `cd packages/react`
6. `yarn build`
7. `yarn link`
8. `cd ../../../<your new application name>`
9. `yarn link @customink/pigment-react`

Note: You should only need to redo steps 1-4 when making changes to pigment itself, but you will find that the package needs to be re-linked after new npm/yarn installs.

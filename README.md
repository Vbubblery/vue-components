# vue-components

## Components

[Flowlity Good table](https://github.com/flowlity/vue-components/tree/master/src/components/tableComponents)

## Project setup

```
touch .npmrc

//.npmrc
//npm.pkg.github.com/:_authToken=<authToken>
@flowlity:registry=https://npm.pkg.github.com/
```

## How to get authToken?
https://github.com/settings/tokens
Create a Token with

> all repo options

> {write,read,delete}:packages

```
npm install
```

### Example
```
npm run serve
```

### Compiles and Publish (Do the same as the Project setup in the project which you prepare to use the package.)
```
npm run build
npm publish
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```
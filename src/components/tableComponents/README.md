# Flowlity-good-table

## Installing
```
touch .npmrc (make sure add .npmrc into the gitignore)

//.npmrc
//npm.pkg.github.com/:_authToken=<authToken>
@flowlity:registry=https://npm.pkg.github.com/
```

Install with npm:

```
npm install --save @flowlity/vue-components
```

Import globally in app:
```
import FlowlityComponentsPlugin from "@flowlity/vue-components";
import "@flowlity/vue-components/dist/flowlity.css";

Vue.use(FlowlityComponentsPlugin);
```

Import into your component:
```
import { FlowlityGoodTable } from '@flowlity/vue-components';
import "@flowlity/vue-components/dist/flowlity.css";
// add to component
components: {
  FlowlityGoodTable,
}
```
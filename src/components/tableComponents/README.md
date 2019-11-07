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

### my case
```
<flowlity-good-table
      class="shadow"
      :columns="columns"
      :rows="rows"
      :fixed-header="false"
      :row-style-class="
        row => {
          if (row.id === 'Safety stock') return 'bg-orange-200';
          //return (row.originalIndex % 2 === 1 ? 'bg-gray-200' : 'bg-gray-100')
        }
      "
      :global-search-options="{ enabled: true }"
      :group-options="{ enabled: true }"
      :edit-options="{ enabled: true, ids: ['Proj.Supply'] }"
    >
      <template slot="table-row" slot-scope="props">
        <div
          v-if="props.row.editable === true"
          class="flex items-center border-b border-b-2 border-teal-500 py-2"
        >
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            :type="props.column.type"
            :value="props.formattedRow[props.column.field]"
            @change="onCellChange(props, $event)"
          />
        </div>
        <span v-else>{{ props.formattedRow[props.column.field] }}</span>
      </template>
      <template slot="table-actions">
        <font-awesome-icon
          icon="sync"
          @click="showAlert('sync')"
          class="text-gray-medium mr-2 mt-2 hover:bg-blue-500"
        />
        <font-awesome-icon
          icon="download"
          @click="showAlert('download')"
          class="text-gray-medium mr-2 mt-2 hover:bg-blue-500"
        />
      </template>
    </flowlity-good-table>
```

```
columns: [
        {
          label: "W28",
          field: "w28",
          filterable: true,
          width: "100px",
          type: "number" // or text
        },
        {
          label: "W29",
          field: "w29",
          width: "100px",
          sortable: false,
          type: "number"
        },
        {
          label: "W30",
          field: "w30",
          width: "100px",
          type: "number"
        },
        {
          label: "W31",
          field: "w31",
          width: "100px",
          type: "number"
        },
        {
          label: "W32",
          field: "w32",
          width: "100px",
          type: "number"
        },
        {
          label: "W33",
          field: "w33",
          width: "100px",
          type: "number"
        },
        {
          label: "W34",
          field: "w34",
          width: "100px",
          type: "number"
        },
        {
          label: "W35",
          field: "w35",
          width: "100px",
          type: "number"
        },
        {
          label: "W36",
          field: "w36",
          width: "100px",
          type: "number"
        },
        {
          label: "W37",
          field: "w37",
          width: "100px",
          type: "number"
        }
      ],
      rows: [
        {
          mode: "span", // span means this header will span all columns
          label: "TR23056", // this is the label that'll be used for the header
          html: true, // if this is true, label will be rendered as html
          children: [
            {
              id: "Requirements",
              w28: 403,
              w29: 403,
              w30: 403,
              w31: 403,
              w32: 403,
              w33: 403,
              w34: 403,
              w35: 403,
              w36: 403,
              w37: 403
            },
            {
              id: "Proj.Supply",
              w28: 403,
              w29: 403,
              w30: 403,
              w31: 403,
              w32: 403,
              w33: 403,
              w34: 403,
              w35: 403,
              w36: 403,
              w37: 403
            },
            {
              id: "Proj.On Hand",
              w28: 403,
              w29: 403,
              w30: 403,
              w31: 403,
              w32: 403,
              w33: 403,
              w34: 403,
              w35: 403,
              w36: 403,
              w37: 403
            },
            {
              id: "Safety stock",
              w28: 403,
              w29: 560,
              w30: 367,
              w31: 280,
              w32: 326,
              w33: 589,
              w34: 670,
              w35: 705,
              w36: 658,
              w37: 415
            }
          ]
        }
      ]
```
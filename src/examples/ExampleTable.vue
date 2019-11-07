<template>
  <f-table
    :columns="columns"
    :rows="rows"
    :group-options="{ enabled: true }"
  ></f-table>
</template>

<script>
import Table from "../components/Table.vue";
export default {
  name: "example-table",
  components: {
    "f-table": Table
  },
  data() {
    return {
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
    };
  }
};
</script>

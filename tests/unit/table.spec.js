import { shallowMount } from "@vue/test-utils";
import Table from "@/components/tableComponents/Table.vue";

describe("Table.vue ShallowMount", () => {
  const data = {
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
            w29: 403
          },
          {
            id: "Proj.Supply",
            w28: 403,
            w29: 403
          }
        ]
      }
    ]
  };
  const wrapper = shallowMount(Table, {
    propsData: {
      columns: data.columns,
      rows: data.rows,
      "group-options": {
        enabled: true
      }
    }
  });
  // const vm = wrapper.vm;
  it("render table components", () => {
    expect(wrapper.contains("vue-good-table-stub")).toBe(true);
  });
});

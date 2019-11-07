<template>
  <div>
    <vue-good-table
      :columns="tableColumns"
      :rows="tableRows"
      :fixed-header="fixedHeader"
      :max-height="maxHeight"
      :theme="theme"
      :row-style-class="rowStyleClass"
      :line-numbers="lineNumbers"
      :search-options="globalSearchConfig()"
      :pagination-options="paginationConfig()"
      :group-options="groupConfig()"
      @on-row-click="onRowClick"
      @on-cell-click="onCellClick"
    >
      <template slot="table-column" slot-scope="props">
        <span>{{ props.column.label }}</span>
      </template>
      <template slot="table-row" slot-scope="props">
        <slot name="table-row" v-bind="props">
          <div v-if="props.row.editable === true">
            <input
              :type="props.column.type"
              :value="props.formattedRow[props.column.field]"
              @change="onCellChange(props, $event)"
            />
          </div>
          <span v-else>{{ props.formattedRow[props.column.field] }}</span>
        </slot>
      </template>
      <template slot="table-actions">
        <slot name="table-actions"></slot>
      </template>
      <template slot="emptystate">
        <slot name="emptystate"></slot>
      </template>
      <template slot="table-actions-bottom">
        <slot name="table-actions-bottom"></slot>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { VueGoodTable } from "@flowlity/vue-good-table";
import "@flowlity/vue-good-table/dist/vue-good-table.css";

export default {
  name: "flowlity-good-table",
  components: {
    VueGoodTable
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => []
    },
    theme: {
      type: String,
      default: () => "default"
    },
    "fixed-header": {
      type: Boolean,
      default: () => false
    },
    "max-height": {
      type: String,
      default: () => "400px" // Default 400px
    },
    "line-numbers": {
      type: Boolean,
      default: () => true
    },
    "row-style-class": {
      type: Function,
      default: row => {
        return row.originalIndex % 2 === 1 ? "bg-gray-200" : "bg-gray-100";
      }
    },
    "global-search-options": {
      type: Object,
      default: () => {
        return {};
      }
    },
    "pagination-options": {
      type: Object,
      default: () => {
        return {};
      }
    },
    "on-row-click": {
      type: Function,
      default: params => {
        // more details: https://xaksis.github.io/vue-good-table/guide/configuration/table-events.html#on-row-click
      }
    },
    "on-cell-click": {
      type: Function,
      default(params) {
        // more details: https://xaksis.github.io/vue-good-table/guide/configuration/table-events.html#on-cell-click
        // const rowIndex = params.row.originalIndex;
        // const col = params.column.field;
      }
    },
    "edit-options": {
      type: Object,
      default: () => {
        return {
          enabled: false,
          ids: []
        };
      }
    },
    "group-options": {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    onCellChange(props, event) {
      // const rowId = props.row.id;
      // const col = props.column.field;
      // const value = event.target.value
    },
    globalSearchConfig() {
      return {
        // for more optional: https://xaksis.github.io/vue-good-table/guide/configuration/search-options.html
        enabled: false,
        placeholder: "Global search in this table...",
        searchFn: this.searchFunc,
        ...this.globalSearchOptions
      };
    },
    paginationConfig() {
      return {
        // for more optional: https://xaksis.github.io/vue-good-table/guide/configuration/pagination-options.html
        enabled: false,
        position: "top",
        perPage: 5,
        perPageDropdown: [10, 15, 20],
        ...this.paginationOptions
      };
    },
    groupConfig() {
      return {
        enabled: false,
        headerPosition: "top",
        ...this.groupOptions
      };
    },
    searchFunc(row, col, cellValue, searchTerm) {
      return new RegExp(searchTerm).test(cellValue.toString());
    }
  },
  computed: {
    tableRows: {
      get() {
        // for group data
        if (this.groupConfig().enabled === true) {
          const data = this.rows.map(groupRow => {
            if (this.editOptions.enabled === true)
              groupRow.children = groupRow.children.map(row => {
                this.editOptions.ids.includes(row.id)
                  ? (row.editable = true)
                  : (row.editable = false);
                return row;
              });
            return groupRow;
          });
        }
        // clone rows data
        const data = this.rows.map(row => {
          if (this.editOptions.enabled === true)
            this.editOptions.ids.includes(row.id)
              ? (row.editable = true)
              : (row.editable = false);
          return row;
        });
        return data;
      },
      set() {}
    },
    tableColumns: {
      get() {
        return this.columns;
      },
      set() {}
    }
  }
};
</script>
<style scoped>
/* custom theme: https://github.com/xaksis/vue-good-table/issues/572 */
::v-deep .bg-gray-200 {
  background-color: #edf2f7;
}
::v-deep .bg-gray-100 {
  background-color: #f7fafc;
}
</style>

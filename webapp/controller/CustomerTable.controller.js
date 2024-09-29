sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
    'sap/ui/model/Sorter',
  ],
  (Controller, JSONModel, Filter, FilterOperator, Sorter) => {
    'use strict';

    return Controller.extend('toya-sa-sapui5-task.controller.CustomerTable', {
      filterCompanyName(oEvent) {
        const aFilter = [];
        const sQuery = oEvent.getParameter('query');
        if (sQuery) {
          aFilter.push(new Filter('City', FilterOperator.Contains, sQuery));
        }

        const oTable = this.byId('customerTable');
        const oBinding = oTable.getBinding('items');
        oBinding.filter(aFilter);
      },

      sortCompanyNameAscending() {
        const oTable = this.byId('customerTable');
        const oBinding = oTable.getBinding('items');

        const oSorter = new Sorter('CompanyName', false);
        oBinding.sort(oSorter);
      },

      sortCompanyNameDescending() {
        const oTable = this.byId('customerTable');
        const oBinding = oTable.getBinding('items');

        const oSorter = new Sorter('CompanyName', true);
        oBinding.sort(oSorter);
      },
    });
  },
);

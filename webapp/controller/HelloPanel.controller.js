sap.ui.define(['sap/ui/core/mvc/Controller'], (Controller) => {
  'use strict';

  return Controller.extend('toya-sa-sapui5-task.controller.HelloPanel', {
    redirectToCustomerTable() {
      const oRouter = this.getOwnerComponent().getRouter();
      oRouter.navTo('customerTable');
    },
  });
});

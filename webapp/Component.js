sap.ui.define(
  ['sap/ui/core/UIComponent', 'sap/ui/model/resource/ResourceModel'],
  (UIComponent, ResourceModel) => {
    'use strict';

    return UIComponent.extend('toya-sa-sapui5-task.Component', {
      metadata: {
        interfaces: ['sap.ui.core.IAsyncContentCreation'],
        manifest: 'json',
      },

      init() {
        UIComponent.prototype.init.apply(this, arguments);

        const i18nModel = new ResourceModel({
          bundleName: 'toya-sa-sapui5-task.i18n.i18n',
        });
        this.setModel(i18nModel, 'i18n');

        this.getRouter().initialize();
      },
    });
  },
);

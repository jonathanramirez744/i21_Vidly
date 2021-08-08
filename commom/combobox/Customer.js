Ext.define('Vidly.common.combobox.Customer', {
    extend: 'iRely.form.field.GridComboBox',
    alias : 'widget.customercombo',

    forceSelection: true,
    displayField: 'strFullName',
    valueField: 'strFullName',
    selectOnTab: false,
    lookUpField: true,

    initComponent: function() {
        var me = this,
            cfg = cfg || {};

        Ext.applyIf(me, {

            columns: [
                {
                    dataIndex: 'intCustomersId',
                    text: 'Customer ID',
                    dataType: 'int',
                    hidden: true
                },               
                {
                    dataIndex: 'strFullName',
                    text: 'Name',
                    dataType: 'string',
                    flex: 1
                },
                {
                    dataIndex: 'dtmBirthDate',                    
                    text: 'BirthDate',
                    dataType: 'date',
                    flex: 1
                },               
                {
                    dataIndex: 'intSalespersonId',
                    text: 'Salesperson ID',
                    dataType: 'numeric',
                    hidden: true
                },
                {
                    dataIndex: 'strSalesPersonName',
                    text: 'Salesperson Name',
                    dataType: 'string',
                    hidden: true
                },
                
            ]
        }, cfg);

        me.callParent(arguments);
    }

});
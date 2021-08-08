Ext.define('Vidly.store.customers',{
    extend:'Ext.data.Store',
    alias:'frmcustomer',

    requires:[
        'Vidly.model.customers'
    ],

    model: 'Vidly.model.customers',
    storeId:'CustomersId',
    pageSize:50,
    batchActions:true,
    proxy:{
        type:'rest',
        api:{
            read:'./vidly/api/customers/getcustomers',
            update:'./vidly/api/customers/put',
            create:'./vidly/api/customers/post',
            destroy:'./vidly/api/customers/delete'
        },
        reader:{
            type:'json',
            rootProperty:'data',
            messageProperty:'message'
        },
        writer:{
            type:'json',
            writeAllFields: true,
        }
        
    },
})
Ext.define('Vidly.store.bufferedCustomers',{
    extend:'Ext.data.BufferedStore',
    alias:'store.frmbufferedCustomers',

    requires:[
        'Vidly.model.customers'
    ],
    
    model:'Vidly.model.customers',
    storeId:'bufferedCustomersId',
    pageSize:50,
    batchActions:true,
    proxy:{
        type:'rest',
        api:{
            read:'./vidly/api/customers/getcustomers'
        },
        reader:{
            type:'json',
            rootProperty:'data',
            messageProperty:'message'
        }
        
    }
})
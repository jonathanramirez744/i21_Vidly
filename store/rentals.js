Ext.define('Vidly.store.rentals',{
    extend:'Ext.data.Store',
    alias:'frmrentals',

    requires:[
        'Vidly.model.rentals'
    ],

    model: 'Vidly.model.rentals',
    storeId:'RentalsId',
    pageSize:50,
    batchActions:true,
    proxy:{
        type:'rest',
        api:{
            read:'./vidly/api/rentals/GetRentals',
            update:'./vidly/api/rentals/put',
            create:'./vidly/api/rentals/post',
            destroy:'./vidly/api/rentals/delete'
        },
        reader:{
            type:'json',
            rootProperty:'data',
            messageProperty:'message'
        },
        writer:{
            type:'json',
            allowSingle: false,
        }
        
    },
})
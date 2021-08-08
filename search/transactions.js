Ext.define('Vidly.search.transactions',{
    alias:'search.frmTransactions',
    singleton:true,
    searchConfigs:[
        {
            title:'Rental Transactions',
            api:{
                read:'./vidly/api/rentals/SearchTransactionsWithName'
            },
            columns:[
                {dataIndex:'intTransactionsId',text:'Transaction ID', dataType:'int',key:true,flex:1},
                {dataIndex:'dtmDateofTransaction',text:'Transaction Date', dataType:'date',flex:1},
                {dataIndex:'strFullName',text:'Customer Name',dataType:'string',flex:1}
            ]
        }
    ]
})
Ext.define('Vidly.search.newtransaction',{
    alias:'search.frmnewtransaction',
    singleton:true,
    searchConfigs:[
        {
            title:'Rental Transactions',
            api:{
                read:'./vidly/api/customers/search'
            },
            columns:[
                {dataIndex:'intCustomersId',text:'Customer Id', dataType:'int',key:true,hidden:true},
                {dataIndex:'strFullName',text:'Customer Name', dataType:'string',flex:1},
                {dataIndex:'dtmBirthDate',text:'Date of Birth',dataType:'date',flex:1},
                {dataIndex:'ysnIsSubscribedToNewsLetter',text:'Subscribed To News Letter',dataType:'bool',flex:1},
                {dataIndex:'ysnIsDelenquent',text:'Delenquent',dataType:'bool',flex:1},
            ]
        }
    ]
})
Ext.define('Vidly.model.customers',{
    extend:'iRely.BaseEntity',
    requires:[
        'Ext.data.Field'
    ],
    idProperty:'intCustomersId',
    fields:[
        {name:'intCustomersId',type:'int'},
        {name:'strFullName',type:'string'},
        {name:'ysnIsSubscribedToNewsLetter',type:'bool'},
        {name:'dtmBirthDate',
            type:'date',
            format: 'c',
            dateWriteFormat: 'c'
        },
        {name:'ysnIsDelenquent',type:'bool'},
        {name:'dblDiscount',type:'number'},
        {name:'intMembeshipTypeId',type:'int'},
        {name:'strMembershipName',type:'string',mapping:'strMembershipName'},
    ],
    
    
})
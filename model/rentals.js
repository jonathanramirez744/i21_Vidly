Ext.define("Vidly.model.rentals",{
    extend:'iRely.BaseEntity',
    requires:[
        'Ext.data.Field',
        'Vidly.model.rentalsUOM'
    ],
    idProperty:'intRentalsId',
    fields:[
        {name:'intRentalsId',type:'int'},
        {name:'intCustomersId',type:'int'},
        {name:'intMoviesId',type:'int'},
        {name:'intTransactionsId',type:'int'},
        {name:'dblPayment',type:'number'},
        {name:'dtmDateRented',type:'date',
            type:'date',
            format: 'c',
            dateWriteFormat: 'c'
        },
        {name:'dtmDateReturned',type:'date',
            type:'date',
            format: 'c',
            dateWriteFormat: 'c',
            allowNull:true
        },
        {name:'ysnIsReturned', type:'bool'},
        {name:'strFullName',type:'string'},
        {name:'strTitle',type:'string'},
        {name:'dblMoviePrice',type:'number'},
        {name:'dblDiscount',type:'number'},
        {name:'dtmDateofTransaction',type:'date',
            type:'date',
            format: 'c',
            dateWriteFormat: 'c'
        },
    ]
})
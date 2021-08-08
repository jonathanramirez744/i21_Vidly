Ext.define("Vidly.model.rentalsUOM",{
    extend:'iRely.BaseEntity',
    requires:[
        'Ext.data.Field'
    ],
    idProperty:'intRentalsId',
    fields:[
        {name:'intRentalsId', type:'int', },
        {name:'intCustomersId',type:'int'},
        {name:'intMoviesId',type:'int'},
        {
            name:'intTransactionsId',
            type:'int',
            reference:{
                type:'Vidly.model.rentals',
                inverse:{
                    role:'tblVIRentalsMovies',
                    storeConfig:{
                        complete:true,
                        proxy:{
                            type:'rest',
                            api:{
                                read:'./vidly/api/rentals/GetRentalsUOM'
                            },
                            reader:{
                                type:'json',
                                rootProperty:'data',
                                messageProperty:'message'
                            },
                        }
                    }
                }
            }
        },
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
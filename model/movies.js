Ext.define("Vidly.model.movies",{
    extend:'iRely.BaseEntity',
    requires:[
        'Ext.data.Field'
    ],
    idProperty:'intMoviesId',
    fields:[
        {name:'intMoviesId',type:'int'},
        {name:'strTitle',type:'string'},
        {name:'intGenreId',type:'int'},
        {name:'dblMoviePrice',type:'number'},
        {name:'dtmReleaseDate',type:'date',
            type:'date',
            format: 'c',
            dateWriteFormat: 'c'
        },
        {name:'intAvailableStocks',type:'int'},
        {name:'intBorrowedStocks',type:'int'},
        {name:'intTotalStocks',type:'int'},
        {name:'strGenreName',type:'string'},
    ]
})
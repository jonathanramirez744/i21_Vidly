Ext.define('Vidly.store.movies',{
    extend:'Ext.data.Store',
    alias:'store.frmmovies',

    requires:[
        'Vidly.model.movies'
    ],
    
    model:'Vidly.model.movies',
    storeId:'MoviesId',
    pageSize:50,
    batchActions:true,
    proxy:{
        type:'rest',
        api:{
            read:'./vidly/api/movies/getmovies',
            update:'./vidly/api/movies/put',
            create:'./vidly/api/movies/post',
            destroy:'./vidly/api/movies/delete'
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
    }
})
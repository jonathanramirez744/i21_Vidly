Ext.define('Vidly.store.bufferedMovies',{
    extend:'Ext.data.BufferedStore',
    alias:'store.frmbufferedMovies',

    requires:[
        'Vidly.model.movies'
    ],
    
    model:'Vidly.model.movies',
    storeId:'bufferedMoviesId',
    pageSize:50,
    batchActions:true,
    proxy:{
        type:'rest',
        api:{
            read:'./vidly/api/movies/getmovies'
        },
        reader:{
            type:'json',
            rootProperty:'data',
            messageProperty:'message'
        }
        
    }
})
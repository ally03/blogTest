var createRoutes = require('./create/routes');
//var postRoutes = require('./post/routes')

module.exports =  function routes(app) {
    app.use('/create', createRoutes);
    //app.use('/post', postRoutes);
};

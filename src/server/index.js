import Hapi from 'hapi';
import Path from 'path';
import routes from './config/routes';
import hapiPlugins from './config/plugin';

const server = new Hapi.Server();

server.connection({
    port: 8000,
    host: 'localhost'
});


server.register(hapiPlugins, (err) =>  {

  if (err) return console.error(err);
  
    // Add the React-rendering view engine
    server.views({
        engines: {
            jsx: require('hapi-react-views')
        },
        compileOptions: {},
        relativeTo: __dirname,
        path: '../views'
    });

     // Add main app route
    server.route(routes.config);

    server.start(err => {
        if (err) {
            console.error( 'Error was handled!' );
            console.error( err );
        }
        console.log( `Server started at ${ server.info.uri }` );
    });
});

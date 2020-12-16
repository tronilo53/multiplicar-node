
const { crearArchivo, listarTabla } = require( './multiplicar/multiplicar' );
const { argv } = require( './config/yargs' );
const colors = require( 'colors' );

let comando = argv._[ 0 ];

switch( comando ) {
    
    case 'listar':
        console.log( 'Listando...' );
        listarTabla( argv.base, argv.limite );
        break;

    case 'crear':
        console.log( 'Creando...' );
        crearArchivo( argv.base, argv.limite )
            .then( archivo => console.log( `Archivo creado: ${ archivo }` ) )
            .catch( console.log );
        break;

    default:
        console.log( `No se reconoce el comando "${ comando }"` );

}

// let base = parametro.split( '=' )[ 1 ];

// console.log( argv.base );

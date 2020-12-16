
const FS = require( 'fs' );
const colors = require( 'colors' );

const listarTabla = ( base, limite ) => {

    console.log( '======================='.green );
    console.log( `Tabla del ${ base }`.green );
    console.log( '======================='.green );

    for (let i = 1; i <= limite; i++) {
        
        console.log( `${ base } * ${ i } = ${ base * i }` );

    }

};

const crearArchivo = ( base, limite ) => {

    return new Promise( ( resolve, reject ) => {

        if( !Number( base ) ) {
            reject( `La base "${ base }" no es un número` );
            return;
        }

        let data = '';

        for( let i = 1; i <= limite; i++ ) {
            data += ( `${ base } * ${ i } = ${ base * i }\n` );
        }

        FS.writeFile(`tablas/tabla-${ base }[del 1 al ${ limite }].txt`, data, error => {
            if ( error ) reject( error );
            else resolve( `tabla-${ base }[del 1 al ${ limite }].txt`.green );
        });

    } );

};

module.exports = { crearArchivo, listarTabla };
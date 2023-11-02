// middleware/resizeImages.js
const sharp = require( 'sharp' )
const path = require( 'path' )
const fs = require( 'fs' )

module.exports = function ( req, res, next ) {
   // Define the path to the original image
   const originalImagePath = path.join( __dirname, '../static', req.url )

   // Check if the requested URL matches a specific pattern for image resizing
   if ( req.url.startsWith( '/resize/' ) ) {
      const width = parseInt( req.query.width ) || 300 // Default width
      const height = parseInt( req.query.height ) || 200 // Default height

      // Generate the resized image
      sharp( originalImagePath )
         .resize( width, height )
         .toBuffer()
         .then( ( data ) => {
            // Send the resized image as a response
            res.setHeader( 'Content-Type', 'image/jpeg' ) // Adjust the content type as needed
            res.end( data )
         } )
         .catch( ( err ) => {
            console.error( err )
            res.status( 500 ).end( 'Image processing error' )
         } )
   } else {
      // If the URL doesn't match the pattern, pass the request to the next middleware
      next()
   }
}

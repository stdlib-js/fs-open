/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var closeSync = require( '@stdlib/fs-close' ).sync;
var pkg = require( './../package.json' ).name;
var open = require( './../lib' ); // eslint-disable-line stdlib/no-redeclare


// MAIN //

bench( pkg, function benchmark( b ) {
	var i;

	i = 0;
	b.tic();

	return next();

	function next() {
		i += 1;
		if ( i <= b.iterations ) {
			return open( __filename, 'r+', done );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		b.end();
	}

	function done( error, fd ) {
		closeSync( fd ); // necessary in order to avoid leaking file descriptors
		if ( error ) {
			b.fail( error.message );
		}
		next();
	}
});

bench( pkg+':sync', function benchmark( b ) {
	var fd;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		fd = open.sync( __filename, 'r+' );
		if ( fd instanceof Error ) {
			b.fail( fd.message );
		} else {
			closeSync( fd ); // necessary in order to avoid leaking file descriptors
		}
	}
	b.toc();
	if ( fd instanceof Error ) {
		b.fail( 'something went wrong' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Open

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Open a file.

<section class="installation">

## Installation

```bash
npm install @stdlib/fs-open
```

</section>

<section class="usage">

## Usage

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var open = require( '@stdlib/fs-open' );
```

#### open( path\[, flags\[, mode]], clbk )

Asynchronously opens a file.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var closeSync = require( '@stdlib/fs-close' ).sync;

open( __filename, onOpen );

function onOpen( error, fd ) {
    if ( error ) {
        console.error( error.message );
    } else {
        closeSync( fd );
    }
}
```

The function has the same default parameter values as [`fs.open()`][node-fs].

#### open.sync( file\[, flags\[, mode]] )

Synchronously opens a `file`.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var closeSync = require( '@stdlib/fs-close' ).sync;

var fd = open.sync( __filename );
if ( fd instanceof Error ) {
    console.error( fd.message );
} else {
    closeSync( fd );
}
```

The function has the same default parameters as [`fs.openSync()`][node-fs].

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The difference between this API and [`fs.openSync()`][node-fs] is that [`fs.openSync()`][node-fs] will throw if an `error` is encountered (e.g., if given a non-existent `path`) and this API will return an `error`. Hence, the following anti-pattern

    <!-- eslint-disable stdlib/no-redeclare -->

    ```javascript
    var fs = require( 'fs' );

    var fpath = '/path/to/file.js';
    var fd;

    // Check for existence to prevent an error being thrown...
    if ( fs.existsSync( fpath ) ) {
        fd = fs.readFileSync( fpath );
    }
    ```

    can be replaced by an approach which addresses existence via `error` handling.

    <!-- eslint-disable stdlib/no-redeclare -->

    ```javascript
    var open = require( '@stdlib/fs-open' );

    var fpath = '/path/to/file.js';

    // Explicitly handle the error...
    var fd = open.sync( fpath );
    if ( fd instanceof Error ) {
        // You choose what to do...
        console.error( fd.message );
    }
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable stdlib/no-redeclare -->

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var closeSync = require( '@stdlib/fs-close' ).sync;
var open = require( '@stdlib/fs-open' );

/* Sync */

var fd = open.sync( join( __dirname, 'package.json' ), 'r+' );
// returns <number>

if ( fd instanceof Error ) {
    console.error( fd.message );
} else {
    closeSync( fd );
}

fd = open.sync( 'beepboop' );
// returns <Error>

/* Async */

open( join( __dirname, 'package.json' ), onOpen );
open( 'beepboop', onOpen );

function onOpen( error, fd ) {
    if ( error ) {
        if ( error.code === 'ENOENT' ) {
            console.error( 'File does not exist.' );
        } else {
            console.error( error.message );
        }
    } else {
        closeSync( fd );
    }
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/fs-open.svg
[npm-url]: https://npmjs.org/package/@stdlib/fs-open

[test-image]: https://github.com/stdlib-js/fs-open/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/fs-open/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/fs-open/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/fs-open?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/fs-open
[dependencies-url]: https://david-dm.org/stdlib-js/fs-open/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/fs-open/main/LICENSE

[node-fs]: https://nodejs.org/api/fs.html

</section>

<!-- /.links -->

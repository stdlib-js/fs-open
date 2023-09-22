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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Open

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Open a file.



<section class="usage">

## Usage

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
import open from 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-open@v0.1.0-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { sync } from 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-open@v0.1.0-esm/index.mjs';
```

#### open( path\[, flags\[, mode]], clbk )

Asynchronously opens a file.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var closeSync = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-close' ).sync;

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
var closeSync = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-close' ).sync;

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
    import open from 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-open@v0.1.0-esm/index.mjs';

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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

var join = require( 'path' ).join;
var closeSync = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-close' ).sync;
import open from 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-open@v0.1.0-esm/index.mjs';

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

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/fs-close`][@stdlib/fs/close]</span><span class="delimiter">: </span><span class="description">close a file descriptor.</span>
-   <span class="package-name">[`@stdlib/fs-exists`][@stdlib/fs/exists]</span><span class="delimiter">: </span><span class="description">test whether a path exists on the filesystem.</span>
-   <span class="package-name">[`@stdlib/fs-read-file`][@stdlib/fs/read-file]</span><span class="delimiter">: </span><span class="description">read the entire contents of a file.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/fs-open.svg
[npm-url]: https://npmjs.org/package/@stdlib/fs-open

[test-image]: https://github.com/stdlib-js/fs-open/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/fs-open/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/fs-open/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/fs-open?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/fs-open.svg
[dependencies-url]: https://david-dm.org/stdlib-js/fs-open/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/fs-open/tree/deno
[umd-url]: https://github.com/stdlib-js/fs-open/tree/umd
[esm-url]: https://github.com/stdlib-js/fs-open/tree/esm
[branches-url]: https://github.com/stdlib-js/fs-open/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/fs-open/main/LICENSE

[node-fs]: https://nodejs.org/api/fs.html

<!-- <related-links> -->

[@stdlib/fs/close]: https://github.com/stdlib-js/fs-close/tree/esm

[@stdlib/fs/exists]: https://github.com/stdlib-js/fs-exists/tree/esm

[@stdlib/fs/read-file]: https://github.com/stdlib-js/fs-read-file/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->

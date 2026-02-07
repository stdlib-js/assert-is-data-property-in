<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# isDataPropertyIn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if an object's own or inherited property has a data descriptor.



<section class="usage">

## Usage

```javascript
import isDataPropertyIn from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-data-property-in@deno/mod.js';
```

#### isDataPropertyIn( value, property )

Returns a `boolean` indicating if a `value` has a data `property` (either own or inherited).

<!-- eslint-disable no-restricted-syntax -->

```javascript
import defineProperty from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@deno/mod.js';

var bool;
var obj;

function Foo() {
    this.foo = 'bar';
    return this;
}

defineProperty( Foo.prototype, 'beep', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'boop'
});

defineProperty( Foo.prototype, 'accessor', {
    'configurable': false,
    'enumerable': false,
    'get': function getter() {
        return obj.foo;
    },
    'set': function setter( v ) {
        obj.foo = v;
    }
});

obj = new Foo();

bool = isDataPropertyIn( obj, 'foo' );
// returns true

bool = isDataPropertyIn( obj, 'beep' );
// returns true

bool = isDataPropertyIn( obj, 'accessor' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isDataPropertyIn( 'beep', 'length' );
    // returns true
    ```

-   Non-symbol property arguments are coerced to `strings`.

    ```javascript
    var obj = {
        'null': 'foo'
    };

    var bool = isDataPropertyIn( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
import isDataPropertyIn from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-data-property-in@deno/mod.js';

var bool = isDataPropertyIn( [ 'a' ], 'length' );
// returns true

bool = isDataPropertyIn( { 'a': 'b' }, 'a' );
// returns true

bool = isDataPropertyIn( [ 'a' ], 0 );
// returns true

bool = isDataPropertyIn( { 'null': false }, null );
// returns true

bool = isDataPropertyIn( { '[object Object]': false }, {} );
// returns true

bool = isDataPropertyIn( {}, 'toString' );
// returns true

bool = isDataPropertyIn( {}, 'hasOwnProperty' );
// returns true

bool = isDataPropertyIn( null, 'a' );
// returns false

bool = isDataPropertyIn( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-has-property`][@stdlib/assert/has-property]</span><span class="delimiter">: </span><span class="description">test if an object has a specified property, either own or inherited.</span>
-   <span class="package-name">[`@stdlib/assert-is-accessor-property-in`][@stdlib/assert/is-accessor-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property has an accessor descriptor.</span>
-   <span class="package-name">[`@stdlib/assert-is-data-property`][@stdlib/assert/is-data-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property has a data descriptor.</span>

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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-data-property-in.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-data-property-in

[test-image]: https://github.com/stdlib-js/assert-is-data-property-in/actions/workflows/test.yml/badge.svg?branch=v0.2.3
[test-url]: https://github.com/stdlib-js/assert-is-data-property-in/actions/workflows/test.yml?query=branch:v0.2.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-data-property-in/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-data-property-in?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-data-property-in.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-data-property-in/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-data-property-in/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-is-data-property-in/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-is-data-property-in/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-is-data-property-in/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-is-data-property-in/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-is-data-property-in/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-is-data-property-in/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-data-property-in/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/has-property]: https://github.com/stdlib-js/assert-has-property/tree/deno

[@stdlib/assert/is-accessor-property-in]: https://github.com/stdlib-js/assert-is-accessor-property-in/tree/deno

[@stdlib/assert/is-data-property]: https://github.com/stdlib-js/assert-is-data-property/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->

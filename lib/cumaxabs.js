/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var isnan = require( '@stdlib/math-base-assert-is-nan' );
var abs = require( '@stdlib/math-base-special-abs' );


// MAIN //

/**
* Computes the cumulative maximum absolute value of a strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} strideX - `x` stride length
* @param {NumericArray} y - output array
* @param {integer} strideY - `y` stride length
* @returns {NumericArray} output array
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
* var y = [ 0.0, 0.0, 0.0 ];
* var N = x.length;
*
* var v = cumaxabs( N, x, 1, y, 1 );
* // returns [ 1.0, 2.0, 2.0 ]
*/
function cumaxabs( N, x, strideX, y, strideY ) {
	var max;
	var ix;
	var iy;
	var v;
	var i;

	if ( N <= 0 ) {
		return y;
	}
	if ( strideX < 0 ) {
		ix = (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = (1-N) * strideY;
	} else {
		iy = 0;
	}
	max = abs( x[ ix ] );
	y[ iy ] = max;

	iy += strideY;
	i = 1;
	if ( isnan( max ) === false ) {
		for ( i; i < N; i++ ) {
			ix += strideX;
			v = abs( x[ ix ] );
			if ( isnan( v ) ) {
				max = v;
				break;
			}
			if ( v > max ) {
				max = v;
			}
			y[ iy ] = max;
			iy += strideY;
		}
	}
	if ( isnan( max ) ) {
		for ( i; i < N; i++ ) {
			y[ iy ] = max;
			iy += strideY;
		}
	}
	return y;
}


// EXPORTS //

module.exports = cumaxabs;

/// <reference path="bundle.d.ts" />
/// <reference path="typings/index.d.ts" />

import slug = require('slug');
import assert = require('assert');

assert.equal(slug('this is a test'), 'this-is-a-test');

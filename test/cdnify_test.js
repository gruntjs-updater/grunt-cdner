'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.cdnify = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },

  cdn_option_css: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/cdn_option.css');
    var expected = grunt.file.read('test/expected/cdn_option.css');
    test.equal(actual, expected, 'CSS should have versioned images with buster option');

    test.done();
  },
  //cdn_option_html: function(test) {
    //test.expect(1);

    //var actual = grunt.file.read('tmp/cdn_option.html');
    //var expected = grunt.file.read('test/expected/cdn_option.html');
    //test.equal(actual, expected, 'HTML should have versioned assets with buster option');

    //test.done();
  //},

  //ignore_option_css: function(test) {
    //test.expect(1);

    //var actual = grunt.file.read('tmp/ignore_option.css');
    //var expected = grunt.file.read('test/expected/ignore_option.css');
    //test.equal(actual, expected, 'css url paths in the ignore option should not be busted');

    //test.done();
  //},
  //ignore_option_html: function(test) {
    //test.expect(1);

    //var actual = grunt.file.read('tmp/ignore_option.html');
    //var expected = grunt.file.read('test/expected/ignore_option.html');
    //test.equal(actual, expected, 'asset url paths in the ignore option should not be busted');

    //test.done();
  //},


};
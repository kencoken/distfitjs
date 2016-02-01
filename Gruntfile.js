module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.initConfig({
    jsdoc: {
      dist: {
        src: ['lib/*.js', 'test/*.js'],
        options: {
          destination: 'doc'
        }
      }
    },
    mochaTest: {
      src: ['test/*.js']
    }
  });
  
  grunt.registerTask("default", ["mochaTest", "jsdoc"]);
};

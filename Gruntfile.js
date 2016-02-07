module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    jsdoc: {
      dist: {
        src: ['lib/*.js', 'test/*.js', 'README.md'],
        options: {
          destination: 'doc'
        }
      }
    },
    mochaTest: {
      src: ['test/*.js']
    },
  });
  
  grunt.registerTask("default", ["mochaTest"]);
};

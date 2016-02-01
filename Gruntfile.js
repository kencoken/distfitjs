module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.initConfig({
    jsdoc : {
      dist : {
        src: ['lib/*.js', 'test/*.js'],
        options: {
          destination: 'doc'
        }
      }
    }
  });
  
  grunt.registerTask("default", ["jsdoc"]);
};

module.exports = function(grunt) {
  grunt.initConfig({

    cssmin: {
      files: {
        src: 'src/*.css',
        dest: 'dest/hagrid.css'
      }
    },

    less: {
      files: {
        src: 'src/less/hagrid.less',
        dest: 'dest/hagrid.less.css'
      }
    }

  });
  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['cssmin', 'less']);
};



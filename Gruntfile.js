module.exports = function(grunt) {
  grunt.initConfig({

    //TODO: Output in multiple places (one for site, one for build)
    cssmin: {
      build: {
        src: 'src/lib/css/*.css',
        dest: 'build/hagrid.css'
      },
      site: {
        src: 'src/lib/css/*.css',
        dest: 'site/css/hagrid.css'
      }
    },

    less: {
      build: {
        src: 'src/lib/less/hagrid.less',
        dest: 'build/hagrid.less.css'
      }
    },

    // ASSEMBLE
    assemble: {

      // Global Options
      options: {
            layout: ['default.hbs'],
            layoutdir: 'src/site/layouts',
            partials: 'src/site/partials/*.hbs',
            data: ['src/examples/data/*.{json,yml}'],
            ext: '.html',
            expand: true
      },

      site: {
        files: [
          // Index
          {expand: true, cwd: 'src/examples/pages/', src: 'index.hbs', dest: 'site', ext: '.html'}
        ]
      }

    }

  });
  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('assemble');

  grunt.registerTask('default', ['cssmin', 'less']);
  grunt.registerTask('compile', ['grunt-handlebars-compiler']);
};



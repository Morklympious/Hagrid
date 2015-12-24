module.exports = function(grunt) {
  grunt.initConfig({

    //TODO: Output in multiple places (one for site, one for build)
    cssmin: {
      build: {
        src: 'src/lib/css/*.css',
        dest: 'build/hagrid.css'
      },
      site: {
        files: {
          'site/static/css/site.css': ['src/lib/css/*.css', 'src/site/static/css/*.css']
        }
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
        partials: ['src/site/partials/**/*.hbs', 'src/site/partials/examples/markdown/*.md'],
        data: ['src/site/data/*.{json,yml}', 'src/site/data/examples/*.json'],
        ext: '.html',
        expand: true,
        assets: './static',
        marked: {
          highlight: function (code) {
            return require('highlight.js').highlightAuto(code).value;
          },
          breaks: false,
          gfm: true,
          langPrefix: 'language-',
          pedantic: false,
          sanitize: false,
          silent: false,
          smartLists: false,
          smartypants: false,
          tables: true 
        },
        helpers: ['handlebars-helper-md'],
      },

      site: {
        files: [
          // Index
          {expand: true, cwd: 'src/site/pages/', src: '*.hbs', dest: 'site', ext: '.html'},
        
        ]
      }

    }

  });
  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-assemble');

  grunt.registerTask('default', ['cssmin', 'less']);
  grunt.registerTask('all', ['cssmin', 'less', 'assemble']);
};



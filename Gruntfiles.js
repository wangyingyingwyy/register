module.exports=function (grunt) {  
    grunt.initConfig({
        htmlmin:{
            options:{
                collapseWhitespace: true,
                preserveLineBreaks: true
            },
            files:{
                src:'./index.html',
                dest:'dist/index.html'
            }
        },
        cssmin:{
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
              },
              target: {
                files: {
                  'dist/reg.min.css': ['./reg.css']
                }
              }
        },
        uglify:{
            'dist/reg.min.js':'./reg.js'
        },
        useminPrepare: {
            html: 'index.html',
            options: {
              dest: 'dist'
            }
        },
        usemin: {
            html: ['dist/index.html']
        },
        clean: ['dist/reg.js'],
        copy: {
          html: {
            src: './index.html',
            dest: './dist/index.html'
          }
        }
      
    });
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('release', ['copy', 'useminPrepare', 'uglify', 'usemin', 'cssmin', 'htmlmin', 'clean']);
}
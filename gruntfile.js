module.exports = function(grunt){
    grunt.initConfig({
        concat  : {
            options: {
                separator: '\n\n//-------------------------------------\n',
                banner:    '\n\n//-------------------------------------\n'
            },
        dist    :{
            src : ['components/scripts/*.js'],
            dest: 'build/development/js/script.js'
        }
    },

    sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files   : [{
                    src: 'scss/21cgeek.scss',
                    dest: 'build/development/css/21cgeek.css'
                }]
            }
    }, //sass

		
	watch: {
		options: {
			spawn: false
		},
		scripts: {
			files: ['builds/development/**/*.html', 
					'components/scripts/**/*.js',
					'components/sass/**/*.scss',
				   'scss/*.scss'],
			task: ['concat', 'sass']
		}
	}	

    }); //initConfig

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
    grunt.registerTask('default',['concat', 'sass', 'watch']); //setups defaults for grunt
}; //wrapper function
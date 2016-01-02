/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

	grunt.config.set('copy', {
		dev: {
			files: [
			{
				expand: true,
				cwd: './node_modules/systemjs/dist',
				src: ['*.js'],
				dest: '.tmp/public/node_modules/systemjs/dist'
			},
			{
				expand: true,
				cwd: './node_modules/rxjs',
				src: ['**/*.js'],
				dest: '.tmp/public/node_modules/rxjs'
			},
			{
				expand: true,
				cwd: './node_modules/angular2',
				src: ['**/*.js'],
				dest: '.tmp/public/node_modules/angular2'
			},
			{
				expand: true,
				cwd: './node_modules/bootstrap/dist/css',
				src: ['bootstrap.min.css'],
				dest: '.tmp/public/node_modules/bootstrap/dist/css'
			},
			{
				expand: true,
				cwd: './assets',
				src: ['**/*.!(coffee|less)'],
				dest: '.tmp/public'
			}]
		},
		build: {
			files: [{
				expand: true,
				cwd: '.tmp/public',
				src: ['**/*'],
				dest: 'www'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};

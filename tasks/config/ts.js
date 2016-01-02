/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to clean out the contents in the .tmp/public of your
 * sails project.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function(grunt) {

  grunt.config.set('ts', {
  	dev: {
	    files: [
	        {src: ["**/*.ts", "!node_modules/**/*.ts"], dest: ''}
	    ],

	    options: {
		    target: "ES5",
		    module: "system",
		    moduleResolution: "node",
		    sourceMap: true,
		    emitDecoratorMetadata: true,
		    experimentalDecorators: true,
		    removeComments: false,
		    noImplicitAny: false
	    }
  	}

  });
  console.log('Loading ts');
  grunt.loadNpmTasks("grunt-ts");
  grunt.registerTask("default", ["ts"]);
};

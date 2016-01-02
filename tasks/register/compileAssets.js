module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		//'clean:dev',
		'jst:dev',
		'less:dev',
		'ts:dev',
		'copy:dev',
		'coffee:dev'
	]);
};

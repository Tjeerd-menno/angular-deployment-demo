let gulp = require('gulp');
let bump = require('gulp-bump');
let octo = require('@octopusdeploy/gulp-octo');
let argv = require('yargs').argv;
 
 gulp.task('bump', function(){
  return gulp.src('./package.json')
      .pipe(bump({type: 'patch'}))
      .pipe(gulp.dest('./'));
});

gulp.task('publish', ['bump'], function () {

    let octopusConfig = { host: argv.octopusApiUrl, apiKey: argv.octopusApiKey };

    let g = gulp.src(['dist/**/*.*'])
        .pipe(octo.pack());

    return (argv.octopusApiUrl && argv.octopusApiKey) ? g.pipe(octo.push(octopusConfig)) : g.pipe(gulp.dest('./packages'));
});
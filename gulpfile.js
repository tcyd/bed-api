var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var files = [
  'app.js',
  'router.js',
  'route/**/*js',
  'lib/**/*.js',
  'middleware/**/*js',
  '.env',
  '.env_dev'
];
function beep() {
  require('child_process').exec('afplay /System/Library/Sounds/Glass.aiff');
}
gulp.task('default', function () {
  nodemon({
    script: 'app.js',
    watch: files,
    env: {
      'NODE_ENV': 'development'
    }
  })
    .on('start', function () {
    })
    .on('restart', function () {
    })
    .on('crash', function () {
      beep();
    });
});

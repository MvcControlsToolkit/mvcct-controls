var gulp = require('gulp');
var closureCompiler = require('gulp-closure-compiler');


gulp.task('serverGrid:compile', function() {
  return gulp.src(["modules/mvcct.controls.serverGrid.js"], { base: "." })
    .pipe(closureCompiler({
      //compilerPath: 'node_modules/gulp-closure-compiler/node_modules/google-closure-compiler/compiler.jar',
      fileName: 'mvcct.controls.serverGrid.min.js',
      compilerFlags: {
        compilation_level: 'ADVANCED_OPTIMIZATIONS',
        warning_level:'QUIET'
      }
    }))
    .pipe(gulp.dest('./modules'));
});

gulp.task('routing:compile', function() {
  return gulp.src(["modules/mvcct.routing.js"], { base: "." })
    .pipe(closureCompiler({
      //compilerPath: 'node_modules/gulp-closure-compiler/node_modules/google-closure-compiler/compiler.jar',
      fileName: 'mvcct.routing.min.js',
      compilerFlags: {
        compilation_level: 'ADVANCED_OPTIMIZATIONS',
        warning_level:'QUIET'
      }
    }))
    .pipe(gulp.dest('./modules'));
});

gulp.task('ajax:compile', function() {
  return gulp.src(["modules/mvcct.controls.ajax.js"], { base: "." })
    .pipe(closureCompiler({
      //compilerPath: 'node_modules/gulp-closure-compiler/node_modules/google-closure-compiler/compiler.jar',
      fileName: 'mvcct.controls.ajax.min.js',
      compilerFlags: {
        compilation_level: 'ADVANCED_OPTIMIZATIONS',
        warning_level:'QUIET'
      }
    }))
    .pipe(gulp.dest('./modules'));
});

gulp.task('autocomplete:compile', function() {
  return gulp.src(["modules/mvcct.controls.autocomplete.js"], { base: "." })
    .pipe(closureCompiler({
      //compilerPath: 'node_modules/gulp-closure-compiler/node_modules/google-closure-compiler/compiler.jar',
      fileName: 'mvcct.controls.autocomplete.min.js',
      compilerFlags: {
        compilation_level: 'ADVANCED_OPTIMIZATIONS',
        warning_level:'QUIET'
      }
    }))
    .pipe(gulp.dest('./modules'));
});gulp 

gulp.task('controls:compile', function() {
  return gulp.src(["mvcct.controls.js"], { base: "." })
    .pipe(closureCompiler({
      fileName: 'mvcct.controls.min.js',
      compilerFlags: {
        compilation_level: 'ADVANCED_OPTIMIZATIONS',
        warning_level:'QUIET'
      }
    }))
    .pipe(gulp.dest('.'));
});
gulp.task("default", ["controls:compile", "ajax:compile", "autocomplete:compile", "serverGrid:compile", "routing:compile"]);
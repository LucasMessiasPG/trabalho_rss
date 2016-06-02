var gulp = require('gulp');
var ts = require('gulp-typescript');

var DEV = 'dev/';
var PROD = 'app/';

var tsProject = ts.createProject({
    declaration: true,
    noExternalResolve: true
});

gulp.task('build-ts',function(){
    return gulp.src(DEV+'**/*.ts')
        .pipe(ts(tsProject))
        .pipe(gulp.dest(PROD))
})

gulp.task('move-css',function(){
    return gulp.src(DEV+'**/*.css')
        .pipe(gulp.dest(PROD))
})

gulp.task('move-fonts',function(){
    return gulp.src(DEV+'**/fonts/*')
        .pipe(gulp.dest(PROD))
})

gulp.task('move-js',function(){
    return gulp.src(DEV+'**/*.js')
        .pipe(gulp.dest(PROD))
})

gulp.task('watch',function(){
    gulp.watch(DEV+'**/*.ts',['build-ts'])
    gulp.watch(DEV+'**/*.css',['move-css'])
    gulp.watch(DEV+'**/*.js',['move-js'])
    gulp.watch(DEV+'**/fonts/*',['move-fonts'])
})

gulp.task('default',['watch','build-ts','move-css','move-fonts','move-js'])
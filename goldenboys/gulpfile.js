// подключаем модули галпа
const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');
const webp = require('gulp-webp');

//Список CSS файлов для сборки в 1 (писать в нужном порядке)
const cssFiles = [
    './src/css/main.css',
    './src/css/media.css'
]

//Список JS файлов для сборки в 1 (писать в нужном порядке)
const jsFiles = [
    './src/js/lib.js',
    './src/js/main.js'
]

//Таск для обработки стилей
gulp.task('styles', () => {
    //Шаблон для поиска файлов CSS
    //Всей файлы по шаблону './src/css/**/*.css'
    return gulp.src(cssFiles)
    //Объединение файлов в один
    .pipe(concat('style.css'))
    //Добавить префиксы
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))
    //Минификация CSS
    .pipe(cleanCSS({
        level: 2
    }))
    //Добавление суффикса к названию конечного файла
    .pipe(rename({
        suffix: '.min'
    }))
    //Выходная папка для стилей
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
 });

 //Таск для обработки скриптов
gulp.task('scripts', () => {
    //Шаблон для поиска файлов JS
    //Всей файлы по шаблону './src/js/**/*.js'
    return gulp.src(jsFiles)
    //Объединение файлов в один
    .pipe(concat('main.js'))
    //Минификация JS
    .pipe(uglify({
        toplevel: true
    }))
    .pipe(rename({
        suffix: '.min'
    }))
    //Выходная папка для скриптов
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
 });

 //Таск для очистки папки build
gulp.task('del', () => {
    return del(['build/*'])
 });

 //Таск для сжатия изображений
gulp.task('img-compress', ()=> {
    return gulp.src('./src/img/**')
    .pipe(imagemin({
       progressive: true
    }))
    .pipe(gulp.dest('./build/img/jpgpng'))
 });

gulp.task('img-webp', () => {
    return gulp.src('./src/img/**')
    .pipe(imagemin({
        progressive: true
     }))
        .pipe(webp())
        .pipe(gulp.dest('./build/img/webp'));
});

 //Таск для отслеживания изменений в файлах
gulp.task('watch', () => {
    browserSync.init({
       server: {
          baseDir: "./"
       }
    });
    //Следить за добавлением новых изображений
    gulp.watch('./src/img/**', gulp.series('img-compress', 'img-webp'))
    //Следить за файлами со стилями с нужным расширением
    gulp.watch('./src/css/**/*.css', gulp.series('styles'))
    //Следить за JS файлами
    gulp.watch('./src/js/**/*.js', gulp.series('scripts'))
    //При изменении HTML запустить синхронизацию
    gulp.watch("./*.html").on('change', browserSync.reload);
 });

 //Таск по умолчанию, Запускает del, styles, scripts, img-compress и watch
gulp.task('default', gulp.series('del', gulp.parallel('styles', 'scripts', 'img-compress', 'img-webp'), 'watch'));
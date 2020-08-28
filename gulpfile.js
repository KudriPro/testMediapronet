"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var cleanCSS = require("gulp-clean-css");
var rename = require("gulp-rename");

gulp.task("sass", function () {
  return gulp
    .src("sourse/scss/style.scss")
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("build/css/"))
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch("sourse/scss/**/*.scss", gulp.series("sass"));
  gulp.watch("*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("sass", "server"));

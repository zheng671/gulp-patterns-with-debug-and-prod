module.exports = function () {
    var temp = '.tmp/';
    var build = 'build/';
    var src = 'src/';
    var app = src + 'app/';
    var asset = src + 'asset/';
    var less = asset + 'less/';
    var report = './report/';

    var config = {
        // File Path
        app: app,
        alljs: [
            './*.js',
            src + '*.js',
            app + '*.js',
            app + '**/*.js',
            asset + '**/js/*.js',
        ],
        build: build,
        css: temp + 'styles.css',
        fonts: ['./bower_components/font-awesome/fonts/**/*.*', './bower_components/bootstrap-css/fonts/**/*.*'],
        htmltemplates: [app + '**/*.html'],
        html: [app + '**/*.html'],
        images: asset + 'images/**/*.*',
        index: src + 'index.html',
        js: [
            app + '**/*.module.js',
            app + '**/*.constant.js',
            app + '**/*.js',
            asset + '**/js/*.js',
            '!' + app + '**/*.spec.js'
        ],
        lessPath: less,
        less: [
            asset + 'less/styles.less',
        ],
        lesswatcher: [
            less + 'index.less',
            less + 'less/*.less'],
        plato: {js: app + '**/*.js'},
        report: report,
        src: src,
        temp: temp,
        templess: temp + 'styles.less',
        //optimized files
        optimized: {
            app: 'app.js',
            lib: 'lib.js'
        },
        // Bower Option
        bower: {
            json: require('./bower.json'),
            directory: './bower_components',
            ingorePath: '../..'
        },
        // Server Setting
        defaultPort: 7203,
        nodeServer: './server.js',
        // Browser sync
        browserReloadDelay: 1000,
        // tempalte cache
        templateCache : {
            file: 'templates.js',
            options: {
                module: 'app',
                standAlone: false,
                root: 'app/'
            }
        }
    };
    config.getWiredepDefaultOptions = function getWiredepDefaultOptions() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath,
            exclude: ['js/bootstrap.min.js']
        };
        return options;
    };
    return config;
};

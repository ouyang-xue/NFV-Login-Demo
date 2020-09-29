// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');  //html报告

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'ie'
  },
  // directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },

  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });

    //html报告的配置
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath:'./reporter/html',
        takeScreenshots:true, // 是否获取截图
        takeScreenshotsOnlyOnFailures: true, // 仅在失败是获取截图
        filePrefix:'index', // 文件名打头字符串
        fileNameDateSuffix: true,
        cleanDestination:false
      }),

    );
  }
};

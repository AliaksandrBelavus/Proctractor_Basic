const SpecReporter = require("jasmine-spec-reporter").SpecReporter;

exports.config = {
  framework: "jasmine",
  onPrepare: function () {
    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: true,
        },
      })
    );
  },
  capabilities: {
    browserName: "chrome",
  },

  seleniumAddress: "http://localhost:4444/wd/hub",

  specs: ["protractor.js"],
};

const configGenerator = require('../mobilogy-common-lib/core/config-setup/config-generator');

exports.config = configGenerator.getConfigs(
    {
        smoke_tests: 'e2e/test-suites/smoke-test-suite/ios/*.e2e-spec.ts',
        health_tests: 'e2e/test-suites/health-check-test-suite/iphone/*.e2e-spec.ts'
    },
    'http://hub-cloud.browserstack.com/wd/hub', false, true
);

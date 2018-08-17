const configGenerator = require('../mobilogy-common-lib/core/config-setup/config-generator');

exports.config = configGenerator.getConfigs(
    {
        //smoke_tests: 'e2e/test-suites/smoke-test-suite/android/*.e2e-spec.ts',
      //  health_tests: 'e2e/test-suites/health-check-test-suite/android/*.e2e-spec.ts',
        regression: 'e2e/test-suites/regression-test-suite/android/*.e2e-spec.ts'
    },


    'http://localhost:4723/wd/hub', true, false
);

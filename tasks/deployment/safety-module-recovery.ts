import { types } from 'hardhat/config';

import { hardhatTask } from '../../src/hre';
import { deploySafetyModuleRecovery } from '../../src/migrations/safety-module-recovery';

hardhatTask('deploy:safety-module-recovery', 'Deploy the Safety Module recovery contracts.')
  .addParam('startStep', 'Which step to start with', 1, types.int)
  .addParam('dydxTokenAddress', 'Previously deployed dYdX token address', undefined, types.string)
  .addParam('rewardsTreasuryAddress', 'Previously deployed rewards treasury address', undefined, types.string)
  .addOptionalParam('safetyModuleNewImplAddress', 'Previously deployed SafetyModuleV2 implementation contract', undefined, types.string)
  .setAction(async (args) => {
    const {
      safetyModuleNewImpl,
      safetyModuleRecovery,
    } = await deploySafetyModuleRecovery(args);
    console.log(`New Safety Module implementation deployed to: ${safetyModuleNewImpl.address}`);
    console.log(`Safety Module recovery contract deployed to: ${safetyModuleRecovery.address}`);
  });
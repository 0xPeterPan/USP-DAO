import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
  "0xC4ea6020b9B72d4F4Cc7Bb222A2822ee6f27043B",
);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 50_000,
      maxQuantityPerTransaction: 1,
    });
    
    
    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log(
        "✅ Sucessfully set claim condition!",
        bundleDrop.address,
    );
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})()
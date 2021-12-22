import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xC4ea6020b9B72d4F4Cc7Bb222A2822ee6f27043B",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Key of Return",
        description: "This is USP DAO Genesis NFT & will give you access!",
        image: readFileSync("scripts/assets/Key of Return.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()

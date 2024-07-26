import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x4A4965a336f9Be934230C7831E13A674E56e2eb2",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Captain Levi..",
        description: "This NFT will give you access to AckermannDAO!",
        image: readFileSync("scripts/assets/ackermann.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()

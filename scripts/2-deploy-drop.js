import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x40BC1E82c56217Bf21F1D6A79AE5e091428A3816");

(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            // the collection's name
            name: "Broke Boy DAO Membership",
            // a description for the collection
            description: "A DAO to turn Broke Boys into former Broke Boys",
            // the image for the collection that will show up on OpenSea.
            image: readFileSync("scripts/assets/BB.png"),
            // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts
            // We're planning on not charging for the drop, so we'll pass in the 0x0 address
            // you can set this to your wallet address if you want to charge for the drop.
            primarySaleRecipientAddress: ethers.constants.AddressZero,
        });

        console.log(
            "Successfully deployed bundleDrop module, address:",
            bundleDropModule.address,
        );
        console.log(
            " bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
        );
    } catch (error) {
        console.log("failed to deploy bundleDrop module", error);
    }
}) ()
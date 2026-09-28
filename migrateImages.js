require("dotenv").config();
const mongoose = require("mongoose");
const Listing = require("./models/listing");

async function migrateImages() {
    try {
        await mongoose.connect(process.env.ATLASDB_URL);

        console.log("Connected to MongoDB Atlas");

        const listings = await Listing.collection
            .find({ image: { $exists: true } })
            .toArray();

        console.log(`Found ${listings.length} old listings`);

        for (const listing of listings) {
            if (listing.image && listing.image.url) {
                await Listing.collection.updateOne(
                    { _id: listing._id },
                    {
                        $set: {
                            images: [
                                {
                                    url: listing.image.url,
                                    filename: listing.image.filename
                                }
                            ]
                        },
                        $unset: {
                            image: ""
                        }
                    }
                );

                console.log(`Migrated: ${listing.title}`);
            }
        }

        console.log("Image migration completed!");
    } catch (err) {
        console.error("Migration failed:", err);
    } finally {
        await mongoose.connection.close();
    }
}

migrateImages();
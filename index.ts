import { Client } from "twitter-api-sdk";
import * as dotenv from "dotenv";
import * as fs from "fs/promises"
dotenv.config();
const client = new Client(process.env.BEARER_TOKEN_V2);

async function main() {
    const file = await fs.open("./data.csv", "a");
    const stream = client.tweets.sampleStream({
        "tweet.fields": ["lang", "text", "created_at"],
    });
    for await (const tweet of stream) {
        if (tweet.data?.lang == "en") {
            file.write(`"${tweet.data?.created_at}"||,|| "${tweet.data?.text}"||\`||`);
            
        }
    }
}

main();

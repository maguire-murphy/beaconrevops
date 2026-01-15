import { Client } from "@hubspot/api-client";

const client = new Client();
console.log("oauth:", client.oauth);
console.log("tokensApi:", client.oauth.tokensApi);
console.log("tokensApi prototype:", Object.getPrototypeOf(client.oauth.tokensApi));

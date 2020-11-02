import { makeClient } from "@spree/storefront-api-v2-sdk";
// When using the SDK in a <script> tag or as part of a Webpack bundle
// targeted for the browser, instead use:
// import { makeClient } from '@spree/storefront-api-v2-sdk/dist/client'

export const client = makeClient({
  host: process.env.REACT_APP_API_URL,
});

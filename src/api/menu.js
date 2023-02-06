import client from "../lib/client";
let clientConfig = client.clientConfig;
export default async function getMenu() {
  let QUERY = encodeURIComponent('*[_type == "dishes"]');
  let URL = `https://${clientConfig.projectId}.api.sanity.io/${clientConfig.apiVersion}/data/query/${clientConfig.dataset}?query=${QUERY}`;

  let response = await fetch(URL);
  let result = await response.json();
  let data = result.result;
  return data;
}

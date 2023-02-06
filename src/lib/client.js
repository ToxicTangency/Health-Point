import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const clientConfig = {
  projectId: "fw5cqqn2",
  dataset: "production",
  apiVersion: "v2021-10-21",
};

const client = sanityClient({
  projectId: clientConfig.projectId,
  dataset: clientConfig.dataset,
  apiVersion: clientConfig.apiVersion,
  token: import.meta.env.VITE_SANITY_TOKEN,
  useCdn: true,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default { client, clientConfig, urlFor };

import { unstable_noStore as noStore } from "next/cache";
import qs from "qs";

import { flattenAttributes, getStrapiURL } from "@/lib/utils";
import { title } from "process";

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
  const authToken = null; // we will implement this later getAuthToken() later
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

export async function getBankPageData() {
  noStore();

  const url = new URL("/api/banking-page", baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
          title: title,
          ButtonLink: {
            populate: {
              text: title,
            },
          },
          Card: {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
          //   ImageCard: {
          //     populate: {
          //       image: {
          //         fields: ["url", "alternativeText"],
          //       },
          //     },
          //   },
          //   Section8Tags: {
          //     populate: {
          //       title,
          //     },
          //   },
          //   ContacUs: {
          //     populate: {
          //       title,
          //       ContactPerson: {
          //         populate: {
          //           name: title,
          //         },
          //       },
          //     },
          //   },
          //   FooterColumn1: {
          //     populate: {
          //       liinkHref: title,
          //       logo: {
          //         fields: ["url", "alternativeText"],
          //       },
          //     },
          //   },
          //   SocialLinks: {
          //     populate: {
          //       liinkHref: title,
          //       icon: {
          //         fields: ["url", "alternativeText"],
          //       },
          //     },
          //   },
          //   BackgroundImage: {
          //     fields: ["url", "alternativeText"],
          //   },
          //   Section3Card: {
          //     populate: {
          //       icon: {
          //         fields: ["url", "alternativeText"],
          //       },
          //     },
          //   },
          //   Section7Tags: {
          //     populate: {},
          //   },
          //   PeopleCard: {
          //     populate: {
          //       image: {
          //         fields: ["url", "alternativeText"],
          //       },
          //     },
          //   },
          //   HowWeEngage: {
          //     populate: {
          //       image: {
          //         fields: ["url", "alternativeText"],
          //       },
          //     },
          //   },
        },
      },
    },
  });

  return await fetchData(url.href);
}
export async function getTermsConditionPageData() {
  noStore();
  const url = new URL("/api/terms-and-condition", baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        populate: {
          TermsConditionHero: {
            populate: {
              title,
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
          TermsConditionContentBlocks: {
            populate: {
              title,
              description: title,
            },
          },
          TableoFContents: {
            populate: {
              title,
              icon: {
                fields: ["url", "alternativeText"],
              },
            },
          },
        },
      },
    },
  });

  return await fetchData(url.href);
}

export async function getTermsHeaderPageData() {
  noStore();
  const url = new URL("/api/header", baseUrl);
  url.search = qs.stringify({
    populate: {
      Header: {
        populate: {
          logo: {
            fields: ["url", "alternativeText"],
          },
          Link: {
            populate: {
              Label: title,
              LinkHref: title,
            },
          },
          Button: {
            populate: {
              Label: title,
              href: title,
            },
          },
        },
      },
    },
  });

  return await fetchData(url.href);
}
export async function getGlobalPageData() {
  noStore();

  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    populate: [
      "header.logoText",
      "header.ctaButton",
      "footer.logoText",
      "footer.socialLink",
    ],
  });

  return await fetchData(url.href);
}

export async function getGlobalPageMetadata() {
  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    fields: ["title", "description"],
  });

  return;
}

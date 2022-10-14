import { gql, GraphQLClient } from 'graphql-request';

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const query = gql`
    query {
      videos(where: { slug: "jaws" }) {
        createdAt
        id
        title
        description
        seen
        slug
        tags
        thumbnail {
          url
        }
        mp4 {
          url
        }
      }
    }
  `;
};

const Video = () => {
  return <div></div>;
};

export default Video;

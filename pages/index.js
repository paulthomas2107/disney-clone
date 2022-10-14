import {gql,GraphQLClient} from 'graphql-request'

export const getStaticProps = async () => {

  const url = "https://api-eu-west-2.hygraph.com/v2/cl98jijfv1qc201ue6h372osy/master"

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      "Authorization" : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjU3NjQ4MjAsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2w5OGppamZ2MXFjMjAxdWU2aDM3Mm9zeS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZTlkNWQ4MmYtNDc1Ny00OTRiLWJkMTAtZDczODIxYmYwNjZiIiwianRpIjoiY2w5OHBkNThsMXlqMTAxdW0wejlrOTRlNiJ9.nz3GIEqzOfs5R9u0wXEJe4tRdsXyxVsn351fUSd0xsBoqawvCTLVZNL32RcDIUkYkw9YSD6OIG8XMkC5yVnFvb9p0qR-l1Qr7dDDrGWL_F3JI-KNzHyggT-YYHdXVyRd6LC3XFx1crFD2ijoLObTdqYZVbSqRmHg51CuzCrctPnKXREfAOgG-slLBYahqQtl7hOhrlT3D9njrOesu6h7nBYdiOaCkQp2tmuZcCOr0hMRy4mf1ekdf0ysvt8U79k5nFVB92BrkiB81QlhLNpFm2cPx_j7R0msPfbyEzPTSPXqVLY7TwAEp2eKwDQ7SxrOLLwchlG1h9D7OG3zi7LkcYIUj6YET8OYiCYd98_CYk9bCvw6RBEzyyKZT9LCr6VSsEGmGoXVYkLEcwauefWpe08GSSDb3Czr1Gtw_ROBKW-MRnRGFLK987_dT1DULYIt8inXCxCGiZIO_WTwdR07Ap90n5np_l6JI7BAvz_jec117MtOdYP3aKAP5gzXqEjMlFsv4kF_eR8QwUgVEY8kge570jttSSaeGVPe1bf9qEe-POqo-EWodQBqyuTjdCLHH1sGKwGFXuBhQBBVgSLnNUGqMN8GxtE7SekGkNP3oP_MUATuk6s46Dirhb_BRZOo3E40E6MPmt0Y9vU55ho6PhMQeISJ-FVv1JGm66T67O4"
    }
  })

const query = gql`
query {
  videos {
    createdAt,
    id,
    title,
    description,
    seen,
    slug,
    tags,
    thumbnail {
      url
    },
    mp4 {
      url
    }
  }
}`

const data = await graphQLClient.request(query)
const videos = data.videos

console.log(data)

return {
  props: {
    videos
  }
}

}
const Home = ()  => {
  return (
    <div>
      Hello Paul !
    </div>
  )
}

export default Home
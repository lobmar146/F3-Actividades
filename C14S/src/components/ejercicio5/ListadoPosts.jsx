export default function ListadoPosts(props) {
  const { posts } = props

  return (
    <>
      {posts.map(post => (
        <div key={post.id}>
          <h3>
            {post.id}. {post.title}
          </h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  )
}

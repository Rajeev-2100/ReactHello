import "bootstrap/dist/css/bootstrap.min.css";

// props

export default function App() {
  return (
    <main className="container px-5">
      <h1>Latest Blogs</h1>
      <article>
        <h2>Blog 1</h2>
        <img src="https://placehold.co/600x400/EEE/31343C" className="img-fluid rounded" alt="blog 1" />
        <p>Posted on February 22, 2024 by John Doe</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </article>
      <article>
        <h2>Blog 2</h2>
        <img src="https://placehold.co/600x400@2x.png" alt="blog 2" />
        <p>Posted On Febrauary 18, 2024 by Alice Smith</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </article>
    </main>
  );
}


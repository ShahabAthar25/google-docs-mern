import Header from "../components/Header";

export default function settings({ docs, token }) {
  return (
    <div>
      <Header data={docs} token={token} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(`http://localhost:5000/api/docs/user/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: context.req.cookies.token,
    },
  });
  const docs = await response.json();

  return {
    props: {
      docs,
      token: context.req.cookies.token,
    },
  };
}

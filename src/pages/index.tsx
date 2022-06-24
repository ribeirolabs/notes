import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["get-notes"]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (data == null) {
    return null;
  }

  return (
    <div>
      <h1>Notes</h1>

      <ol>
        {data.map((note) => (
          <li key={note}>note</li>
        ))}
      </ol>
    </div>
  );
};

export default Home;

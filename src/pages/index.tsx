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
    <div className="prose">
      <h1>Notes</h1>

      <ul>
        {data.map((note) => (
          <li key={note}>note</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import SingleFileUploadForm from "../components/SingleFileUploadForm";

const Home: NextPage = () => {

  return (
    <div>
      <main className="py-10">
        <div className="w-full max-w-3xl px-3 mx-auto">

        <SingleFileUploadForm />
        </div>
      </main>
    </div>
  );
};

export default Home;
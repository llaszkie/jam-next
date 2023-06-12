import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Mountain = {
  title: string;
  description: string;
  image: string;
  height: string;
  continent: string;
};

export function Mountain() {
  const [mountain, setMountain] = useState({} as Mountain);
  const { mountainId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/mountains/${mountainId}`)
      .then((response) => response.json())
      .then((data) => setMountain(data));
  }, [setMountain, mountainId]);

  return (
    <article>
      <h3 className="p-5 text-lg text-center uppercase text-blue-900">
        {mountain.title}
      </h3>
      <img
        className="h-auto max-w-xl sm:rounded-lg shadow-xl mx-auto max-h-96 dark:shadow-gray-800"
        src={mountain.image}
        alt=""
      ></img>
      <p className="p-5 m-5">{mountain.description}</p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-5">
        <table className="w-full text-sm text-left ">
          <tbody>
            <tr className="border-b border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap  text-white bg-slate-600"
              >
                Height
              </th>
              <td className="px-6 py-4">{mountain.height}</td>
            </tr>
            <tr className="border-b -border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap  text-white bg-slate-600"
              >
                Continent
              </th>
              <td className="px-6 py-4">{mountain.continent}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
}

export default Mountain;

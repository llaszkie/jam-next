type Mountain = {
  title: string;
  description: string;
  image: string;
  height: string;
  continent: string;
};

async function getData(mountainId: string) {
  const res = await fetch(`http://localhost:3000/mountains/${mountainId}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Mountain({ mountainId }: { mountainId: string }) {
  const mountain: Mountain = await getData(mountainId);

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

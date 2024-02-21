type Mountain = {
  title: string;
  description: string;
  image: string;
  height: string;
  continent: string;
};

const fetchMountain = async (mountainId: string) => {
  console.log(`Fetching mountain: ${mountainId}`);
  const fetchResult = await fetch(`http://localhost:3000/mountains/${mountainId}`);
  if (!fetchResult.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch mountain data');
  }
  return fetchResult.json();
};

export default async function Mountain({ params }: {
  params: { mountainId: string };
}) {
  const { mountainId } = params;
  const mountain: Mountain = await fetchMountain(mountainId);

  return (
    <article>
      <h3 className="p-5 text-lg text-center uppercase text-green-900">
        {mountain.title}
      </h3>
      <img
        className="h-auto max-w-xl sm:rounded-lg shadow-xl mx-auto max-h-96 dark:shadow-gray-800"
        src={mountain.image}
        alt=""
      ></img>
      <p className="p-5 m-5">{mountain.description}</p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-10">
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

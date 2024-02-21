'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import Link from 'next/link';
import { fetchMountains } from './actions/fetchMountains';

export function Navigation() {
  const [inputValue, setInputValue] = useState<string>('');
  const [mountains, setMountains] = useState(
    [] as Array<{ title: string; id: string }>
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Function to handle the "submission" logic
  const handleSubmitLogic = async () => {
    console.log('Submitting value:', inputValue);
    const mountains = await fetchMountains(inputValue);
    setMountains(mountains);
  };

  // Debounce the submission logic
  const debouncedSubmit = debounce(handleSubmitLogic, 1000); // 1000 ms delay

  useEffect(() => {
    if (inputValue) {
      debouncedSubmit();
    }
    // Cleanup function to cancel the debounce if the component is unmounted
    return () => debouncedSubmit.cancel(); // If you're using lodash debounce, it provides a .cancel() method
  }, [inputValue]);

  return (
    <nav className="flex flex-col basis-1/4 bg-slate-300 bg-gradient-to-t from-slate-400 to-slate-50">
      <form className="p-5">
        <label className="font-light text-sm" htmlFor="search">Search:</label>
        <input className="border-2 rounded border-green-900 w-full font-light p-1 text-sm" id="search" type="text"
               value={inputValue} onChange={handleChange} />
      </form>
      <ul>
        {mountains.map((m) => (
          <li className="p-5" key={m.id}>
            <Link
              href={`/${m.id}`}
              className="text-green-900' underline"
              // className={({ isActive }) =>
              //   `${isActive ? 'text-red-800' : 'text-green-900'} underline
              //       ${isActive ? '' : 'hover:text-green-600'} `
              // }
            >
              {m.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

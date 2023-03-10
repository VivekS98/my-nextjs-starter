import type { RootState } from '@/store';
import { decrement, increment } from '@/store/slices/counter';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-screen'>
        <h1 className='mt-6 text-center text-3xl font-semibold text-slate-700'>NextJS with Typecsript and tailwindCSS starter</h1>
        <div className='h-full flex justify-center items-center'>
          <button
            className='m-2 py-2 px-4 bg-blue-500 rounded-md text-white hover:shadow-lg'
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span className='h-8 w-8 m-2 py-1 text-center rounded-full bg-slate-200'>{count}</span>
          <button
            className='m-2 py-2 px-4 bg-blue-500 rounded-md text-white hover:shadow-lg'
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </main>
    </>
  )
}

'use client'

const test1Cookie = (name: string) => {
  fetch(`https://test1.yixuanxu.com/cookie/test1${name}`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ name }),
  })
}

const test2Cookie = (name: string) => {
  fetch(`https://test2.yixuanxu.com/cookie/test2${name}`, {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({ name }),
  })
}

const localCookie = (name: string) => {
  fetch(`/cookie${name}`, {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({ name }),
  })
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div>Test 1 cookie</div>
        <button onClick={() => test1Cookie('/lax')}>Lax</button>
        <button onClick={() => test1Cookie('/strict')}>Strict</button>
        <button onClick={() => test1Cookie('/none')}>None</button>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div>Test 2 cookie</div>
        <button onClick={() => test2Cookie('/lax')}>Lax</button>
        <button onClick={() => test2Cookie('/strict')}>Strict</button>
        <button onClick={() => test2Cookie('/none')}>None</button>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div>Local cookie</div>
        <button onClick={() => localCookie('/lax')}>Lax</button>
        <button onClick={() => localCookie('/strict')}>Strict</button>
        <button onClick={() => localCookie('/none')}>None</button>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      
      </div>
    </main>
  )
}

import { Inter } from 'next/font/google'
import { useState } from 'react'
import svg2vectordrawable from 'svg2vectordrawable'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [svgValue, setSvgValue] = useState("");
  const [vectorValue, setVectorValue] = useState("");
  const [errorValue, setErrorValue] = useState("sfsdf");

  let options = {
    xmlTag: true
  }

  const handleInputChange = (e) => {
    const { value } = e.target;
    let svgCode = value;
    setSvgValue(svgCode);
    svg2vectordrawable(svgCode, options).then(xmlCode => {
      setVectorValue(xmlCode);
    }).catch(err => {
      setErrorValue(err)
    });
  }

  const handleCopyClick = (e) => {
    navigator.clipboard.writeText(vectorValue)
  }

  const handleClearClick = (e) => {
    setSvgValue("");
    setVectorValue("");
  }

  return (
    <main className={`min-h-screen flex-col items-center h-screen justify-between px-10  ${inter.className} bg-gray-200 overflow-hidden`} >
      <div className="flex flex-row align-middle space-x-3">
        <img src='./android_smiling.png' height="70px" width="70x"></img>
        <h1 className='text-2xl font-bold self-end'>SVG to Android Vector Asset</h1>
        <div className="grow"></div>
        {/*         <div className='self-end has-tooltip'>
          <span class='tooltip rounded shadow-lg p-1 bg-gray-800 text-white top-14'>Paste from clipboard</span>
          <button onClick={handlePasteClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
          </button>
        </div> */}
        <div className='self-end has-tooltip'>
          <span class='tooltip rounded shadow-lg p-1 bg-gray-800 text-white top-14'>Clear</span>
          <button onClick={handleClearClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>
        <div className='self-end has-tooltip'>
          <span class='tooltip rounded shadow-lg p-1 bg-gray-800 text-white top-14 right-7'>Copy vector</span>
          <button onClick={handleCopyClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
            </svg>
          </button>
        </div>
      </div>
      <h1 className='text-sm text text-red-500 py-1' value={errorValue}></h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col py-1">
          <textarea id="svginput" rows="10" onChange={handleInputChange} value={svgValue} className="text-gray-900 p-2.5 block h-[75vh] rounded-lg bg-gray-100" placeholder="write your svg code here"></textarea>
        </div>
        <div className="flex flex-col py-1">
          <textarea disabled id="vectoroutput" value={vectorValue} rows="10" className="text-gray-900 p-2.5 block h-[75vh] rounded-lg bg-gray-100" placeholder="output will go here"></textarea>
        </div>
      </div>
      <footer className="px-4 py-8">
        <div className="container flex flex-wrap mx-auto space-y-4 justify-end items-end sm:space-y-0">
          <ul className="flex flex-wrap space-x-3 items-end font-semibold">
            <li>
              <a target="_blank" href="https://github.com/YohannesTz/SVGtoVector">Project Repo</a>
            </li>
            <li>
              <a target="_blank" href="https://yohannestz.netlify.app/">Profile</a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/yohannesTz">Github</a>
            </li>
            <li>
              <a target="_blank" href="https://t.me/thoughts_when_its_raining">Telegram Channel</a>
            </li>
            <li>
              <a target="_blank" href="https://t.me/yohan_nes">Telegram</a>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  )
}

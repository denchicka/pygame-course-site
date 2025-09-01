
import React from 'react'
import Highlight,{defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'

function textFromChildren(children: React.ReactNode): string {
  if (children == null) return '';
  const arr = React.Children.toArray(children);
  return arr.map((c) => (typeof c === 'string' ? c : '')).join('');
}

export function CopyButton({text}:{text:string}){
  const[c,setC]=React.useState(false);
  return (<button onClick={async()=>{await navigator.clipboard.writeText(text);setC(true);setTimeout(()=>setC(false),1200)}} className='print:hidden text-xs border rounded px-2 py-1 hover:bg-gray-50'>{c?'Скопировано!':'Копировать'}</button>)
}

export default function CodeBlock({code,language='python',children}:{code?:string;language?:string;children?:React.ReactNode}){
  const src = (children ? textFromChildren(children) : (code ?? '')) as string;
  return (
    <div className='relative group'>
      <div className='absolute right-3 top-3 z-10'><CopyButton text={src}/></div>
      <Highlight {...defaultProps} code={src} language={language as any} theme={theme}>
        {({style,tokens,getLineProps,getTokenProps}) => (
          <pre style={style as any} className='overflow-x-auto rounded-xl border bg-gray-50 p-4 text-sm leading-6'>
            {tokens.map((line,i)=>(
              <div key={i} {...getLineProps({line})}>
                {line.map((token,key)=>(<span key={key} {...getTokenProps({token})}/>))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

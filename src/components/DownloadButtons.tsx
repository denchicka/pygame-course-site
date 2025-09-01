
import React from 'react'
import { withBase } from '../utils/withBase'

function CopyLink({ url }: { url: string }) {
  const [copied, setCopied] = React.useState(false);
  return (
    <button
      onClick={async () => { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1200); }}
      className="text-xs border rounded px-2 py-1 hover:bg-gray-50"
    >{copied ? 'Скопировано!' : 'Копировать ссылку'}</button>
  )
}

export default function DownloadButtons({ starterZip, finalZip }: { starterZip?: string; finalZip?: string }) {
  if (!starterZip && !finalZip) return null;
  const starterUrl = starterZip ? withBase(starterZip) : undefined;
  const finalUrl = finalZip ? withBase(finalZip) : undefined;

  return (
    <div className="print:hidden flex flex-col gap-2 flex-wrap">
      {starterUrl && (
        <div className="flex items-center gap-2 flex-wrap">
          <a href={starterUrl} download className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 border shadow-sm hover:shadow transition">⬇️ Скачать заготовку</a>
          <a href={starterUrl} className="text-xs text-blue-700 underline break-all">{starterUrl}</a>
          <CopyLink url={starterUrl} />
        </div>
      )}
      {finalUrl && (
        <div className="flex items-center gap-2 flex-wrap">
          <a href={finalUrl} download className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 border shadow-sm hover:shadow transition">⬇️ Скачать итоговый файл</a>
          <a href={finalUrl} className="text-xs text-blue-700 underline break-all">{finalUrl}</a>
          <CopyLink url={finalUrl} />
        </div>
      )}
    </div>
  );
}


import React, { useMemo, useState, useEffect } from 'react'
import PageHeader from './components/PageHeader'
import DownloadButtons from './components/DownloadButtons'
import Module00 from './modules/m00_Setup'
import Module02 from './modules/m02_Window'
import Module03 from './modules/m03_Background'
import Module04 from './modules/m04_Fps'
import Module05 from './modules/m05_Draw'
import Module06 from './modules/m06_Axes'
import Module07 from './modules/m07_Prefab'
import Module08 from './modules/m08_Rect'
import Module09 from './modules/m09_Move'
import Module10 from './modules/m10_Images'
import Module11 from './modules/m11_Sound'
import Module12 from './modules/m12_Quit'
import Module13 from './modules/m13_Events'
import Module14 from './modules/m14_Character'
import Module15 from './modules/m15_Input'
import Module16 from './modules/m16_Sprites'
import Module17 from './modules/m17_Cheatsheet'
import Module18 from './modules/m18_CommonErrors'

type ModuleType = { id: string; title: string; content: React.ReactNode; starterZip?: string; finalZip?: string }

export default function App(){
  const modules: ModuleType[] = useMemo(() => ([
    { id: 'm00', title: '0 · Подготовка окружения', content: <Module00/>, starterZip: 'downloads/starter/m00.zip', finalZip: 'downloads/final/m00.zip' },
    { id: 'm02', title: '2 · Создание окна', content: <Module02/>, starterZip: 'downloads/starter/m02.zip', finalZip: 'downloads/final/m02.zip' },
    { id: 'm03', title: '3 · Фон и flip', content: <Module03/>, starterZip: 'downloads/starter/m03.zip', finalZip: 'downloads/final/m03.zip' },
    { id: 'm04', title: '4 · FPS и delta-time', content: <Module04/>, starterZip: 'downloads/starter/m04.zip', finalZip: 'downloads/final/m04.zip' },
    { id: 'm05', title: '5 · Фигуры (draw)', content: <Module05/>, starterZip: 'downloads/starter/m05.zip', finalZip: 'downloads/final/m05.zip' },
    { id: 'm06', title: '6 · Оси X/Y', content: <Module06/>, starterZip: 'downloads/starter/m06.zip', finalZip: 'downloads/final/m06.zip' },
    { id: 'm07', title: '7 · Объекты из фигур', content: <Module07/>, starterZip: 'downloads/starter/m07.zip', finalZip: 'downloads/final/m07.zip' },
    { id: 'm08', title: '8 · pygame.Rect атрибуты', content: <Module08/>, starterZip: 'downloads/starter/m08.zip', finalZip: 'downloads/final/m08.zip' },
    { id: 'm09', title: '9 · Движение фигур', content: <Module09/>, starterZip: 'downloads/starter/m09.zip', finalZip: 'downloads/final/m09.zip' },
    { id: 'm10', title: '10 · Изображения', content: <Module10/>, starterZip: 'downloads/starter/m10.zip', finalZip: 'downloads/final/m10.zip' },
    { id: 'm11', title: '11 · Звук', content: <Module11/>, starterZip: 'downloads/starter/m11.zip', finalZip: 'downloads/final/m11.zip' },
    { id: 'm12', title: '12 · Закрытие окна', content: <Module12/>, starterZip: 'downloads/starter/m12.zip', finalZip: 'downloads/final/m12.zip' },
    { id: 'm13', title: '13 · Система событий', content: <Module13/>, starterZip: 'downloads/starter/m13.zip', finalZip: 'downloads/final/m13.zip' },
    { id: 'm14', title: '14 · Персонаж (картинки)', content: <Module14/>, starterZip: 'downloads/starter/m14.zip', finalZip: 'downloads/final/m14.zip' },
    { id: 'm15', title: '15 · Клавиши и мышь', content: <Module15/>, starterZip: 'downloads/starter/m15.zip', finalZip: 'downloads/final/m15.zip' },
    { id: 'm16', title: '16 · Спрайты и группы', content: <Module16/>, starterZip: 'downloads/starter/m16.zip', finalZip: 'downloads/final/m16.zip' },
    { id: 'm17', title: '17 · Итоговая шпаргалка', content: <Module17/>, starterZip: 'downloads/starter/m17.zip', finalZip: 'downloads/final/m17.zip' },
    { id: 'm18', title: '18 · Частые ошибки', content: <Module18/>, starterZip: 'downloads/starter/m18.zip', finalZip: 'downloads/final/m18.zip' },
  ]), []);

  const [activeId, setActiveId] = useState(modules[0].id);
  const activeModule = modules.find(m => m.id === activeId)!;

  useEffect(()=>{ document.title = `${activeModule.title} — PyGame методичка`; }, [activeModule.title]);

  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900'>
      <PageHeader title={activeModule.title} />
      <div className='max-w-7xl mx-auto px-4 py-6 print:px-0'>
        <div className='grid grid-cols-12 gap-6'>
          <aside className='col-span-12 lg:col-span-3 print:hidden'>
            <div className='sticky top-20 space-y-4'>
              <div className='rounded-2xl border p-3 bg-white shadow-sm'>
                <h2 className='text-lg font-semibold px-2 py-2'>Модули</h2>
                <nav className='space-y-1'>
                  {modules.map(m => (
                    <button key={m.id} onClick={()=>setActiveId(m.id)} className={`w-full text-left rounded-xl px-3 py-2 transition border ${activeId===m.id?'bg-blue-50 border-blue-300':'hover:bg-gray-50'}`}>{m.title}</button>
                  ))}
                </nav>
              </div>
              <div className='rounded-2xl border p-3 bg-white shadow-sm space-y-2'>
                <button onClick={()=>window.print()} className='print:hidden inline-flex items-center gap-2 rounded-2xl px-4 py-2 border shadow-sm hover:shadow transition'>🖨️ Распечатать страницу</button>
                <p className='text-xs text-gray-500'>При печати меню скрывается автоматически.</p>
              </div>
            </div>
          </aside>
          <main className='col-span-12 lg:col-span-9'>
            <article className='rounded-2xl border bg-white shadow-sm p-5 print:shadow-none print:border-0 print:p-0'>
              <div className='flex items-center justify-between gap-4'>
                <h2 className='text-2xl font-bold'>{activeModule.title}</h2>
                <div className='print:hidden'><button onClick={()=>window.print()} className='inline-flex items-center gap-2 rounded-2xl px-4 py-2 border shadow-sm hover:shadow transition'>🖨️ Распечатать страницу</button></div>
              </div>
              <div className='h-px bg-gray-200 my-4'/>
              <div className='prose max-w-none'>{activeModule.content}</div>
              <div className='h-px bg-gray-200 my-4'/>
              <DownloadButtons starterZip={modules.find(m=>m.id===activeId)?.starterZip} finalZip={modules.find(m=>m.id===activeId)?.finalZip}/>
            </article>
          </main>
        </div>
      </div>
      <style>{`@media print { header, aside, button, .print\:hidden { display: none !important; } main { width: 100% !important; } article { box-shadow: none !important; border: 0 !important; padding: 0 !important; } body { background: white !important; } }`}</style>
    </div>
  )
}

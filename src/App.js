import React, { useState, useMemo } from 'react';
import { 
  Anchor, Wind, Waves, Thermometer, Navigation, 
  Plus, Activity, Moon, Sun, TrendingUp,
  FileText, Ship, MapPin, Gauge
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function App() {
  const [nightMode, setNightMode] = useState(true);
  const [logs] = useState([
    { id: 1, tid: '4t 12m', fangstTonn: 6.1, art: 'Torsk', dybde: '315m', fart: '4.1kn' },
    { id: 2, tid: '3t 30m', fangstTonn: 4.2, art: 'Sei', dybde: '280m', fart: '3.9kn' },
    { id: 3, tid: '4t 45m', fangstTonn: 5.8, art: 'Torsk', dybde: '310m', fart: '4.3kn' },
  ]);

  const theme = nightMode ? {
    bg: 'bg-[#020617]',
    panel: 'bg-[#0f172a]/80 border-slate-800',
    text: 'text-slate-400',
    header: 'text-white',
    accent: 'text-cyan-400',
    chartFill: '#0891b2',
    grid: '#1e293b'
  } : {
    bg: 'bg-slate-50',
    panel: 'bg-white border-slate-200',
    text: 'text-slate-600',
    header: 'text-slate-900',
    accent: 'text-blue-600',
    chartFill: '#2563eb',
    grid: '#e2e8f0'
  };

  const chartData = useMemo(() => {
    return [...logs].reverse().map((l, i) => ({ name: `Haul ${i+1}`, tonn: l.fangstTonn }));
  }, [logs]);

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} p-4 md:p-8 transition-colors duration-500 font-sans`}>
      <div className="max-w-6xl mx-auto space-y-6">
        
        <header className={`${theme.panel} backdrop-blur-md p-6 rounded-[2rem] border flex justify-between items-center shadow-2xl`}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
              <Ship size={24} />
            </div>
            <div>
              <h1 className={`text-2xl font-black italic tracking-tighter uppercase leading-none ${theme.header}`}>EH 666 PORTAL</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">MS HAVØRN // OPERASJONELL</span>
              </div>
            </div>
          </div>

          <button onClick={() => setNightMode(!nightMode)} className={`p-3 rounded-2xl border transition-all ${theme.panel} hover:scale-110 shadow-lg`}>
            {nightMode ? <Sun className="text-amber-400" size={20} /> : <Moon className="text-slate-600" size={20} />}
          </button>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Vind NV', val: '14 m/s', icon: Wind, color: 'text-cyan-400' },
            { label: 'Bølger Hs', val: '2.8m', icon: Waves, color: 'text-blue-400' },
            { label: 'Sjøtemp', val: '6.2°C', icon: Thermometer, color: 'text-orange-400' },
            { label: 'Trålfart', val: '4.1 kn', icon: Gauge, color: 'text-emerald-400' },
          ].map((item, i) => (
            <div key={i} className={`${theme.panel} p-5 rounded-3xl border flex items-center gap-4`}>
              <item.icon size={24} className={item.color} />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">{item.label}</p>
                <p className={`text-lg font-bold ${theme.header}`}>{item.val}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className={`${theme.panel} lg:col-span-2 p-8 rounded-[2.5rem] border shadow-xl`}>
            <h3 className={`text-xs font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-2 ${theme.header}`}>
              <TrendingUp size={16} className={theme.accent} /> Fangsthistorikk
            </h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorTonn" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={theme.chartFill} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={theme.chartFill} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme.grid} vertical={false} />
                  <XAxis dataKey="name" stroke={nightMode ? "#475569" : "#94a3b8"} fontSize={10} hide />
                  <YAxis hide />
                  <Tooltip contentStyle={{ backgroundColor: nightMode ? '#0f172a' : '#fff', borderRadius: '16px', border: 'none' }} />
                  <Area type="monotone" dataKey="tonn" stroke={theme.chartFill} fillOpacity={1} fill="url(#colorTonn)" strokeWidth={4} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className={`${theme.panel} p-8 rounded-[2.5rem] border flex flex-col justify-center items-center text-center shadow-xl relative overflow-hidden`}>
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-40 mb-2">Total Fangst</p>
              <p className={`text-7xl font-black italic tracking-tighter ${theme.header}`}>
                16.1<span className="text-2xl ml-2 text-cyan-500 font-bold italic">T</span>
              </p>
            </div>
            <Anchor className="absolute -right-8 -bottom-8 w-40 h-40 opacity-5 -rotate-12" />
          </div>
        </div>

        <div className={`${theme.panel} rounded-[2.5rem] border overflow-hidden shadow-2xl`}>
          <div className="p-8 border-b border-inherit flex justify-between items-center">
            <h2 className={`text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-3 ${theme.header}`}>
              <FileText size={18} className="text-cyan-500" /> Haul-Logg // EH 666
            </h2>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold">
                <th className="p-6">Tid</th>
                <th className="p-6">Mengde</th>
                <th className="p-6">Dybde</th>
                <th className="p-6">Lokasjon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-inherit font-medium">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-cyan-500/5 transition-colors">
                  <td className={`p-6 font-mono text-lg font-bold ${theme.header}`}>{log.tid}</td>
                  <td className="p-6">
                    <span className={`text-xl font-black italic ${theme.accent}`}>{log.fangstTonn}t</span>
                    <span className="ml-2 text-[10px] opacity-40 uppercase">{log.art}</span>
                  </td>
                  <td className="p-6 font-mono opacity-60 italic">{log.dybde}</td>
                  <td className="p-6 text-[10px] font-bold opacity-60 uppercase tracking-widest">Herøy / Runde</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

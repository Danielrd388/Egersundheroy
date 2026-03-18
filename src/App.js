
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EH 666 Kontrollpanel</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #020617; }
        .glass { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); }
        .neon-text { text-shadow: 0 0 10px rgba(34, 211, 238, 0.5); }
    </style>
</head>
<body class="text-slate-100 p-8">

    <div class="max-w-6xl mx-auto space-y-6">
        <header class="glass p-6 rounded-[2rem] flex justify-between items-center shadow-2xl">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/40">
                    <span class="text-2xl">⚓</span>
                </div>
                <div>
                    <h1 class="text-2xl font-black italic tracking-tighter uppercase leading-none">EH 666 Control</h1>
                    <span class="text-[10px] text-cyan-400 font-bold tracking-[0.3em]">LIVE // MS HAVØRN</span>
                </div>
            </div>
            <div class="text-right">
                <p class="text-xs text-slate-500 uppercase font-bold">Posisjon</p>
                <p class="text-sm font-mono tracking-widest text-cyan-400">62.38° N, 5.60° Ø</p>
            </div>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="glass p-6 rounded-3xl border-l-4 border-cyan-500">
                <p class="text-xs font-bold text-slate-500 uppercase mb-2">Total Fangst i dag</p>
                <p class="text-4xl font-black tracking-tighter">16.1 <span class="text-sm text-cyan-400">TONN</span></p>
            </div>
            <div class="glass p-6 rounded-3xl border-l-4 border-blue-500">
                <p class="text-xs font-bold text-slate-500 uppercase mb-2">Vindstyrke v/ Runde</p>
                <p class="text-4xl font-black tracking-tighter">12 <span class="text-sm text-blue-400">m/s NV</span></p>
            </div>
            <div class="glass p-6 rounded-3xl border-l-4 border-purple-500">
                <p class="text-xs font-bold text-slate-500 uppercase mb-2">Bølgehøyde</p>
                <p class="text-4xl font-black tracking-tighter">2.8 <span class="text-sm text-purple-400">m Hs</span></p>
            </div>
        </div>

        <div class="glass rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div class="p-8 border-b border-white/5 flex justify-between items-center">
                <h2 class="text-xl font-bold uppercase tracking-tight">Aktivitetslogg</h2>
                <button class="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2 rounded-xl font-bold transition-all shadow-lg shadow-cyan-500/20">
                    + Ny registrering
                </button>
            </div>
            <table class="w-full text-left">
                <thead>
                    <tr class="bg-white/5 text-[10px] uppercase tracking-widest text-slate-500">
                        <th class="p-6">Tid i sjø</th>
                        <th class="p-6">Fangst</th>
                        <th class="p-6">Dybde</th>
                        <th class="p-6">Fart</th>
                        <th class="p-6">Status</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-white/5">
                    <tr class="hover:bg-cyan-500/5 transition-all">
                        <td class="p-6 font-mono text-lg">4t 12m</td>
                        <td class="p-6 font-black text-xl text-cyan-400">6.1t <span class="text-xs text-slate-500">Torsk</span></td>
                        <td class="p-6 text-slate-400 font-mono">315m</td>
                        <td class="p-6 text-slate-400 font-mono">4.1 kn</td>
                        <td class="p-6"><span class="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">OK</span></td>
                    </tr>
                    <tr class="hover:bg-cyan-500/5 transition-all">
                        <td class="p-6 font-mono text-lg">3t 30m</td>
                        <td class="p-6 font-black text-xl text-cyan-400">4.2t <span class="text-xs text-slate-500">Sei</span></td>
                        <td class="p-6 text-slate-400 font-mono">280m</td>
                        <td class="p-6 text-slate-400 font-mono">3.9 kn</td>
                        <td class="p-6"><span class="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full">VINSJ-VARSEL</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</body>
</html>
  );
}

<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EH 666 PORTAL - MS HAVØRN</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        .glass { background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(12px); }
        .haul-row:hover { background: rgba(6, 182, 212, 0.1); }
    </style>
</head>
<body class="bg-[#020617] text-slate-400 p-4 md:p-8 min-h-screen">

    <div class="max-w-6xl mx-auto space-y-6">
        
        <header class="glass border border-slate-800 p-6 rounded-[2rem] flex justify-between items-center shadow-2xl">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.92 1.56 5.44 3.93 6.94"/><path d="M12 10V4l4-2-4-1-4 1 4 2v6"/><path d="M12 4V1"/></svg>
                </div>
                <div>
                    <h1 class="text-2xl font-black italic tracking-tighter uppercase leading-none text-white">EH 666 PORTAL</h1>
                    <div class="flex items-center gap-2 mt-1 text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">
                        <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        MS HAVØRN // OPERASJONELL
                    </div>
                </div>
            </div>
            <div class="text-right hidden md:block">
                <p class="text-[10px] uppercase tracking-widest opacity-40">Posisjon</p>
                <p class="text-white font-mono">62.39'N / 05.28'E</p>
            </div>
        </header>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="glass border border-slate-800 p-5 rounded-3xl flex items-center gap-4">
                <div class="text-cyan-400 font-bold">Vind NV</div>
                <div>
                    <p class="text-[10px] uppercase tracking-widest opacity-40">Styrke</p>
                    <p class="text-lg font-bold text-white">14 m/s</p>
                </div>
            </div>

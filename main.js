document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const staffId = urlParams.get('staff') || 'yessika';
    const data = flipbookData[staffId];

    if (!data) {
        document.getElementById('flipbook').innerHTML = "<div class='p-10 bg-white text-center rounded-lg shadow-lg'>Data staff tidak ditemukan.</div>";
        return;
    }

    const flipbook = document.getElementById('flipbook');
    let html = "";
    let pageNum = 1;

    // Helper to wrap page content
    function wrapPage(content, isCover = false, isBack = false, noPageNum = false, cssVars = "") {
        let cls = "page";
        if (isCover) cls += " --cover";
        if (isBack) cls += " --back";
        
        let pNumContent = "";
        if (!isCover && !noPageNum) {
            pNumContent = `<div class="page-number">${pageNum++}</div>`;
        }

        return `<div class="${cls}" data-density="${isCover ? 'hard' : 'soft'}" style="${cssVars}">
                    ${content}
                    ${pNumContent}
                </div>`;
    }

    // Colors
    const coverColors = `--cover-bg: ${data.config.coverColor}; --cover-border: ${data.config.coverBorder};`;
    const backColors = `--back-bg: ${data.config.backColor}; --back-border: ${data.config.backBorder};`;

    // 1. Cover Depan
    html += wrapPage(`
        <div class="page-content justify-center items-center text-center !p-3">
            <div class="w-full h-full bg-white/95 rounded-lg border-4 border-dashed border-sky-400 p-4 flex flex-col justify-between relative overflow-hidden">
                <div class="absolute top-2 left-2 animate-spin" style="animation-duration: 10s;">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                </div>
                <div class="absolute bottom-3 right-3">
                    <img src="img/LogoSCI.png" alt="Star Champs Logo" class="w-8 h-8 md:w-10 md:h-10 object-contain opacity-90 drop-shadow-sm">
                </div>

                <div class="mt-6 z-10">
                    <div class="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 bg-blue-100 border-4 border-blue-400 rounded-full flex items-center justify-center shadow-md overflow-hidden transform -rotate-3">
                        ${data.profile.photo ? `<img src="${data.profile.photo}" alt="Profile" class="w-full h-full object-cover">` : `<span class="text-blue-600 font-heading font-bold text-2xl md:text-3xl">SC</span>`}
                    </div>
                    <h3 class="text-blue-700 font-heading font-bold text-xs md:text-sm bg-blue-50 inline-block px-3 py-1 rounded-full border border-blue-200">
                        ${data.profile.company}
                    </h3>
                </div>

                <div class="z-10 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                    <h1 class="font-heading font-bold mobile-title text-orange-500 mb-2" style="text-shadow: 1px 1px 0px #FDE047;">${data.profile.title}</h1>
                    <div class="h-1 w-16 bg-pink-400 mx-auto rounded-full my-3"></div>
                    
                    <p class="font-body text-gray-500 text-xs font-semibold mb-1">${data.profile.subtitle}</p>
                    <div class="bg-yellow-50 border-2 border-yellow-300 rounded-lg py-2 px-3 inline-block transform rotate-1">
                        <h2 class="font-heading text-lg md:text-xl text-yellow-700 font-bold">${data.profile.name}</h2>
                    </div>
                </div>

                <div class="mb-2 z-10">
                    <span class="bg-gray-100 text-gray-600 font-heading text-xs font-bold px-3 py-1.5 rounded-full">
                        ${data.profile.companyFullName}
                    </span>
                </div>
            </div>
        </div>
    `, true, false, true, coverColors);

    // 2. Balik Cover Depan
    html += wrapPage(`
        <div class="page-content bg-sky-200 flex justify-center items-center">
            <div class="grid grid-cols-4 gap-4 opacity-20 text-3xl">
                <span>⭐</span><span>🧩</span><span>🎨</span><span>🧸</span>
                <span>🧸</span><span>⭐</span><span>🧩</span><span>🎨</span>
                <span>🎨</span><span>🧸</span><span>⭐</span><span>🧩</span>
            </div>
        </div>
    `, true, false, true, coverColors);

    // 3. Messages
    if (data.messages) {
        data.messages.forEach(msg => {
            let paras = msg.content.map(p => `<p>${p}</p>`).join('');
            
            let timelineHtml = '';
            if (msg.timeline && msg.timeline.length > 0) {
                let eventsHtml = msg.timeline.map((event, idx) => `
                    <div class="relative pl-4 border-l-2 border-${msg.color}-300 mb-2.5 last:mb-0">
                        <div class="absolute w-2.5 h-2.5 bg-${msg.color}-500 rounded-full -left-[6px] top-1 border-2 border-white shadow-sm"></div>
                        <p class="font-body text-[10px] md:text-[12px] text-gray-700 leading-tight font-medium">${event}</p>
                    </div>
                `).join('');
                
                timelineHtml = `
                    <div class="mt-4 bg-${msg.color}-50 p-3 rounded-xl border border-${msg.color}-100 shadow-sm relative overflow-hidden">
                        <div class="absolute top-0 right-0 p-2 opacity-10 blur-[1px]">
                            <span class="text-4xl">🕰️</span>
                        </div>
                        <h4 class="font-heading font-bold text-${msg.color}-700 text-xs mb-3 flex items-center gap-1">
                            <span>Jejak Langkah</span>
                            <span class="text-[10px]">✨</span>
                        </h4>
                        <div class="space-y-1 relative z-10">
                            ${eventsHtml}
                        </div>
                    </div>
                `;
            }

            html += wrapPage(`
                <div class="page-content pt-6 relative">
                    <h2 class="font-heading text-xl md:text-2xl text-${msg.color}-600 font-bold mb-1 text-center">${msg.title}</h2>
                    <h3 class="font-body text-xs text-gray-500 text-center mb-4">${msg.subtitle}</h3>
                    
                    <div class="text-left font-body text-xs md:text-[14px] text-gray-800 space-y-3 mt-2 leading-relaxed">
                        ${paras}
                        
                        ${timelineHtml}

                        ${(msg.sender || msg.senderTitle) ? `
                        <div class="mt-6 text-right flex flex-col items-end">
                            ${msg.sender ? `<p class="font-heading font-bold text-gray-700 text-sm">${msg.sender}</p>` : ''}
                            ${msg.senderTitle ? `<p class="font-body text-[10px] text-gray-500">${msg.senderTitle}</p>` : ''}
                        </div>` : ''}
                    </div>
                </div>
            `);
        });
    }

    // 4. Stats
    if (data.stats) {
        let barsHtml = data.stats.bars.map(bar => `
            <div>
                <div class="flex justify-between text-xs md:text-sm font-bold text-${bar.color}-700">
                    <span>${bar.label}</span> <span>${bar.value}</span>
                </div>
                <div class="stat-bar-bg"><div class="stat-bar-fill bg-${bar.color}-400" style="width: ${bar.percent}%;"></div></div>
            </div>
        `).join('');

        let factsHtml = data.stats.funFacts.map(fact => `
            <div class="bg-${fact.color}-100 p-2 rounded-lg border border-${fact.color}-300 text-center shadow-sm ${fact.cols ? 'col-span-' + fact.cols : ''}">
                <span class="text-xl mb-1 block">${fact.icon}</span>
                <p class="text-[8px] md:text-[9px] text-gray-600 font-bold uppercase">${fact.title}</p>
                <p class="font-heading text-sm text-${fact.color}-700 font-bold">${fact.value}</p>
            </div>
        `).join('');

        html += wrapPage(`
            <div class="page-content relative">
                <h2 class="font-heading text-xl md:text-2xl text-orange-500 font-bold mb-4 text-center border-b-2 border-dotted border-orange-200 pb-2">📊 Raport Statistik</h2>
                <div class="space-y-4 font-body mobile-text-sm">
                    ${barsHtml}
                    <div class="grid grid-cols-2 gap-2 mt-4">
                        ${factsHtml}
                    </div>
                </div>
            </div>
        `);
    }

    // 5. Friends Messages (2 per page)
    // Ambil inisial nama asli (skip prefix Ms., Ci, Aa, Mr., Ibu, dll)
    function getInitial(name) {
        const prefixes = ['ms', 'mr', 'ci', 'aa', 'ibu', 'bpk', 'kak', 'om', 'tante'];
        const parts = name.trim().split(/\s+/);
        for (let part of parts) {
            const clean = part.toLowerCase().replace(/\./g, '');
            if (!prefixes.includes(clean)) {
                return part.replace(/\./g, '').charAt(0).toUpperCase();
            }
        }
        return parts[0].charAt(0).toUpperCase();
    }

    const foodEmojis = ['🍰', '🍦', '🍩', '🍪', '🍬', '🍭', '🍮', '🍱', '🍜', '🍣', '🍙', '🍘', '🍛', '🍲'];
    let foodIdx = 0;

    if (data.friends) {
        let i = 0;
        let pageNumDisp = 1;
        
        while (i < data.friends.length) {
            let chunk = [];
            // Jika sisa tinggal 3, gabungkan jadi satu halaman (permintaan user)
            if (data.friends.length - i === 3) {
                chunk = data.friends.slice(i, i + 3);
                i += 3;
            } else {
                chunk = data.friends.slice(i, Math.min(i + 2, data.friends.length));
                i += 2;
            }

            let makeFriend = (f) => {
                const emoji = foodEmojis[foodIdx % foodEmojis.length];
                foodIdx++;
                let avatarContent = `<span>${emoji}</span>`;
                let avatarClass = `friend-avatar bg-${f.color}-100 border-2 border-${f.color}-300 text-${f.color}-600 anim-wobble text-2xl`;

                return `
                <div class="flex gap-3 items-center ${f.flexReverse ? 'flex-row-reverse text-right' : ''}">
                    <div class="${avatarClass}">
                        ${avatarContent}
                    </div>
                    <div class="chat-bubble flex-1 !border-${f.color}-300">
                        <p class="font-body text-gray-700 mobile-text-sm leading-tight">${f.message}</p>
                        <p class="mt-1 text-xs font-heading font-bold text-${f.color}-600">— ${f.name}</p>
                    </div>
                </div>
                `;
            };

            let f1 = chunk[0];
            let pColor = f1.color;
            let decoIcon = (f1.icon) ? `<span class="absolute ${f1.iconPos} text-3xl opacity-50 transform ${f1.iconRotate}">${f1.icon}</span>` : '';
            
            let friendsHtml = chunk.map(f => makeFriend(f)).join('');

            let aiNoticeHtml = "";
            if (i >= data.friends.length) {
                aiNoticeHtml = `
                    <div class="mt-3 w-full text-center">
                        <div class="bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm inline-block transform -rotate-1 text-left">
                            <p class="font-body text-[8px] md:text-[10px] text-gray-600 font-medium italic">"hello ms. yessika just info kalo pesan pesan disini murni dari rekan rekan SCI dan bukannya hasil generate dari Ai lohhh"</p>
                            <p class="font-heading font-bold text-xs text-blue-500 mt-2 text-right">- epidd</p>
                        </div>
                    </div>
                `;
            }

            html += wrapPage(`
                <div class="page-content relative">
                    <h2 class="font-heading text-lg text-${pColor}-500 font-bold mb-4 text-center border-b-2 border-dotted border-${pColor}-200 pb-1">Pesan dari Tim Star Champs (${pageNumDisp++})</h2>
                    <div class="space-y-4 mt-2 mb-2">
                        ${friendsHtml}
                    </div>
                    ${aiNoticeHtml}
                    ${decoIcon}
                </div>
            `);
        }
    }

    // 6. Galleries
    if (data.galleries) {
        data.galleries.forEach((gal, index) => {
            let photosHtml = gal.photos.map(p => `
                <div class="photo-card tape-${p.tape}" style="transform: rotate(${p.rotate}deg);">
                    <img src="${p.url}" alt="${p.caption}" class="w-full aspect-square object-cover mb-1 border border-gray-200 rounded-sm">
                    <p class="font-body text-[7px] md:text-[9px] text-center font-bold text-gray-600 leading-tight">${p.caption}</p>
                </div>
            `).join('');

            let iconHtml = gal.icon ? `<span class="absolute ${gal.iconPos} text-3xl opacity-50 transform ${gal.iconRotate}">${gal.icon}</span>` : '';

            html += wrapPage(`
                <div class="page-content relative">
                    <h2 class="font-heading text-base md:text-lg text-${gal.color}-500 font-bold text-center mb-4 bg-${gal.color}-100 py-1 px-2 rounded-full border-2 border-${gal.color}-300 leading-tight">${gal.title}</h2>
                    <div class="grid grid-cols-2 gap-3 mt-1">
                        ${photosHtml}
                    </div>
                    ${iconHtml}
                </div>
            `);
        });
    }

    // 7. Closing Page
    if (data.closing) {
        html += wrapPage(`
            <div class="page-content flex flex-col justify-center items-center py-4">
                <div class="photo-card tape-${data.closing.photo.tape} mb-6" style="width: 75%; max-width: 260px; transform: rotate(${data.closing.photo.rotate}deg);">
                    <img src="${data.closing.photo.url}" alt="${data.closing.photo.caption}" class="w-full h-auto object-contain border border-gray-100 rounded-sm bg-gray-50 shadow-inner">
                    <p class="font-body text-[14px] md:text-[18px] text-center font-bold text-gray-600 mt-3 mb-1 px-1">${data.closing.photo.caption}</p>
                </div>

                <div class="text-center bg-green-50/80 p-4 border-2 border-dashed border-green-300 rounded-2xl shadow-sm backdrop-blur-[2px] w-full max-w-[95%]">
                    <h3 class="font-heading text-lg text-green-600 font-bold mb-2">${data.closing.title}</h3>
                    <p class="font-body text-xs md:text-sm text-gray-700 leading-relaxed font-medium">
                        ${data.closing.message}
                    </p>
                </div>
                
                <div class="text-center mt-6 mb-2">
                    <p class="font-heading text-blue-500 text-sm md:text-base font-bold italic">${data.closing.quote}</p>
                </div>
            </div>
        `);
    }

    // Tambahkan halaman kosong jika total halaman isi (pageNum-1) bernilai Ganjil (supaya jadi genap, cover belakang di posisi genap)
    if ((pageNum - 1) % 2 !== 0) {
        html += wrapPage(`<div class="page-content bg-paper flex place-content-center items-center opacity-30">
            <span class="text-4xl text-gray-300">🎉</span>
        </div>`, false, false, true);
    }

    // 8. Back Inner Cover
    html += wrapPage(`
        <div class="page-content bg-yellow-400 flex justify-center items-center">
            <span class="text-5xl opacity-20">🌟</span>
        </div>
    `, true, true, true, backColors);

    // 9. Back Cover
    html += wrapPage(`
        <div class="page-content justify-center items-center text-center !p-3">
            <div class="w-full h-full bg-yellow-50 rounded-lg border-4 border-dashed border-yellow-300 p-4 flex flex-col justify-center items-center relative overflow-hidden">
                <div class="w-14 h-14 bg-white border-2 border-yellow-400 rounded-full flex items-center justify-center mb-3 shadow-sm overflow-hidden p-1">
                    <img src="img/LogoSCI.png" alt="Logo Star Champs" class="w-full h-full object-contain">
                </div>
                <div class="bg-white/90 px-3 py-2 rounded-lg border border-yellow-200 mt-2 shadow-sm text-center">
                    <p class="text-gray-400 font-body text-[10px] font-bold uppercase mb-1">Dipublikasikan Oleh:</p>
                    <p class="text-yellow-700 font-heading text-md leading-tight">Manajemen</p>
                    <p class="text-yellow-600 font-heading text-[11px] mt-1">${data.profile.companyFullName}</p>
                </div>
                <p class="text-yellow-700/50 font-body text-[10px] mt-10 font-bold">&copy; 2026 ${data.profile.company}.</p>
            </div>
        </div>
    `, true, true, true, backColors);

    // Injeksi ke HTML
    flipbook.innerHTML = html;

    // Inisialisasi Page-Flip
    const isMobile = window.innerWidth < 768;
    const pageFlipInit = new St.PageFlip(flipbook, {
        width: isMobile ? 320 : 400, 
        height: isMobile ? 480 : 550,
        size: "stretch", 
        minWidth: 280,
        maxWidth: 450,
        minHeight: 400,
        maxHeight: 800, // ditingkatkan agar muat di HP panjang
        maxShadowOpacity: 0.15,
        showCover: true,
        mobileScrollSupport: false,
        usePortrait: isMobile
    });

    // Load nodes
    pageFlipInit.loadFromHTML(document.querySelectorAll('.page'));

    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    pageFlipInit.on('flip', (e) => {
        const currentPage = e.data;
        // Gunakan getPageCount untuk mendeteksi batas
        const pageCount = pageFlipInit.getPageCount();

        btnPrev.disabled = currentPage === 0;
        // Biasanya kurangi 2 untu landscape, 1 untuk portrait jika hardcover dihitung.
        btnNext.disabled = currentPage >= pageCount - (pageFlipInit.getOrientation() === 'landscape' ? 2 : 1);

        // Surprise Confetti di halaman terakhir
        if (currentPage >= pageCount - 2 && !window.hasFiredEndConfetti) {
            window.hasFiredEndConfetti = true;
            setTimeout(() => {
                if (typeof confetti === 'function') {
                    confetti({ particleCount: 200, spread: 120, zIndex: 1000, origin: {y: 0.5} });
                }
            }, 600);
        }
    });

    btnPrev.addEventListener('click', () => { pageFlipInit.flipPrev(); });
    btnNext.addEventListener('click', () => { pageFlipInit.flipNext(); });

    pageFlipInit.on('init', () => { btnPrev.disabled = true; });
    
    // Resize handling khusus agar tidak error saat resize device
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if(pageFlipInit) pageFlipInit.update();
        }, 100);
    });

    // --- LOGIKA SURPRISE KADO & BGM ---
    const introModal = document.getElementById('intro-modal');
    const btnOpenGift = document.getElementById('btn-open-gift');
    const bgm = document.getElementById('bgm');
    const btnMusic = document.getElementById('btn-music');
    let isMusicPlaying = false;

    if (btnOpenGift && introModal) {
        btnOpenGift.addEventListener('click', () => {
            // Animasi Confetti Awal
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 150,
                    spread: 80,
                    origin: { y: 0.6 }
                });
            }

            // Play music
            if (bgm) {
                bgm.volume = 0.5;
                bgm.play().then(() => {
                    isMusicPlaying = true;
                    btnMusic.style.display = 'block';
                }).catch(e => console.log("Audio play prevented", e));
            }

            // Transisi Hilang
            introModal.style.opacity = '0';
            setTimeout(() => {
                introModal.remove();
            }, 1000);
        });
    }

    if (btnMusic && bgm) {
        btnMusic.addEventListener('click', () => {
            if(isMusicPlaying) {
                bgm.pause();
                btnMusic.innerHTML = '🔇';
            } else {
                bgm.play();
                btnMusic.innerHTML = '🎵';
            }
            isMusicPlaying = !isMusicPlaying;
        });
    }


});

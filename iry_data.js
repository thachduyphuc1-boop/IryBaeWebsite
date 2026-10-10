/**
 * =========================================================================
 * IRY BAE — CENTRAL DATABASE & UNIFIED CMS ENGINE (IRY_CMS)
 * Single Source of Truth for all IRY web applications.
 * =========================================================================
 */

const IRY_DEFAULT_DATABASE = {
    // 1. Profile & Streamer Identity
    profile: {
        name: "iry bae ♡",
        nickname: "iry / bae / bé Miu",
        title: "Streamer • Content Creator • Digital Artist 🌸",
        tagline: "Streamer, Artist & Content Creator who loves dreamy pastel hues, cozy Lo-Fi tunes, and wholesome gaming moments with friends.",
        quote: '"if it\'s meant to be, it will be ✧ — Hãy luôn mỉm cười và tỏa sáng rực rỡ nhé! ♡"',
        fanbase: "ME♡WY Sanctuary",
        birthday: "12/10 🌸 (Thiên Bình)",
        hobbies: "Vẽ tranh, chơi minigames, nuôi mèo, nghe Lo-Fi",
        email: "booking@irybae.com",
        location: "Vietnam 🇻🇳",
        avatar: "../web source/image/avatar.jpg",
        avatar_fallback: "../irybae-vercel/assets/image/avatar.jpg",
        mascot: "../web source/image/download.png",
        mascot_fallback: "../irybae-vercel/assets/image/kitten.png",
        background_frame: "../irybae-vercel/assets/image/bg_artwork.png",
        background_fallback: "../item/Glow-Up Guide Website in Light Blue Beige Yellow Style (7).png"
    },

    // 2. Social Links & Community
    socials: {
        youtube: "https://youtube.com",
        tiktok: "https://tiktok.com",
        discord: "https://discord.gg/irybae",
        facebook: "https://facebook.com/irybae",
        instagram: "https://instagram.com/irybae",
        spotify: "https://spotify.com",
        booking_email: "mailto:booking@irybae.com"
    },
    social_links: [],

    // 3. Donate & Fan Support Info
    donate: {
        qr_data: "https://meowy-sanctuary.irybae.com/donate",
        bank_name: "MB Bank (Ngân hàng Quân Đội)",
        bank_account: "8888.6666.9999",
        bank_owner: "BUI THI IRY",
        momo_phone: "0987.654.321",
        momo_owner: "IRY BAE",
        note: "Cảm ơn mọi sự ủng hộ ngọt ngào từ các bạn! Mọi donate sẽ được dùng để nâng cấp góc stream và tổ chức giveaway cho ME♡WY! 💖",
        tier_badges: [
            { name: "Mầm Xanh", min: "20k", badge: "🌱" },
            { name: "Sen Hồng", min: "100k", badge: "🌸" },
            { name: "Ánh Sao", min: "500k", badge: "⭐" },
            { name: "Vương Miện Meowy", min: "1000k+", badge: "👑" }
        ]
    },

    // 4. Stories & 6-Chapter Interactive Journey
    chapters: {
        prologue: {
            badge: "✨ PROLOGUE",
            title: "iry bae ♡",
            quote: '"Chào mừng bạn đến với góc nhỏ của iry bae ♡!\nNơi tụi mình cùng nhau chơi những tựa game vui vẻ, lắng nghe những giai điệu Lo-Fi ấm áp và trò chuyện tâm sự mỗi buổi tối.\nCuộn xuống nhẹ nhàng để bắt đầu hành trình đáng yêu này nhé... 🌸✨"'
        },
        chapter1: {
            badge: "🌸 CHAPTER 01 • OUR STORY",
            title: "About iry bae ♡",
            desc: "Chào mừng bạn đến với góc nhỏ của iry bae! Nơi tụi mình cùng nhau chơi những tựa game vui vẻ, lắng nghe những giai điệu Lo-Fi ấm áp và trò chuyện tâm sự mỗi buổi tối. Cảm ơn bạn đã luôn là một phần tuyệt vời của đại gia đình ME♡WY Sanctuary! 🌸",
            quote: '"if it\'s meant to be, it will be ✧ — Hãy luôn mỉm cười và tỏa sáng rực rỡ nhé! ♡"'
        },
        chapter2: {
            badge: "🎮 CHAPTER 02 • PLAY WITH ME",
            title: "Game Highlights & Streams",
            desc: "Click bất kỳ tựa game dễ thương bên dưới để xem lại những khoảnh khắc gameplay tấu hài và highlight đáng nhớ cùng viewer nhé!"
        },
        chapter3: {
            badge: "🎶 CHAPTER 03 • SOUND OF DREAMS",
            title: "Cozy Melodies & Lo-Fi Sanctuary",
            desc: "Bản nhạc thư giãn mỗi chiều trà thơm, góc vẽ tranh chibi và những đêm livestream ấm áp cùng đại gia đình ME♡WY:"
        },
        chapter4: {
            badge: "💌 CHAPTER 04 • SWEET NOTE",
            title: "A Letter To You",
            letter: '"Gửi những người bạn đáng yêu của iry bae..."',
            desc: "Cảm ơn các bạn rất nhiều vì đã ghé thăm góc nhỏ bình yên này. Chúc bạn luôn có những ngày ngập tràn niềm vui, ánh nắng ấm áp và những nụ cười thật ngọt ngào! Mãi yêu ME♡WY Sanctuary 🌷✨"
        },
        epilogue: {
            badge: "💖 EPILOGUE • A WISH FOR YOU",
            title: "Keep Going & Shine Bright! ✨",
            quote: '"Dù hôm nay có mệt mỏi hay nhiều thử thách đến đâu, hãy luôn nhớ rằng bạn là một điều vô cùng đặc biệt.\nCứ vững bước tiến lên, ước mơ của bạn sẽ nở rộ rực rỡ như những đóa hoa anh đào ngọt ngào nhất! ♡"'
        }
    },

    // 5. Featured Games & Streams
    games: [
        {
            id: "roblox",
            name: "Roblox",
            badge_icon: "fa-shapes",
            badge_color: "thumb-roblox",
            title: "Roblox Party & Minigames",
            desc: "Những buổi tối quẩy minigames vui nhộn cùng viewer: Dress To Impress, trốn tìm kinh dị, chạy trốn meme và custom room cùng fan!",
            tags: ["🎮 Minigames", "👗 Dress To Impress", "👥 Chơi Cùng Viewer"],
            youtube_embed: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        },
        {
            id: "valorant",
            name: "Valorant",
            badge_icon: "fa-crosshairs",
            badge_color: "thumb-valorant",
            title: "Valorant Clutch & Custom Room",
            desc: "Những pha bắn clutch thót tim, giáo án leo rank tấu hài cùng bạn bè và các trận custom giao lưu cùng đại gia đình ME♡WY.",
            tags: ["🎯 Rank Competitive", "⚔️ Custom 5v5", "😂 Funny Moments"],
            youtube_embed: "https://www.youtube.com/embed/fJ9rUzIMcZQ?autoplay=1"
        },
        {
            id: "minecraft",
            name: "Minecraft",
            badge_icon: "fa-cubes",
            badge_color: "thumb-minecraft",
            title: "Minecraft Cottage & Cozy Farm",
            desc: "Xây dựng ngôi làng hoa pastel bình yên, kiến trúc lâu đài cổ tích và những buổi sinh tồn survival thư giãn cùng âm nhạc lofi.",
            tags: ["🌸 Cottagecore Build", "🏡 Survival Server", "🎶 Lofi Relax"],
            youtube_embed: "https://www.youtube.com/embed/kJQP7kiw5Fk?autoplay=1"
        },
        {
            id: "genshin",
            name: "Genshin",
            badge_icon: "fa-wand-magic-sparkles",
            badge_color: "thumb-genshin",
            title: "Genshin Gacha & Khám Phá Teyvat",
            desc: "Khám phá cốt truyện, chu du thế giới mở Teyvat và những màn roll nhân vật gacha hồi hộp đau tim cùng kênh chat.",
            tags: ["✨ Gacha Banner", "🗺️ Khám Phá Cốt Truyện", "💖 Waifu & Husbando"],
            youtube_embed: "https://www.youtube.com/embed/3JZ_D3ELwOQ?autoplay=1"
        },
        {
            id: "lol",
            name: "LoL Party",
            badge_icon: "fa-shield-heart",
            badge_color: "thumb-valorant",
            title: "League of Legends ARAM Fun",
            desc: "Những trận ARAM xả stress cuối tuần quẩy skill tưng bừng cùng các bạn trong Discord ME♡WY.",
            tags: ["⚔️ ARAM Party", "🛡️ Custom 5v5", "✨ Lên Đồ Dị"],
            youtube_embed: "https://www.youtube.com/embed/2g811Eo7K8U?autoplay=1"
        },
        {
            id: "stardew",
            name: "Stardew",
            badge_icon: "fa-seedling",
            badge_color: "thumb-minecraft",
            title: "Stardew Valley Farm Tour",
            desc: "Trồng hoa, nuôi bò gà và trang trí nông trại bốn mùa thư giãn cùng các tình yêu.",
            tags: ["🌻 Farm Life", "🌾 Cozy Game", "🍰 Nấu Ăn"],
            youtube_embed: "https://www.youtube.com/embed/ot7uXNQskDU?autoplay=1"
        }
    ],

    // 6. Artworks & Illustrations Showcase
    artworks: [
        {
            id: "art-sakura",
            title: "Trà Chiều Sakura 🌸",
            sub: "Minh họa chibi phong cách anime pastel thư giãn",
            tag: "Chibi Illustration",
            bg_color: "#FFE4E6",
            text_color: "#E11D48",
            icon: "fa-mug-hot"
        },
        {
            id: "art-rabbit",
            title: "Thỏ Con Ánh Sao ⭐",
            sub: "Bộ emote biểu cảm cute dành cho hội viên kênh",
            tag: "Emote Set Discord",
            bg_color: "#FEF3C7",
            text_color: "#D97706",
            icon: "fa-star"
        },
        {
            id: "art-room",
            title: "Góc Stream Ấm Áp ☕",
            sub: "Phòng stream lofi ban đêm với mèo cưng và đèn neon",
            tag: "Stream Background",
            bg_color: "#E0E7FF",
            text_color: "#4338CA",
            icon: "fa-couch"
        },
        {
            id: "art-garden",
            title: "Khu Vườn Mộng Mơ 🌿",
            sub: "Hình nền điện thoại & PC hoa lá tone xanh mát",
            tag: "Wallpaper 4K",
            bg_color: "#D1FAE5",
            text_color: "#059669",
            icon: "fa-seedling"
        },
        {
            id: "art-parfait",
            title: "Ly Parfait Dâu 🍨",
            sub: "Huy hiệu fan cứng và cấp bậc donate trên stream",
            tag: "Loyalty Badges",
            bg_color: "#FCE7F3",
            text_color: "#DB2777",
            icon: "fa-ice-cream"
        },
        {
            id: "art-wand",
            title: "Bộ Đũa Phép Thuật ✨",
            sub: "Hiệu ứng pop-up thông báo donate & follow động",
            tag: "Stream Alert FX",
            bg_color: "#EDE9FE",
            text_color: "#7C3AED",
            icon: "fa-wand-magic-sparkles"
        }
    ],

    // 7. Lo-Fi Playlist & Music Tracks
    music: [
        {
            title: "Sakura Afternoon Beats",
            subtitle: "Lo-Fi Hip Hop / Chillhop",
            youtube_embed: "https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1",
            icon: "compact-disc"
        },
        {
            title: "Dreamy Piano Garden",
            subtitle: "Cozy Peaceful Melodies",
            youtube_embed: "https://www.youtube.com/embed/ot7uXNQskDU?autoplay=1",
            icon: "music"
        },
        {
            title: "Moonlight Whispers",
            subtitle: "Aesthetic Lofi Beats for Sleep",
            youtube_embed: "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1",
            icon: "moon"
        }
    ],

    // 8. PC Specs & Creative Tools
    specs: {
        devices: [
            "CPU: Intel Core i7-13700K",
            "GPU: RTX 4070 Ti 12GB",
            "RAM: 32GB DDR5 6000MHz",
            "Màn hình: 2x 27\" 2K 165Hz IPS",
            "Mic: Shure MV7 Podcast Mic",
            "Camera: Sony ZV-E10",
            "Bàn vẽ: iPad Pro 12.9\" M2",
            "Phần mềm: OBS Studio • VTube Studio"
        ],
        software: [
            "Clip Studio Paint EX",
            "Procreate",
            "Adobe Photoshop",
            "Adobe Premiere Pro",
            "Adobe After Effects",
            "Figma UI/UX"
        ]
    },

    // 9. Frequently Asked Questions & Chat Rules
    faqs: [
        {
            q: "1. Lịch livestream của iry bae vào những ngày nào?",
            a: "Mình thường livestream từ Thứ 3 đến Chủ Nhật vào khung giờ 19:30 - 23:00 tối. Lịch cụ thể hàng tuần sẽ được thông báo trên kênh Discord và Fanpage!"
        },
        {
            q: "2. Mình có thể chơi game chung cùng streamer không?",
            a: "Tất nhiên rồi! Vào mỗi buổi tối Thứ 6 và Chủ Nhật, mình sẽ mở phòng Custom (Roblox, Valorant, Minecraft, ARAM) để giao lưu cùng viewer. Bạn nhớ vào Discord để nhận thông báo phòng nhé!"
        },
        {
            q: "3. Nội quy khung chat livestream là gì?",
            a: "Hãy giữ lịch sự, hòa nhã và tôn trọng lẫn nhau. Không spam, không bàn luận chính trị/tôn giáo, không toxic hay spoil game trước khi mình yêu cầu gợi ý nha!"
        },
        {
            q: "4. Quyền lợi của Hội viên / Sub kênh là gì?",
            a: "Hội viên sẽ nhận được huy hiệu chibi cạnh tên chat, kho emote độc quyền, role riêng trong Discord và ưu tiên slot trong các buổi custom game!"
        },
        {
            q: "5. Muốn gửi quà hoặc liên hệ hợp tác ở đâu?",
            a: "Mọi lời mời hợp tác xin vui lòng gửi về email booking@irybae.com. Đối với quà fan tặng, các bạn nhắn tin qua Fanpage để được hỗ trợ địa chỉ hòm thư nhé!"
        }
    ],

    // 10. Mascot Quotes (Giọng thoại thuần Việt của Bé Mèo Cưng)
    mascot_quotes: [
        "Meow! Chào mừng các bạn đến với góc stream của iry bae ✨",
        "Tối nay 19:30 tụi mình có hẹn trên livestream nhé! 🌸",
        "Bấm vào nút ngôi sao ở giữa để mở QR Donate & Quà nè ⭐",
        "Nhớ uống đủ nước và giữ ấm nha các tình yêu! 🍵",
        "Cảm ơn các bạn đã luôn ủng hộ Meowy Sanctuary! 💖",
        "Bấm thử các icon trên desktop để nghe âm thanh retro cute! 🎶",
        "Hôm nay của bạn thế nào rồi? Cố gắng lên nhé! 🌷"
    ]
};

/**
 * Centralized IRY_CMS Client Engine
 */
class IryCmsEngine {
    constructor() {
        this.data = JSON.parse(JSON.stringify(IRY_DEFAULT_DATABASE));
        this.dataSourceUrl = window.IRY_CMS_URL || '';
        this.isLoaded = false;
    }

    get(path, defaultVal = null) {
        if (!path) return this.data;
        const keys = path.split('.');
        let current = this.data;
        for (const k of keys) {
            if (current && typeof current === 'object' && k in current) {
                current = current[k];
            } else {
                return defaultVal;
            }
        }
        return current;
    }

    async init(options = {}) {
        if (options.url) this.dataSourceUrl = options.url;

        // 1. Kiểm tra cache localStorage
        try {
            const cached = localStorage.getItem('IRY_CMS_CACHE');
            if (cached) {
                const parsed = JSON.parse(cached);
                this.mergeData(parsed);
            }
        } catch (e) {
            console.warn('[IRY_CMS] Cache read error:', e);
        }

        // 2. Fetch remote nếu có URL Google Apps Script
        if (this.dataSourceUrl) {
            try {
                const res = await fetch(this.dataSourceUrl);
                if (res.ok) {
                    const remoteData = await res.json();
                    this.mergeData(remoteData);
                    try {
                        localStorage.setItem('IRY_CMS_CACHE', JSON.stringify(remoteData));
                    } catch (e) {}
                    console.info('[IRY_CMS] Synchronized remote data successfully!');
                }
            } catch (err) {
                console.warn('[IRY_CMS] Remote fetch failed, using local database:', err);
            }
        }

        this.isLoaded = true;
        this.applyToDOM();
        window.dispatchEvent(new CustomEvent('iry:data-ready', { detail: this.data }));
        return this.data;
    }

    mergeData(incoming) {
        if (!incoming || typeof incoming !== 'object') return;
        if (incoming.profile) Object.assign(this.data.profile, incoming.profile);
        if (incoming.socials) Object.assign(this.data.socials, incoming.socials);
        if (incoming.social_links && Array.isArray(incoming.social_links)) this.data.social_links = incoming.social_links;
        if (incoming.donate) Object.assign(this.data.donate, incoming.donate);
        if (incoming.chapters) Object.assign(this.data.chapters, incoming.chapters);
        if (incoming.games && incoming.games.length) this.data.games = incoming.games;
        if (incoming.artworks && incoming.artworks.length) this.data.artworks = incoming.artworks;
        if (incoming.music && incoming.music.length) this.data.music = incoming.music;
        if (incoming.specs) Object.assign(this.data.specs, incoming.specs);
        if (incoming.faqs && incoming.faqs.length) this.data.faqs = incoming.faqs;
        if (incoming.mascot_quotes && incoming.mascot_quotes.length) this.data.mascot_quotes = incoming.mascot_quotes;
    }

    applyToDOM() {
        // Trigger custom page-specific render function if exists (Backward compatibility)
        if (typeof window.applyData === 'function') {
            window.applyData(this.data);
        }

        // Auto-update text bindings: [data-iry-text="profile.name"]
        document.querySelectorAll('[data-iry-text]').forEach(el => {
            const key = el.getAttribute('data-iry-text');
            const val = this.get(key);
            if (val !== null && val !== undefined) el.textContent = val;
        });

        // Auto-update href bindings: [data-iry-href="socials.youtube"]
        document.querySelectorAll('[data-iry-href]').forEach(el => {
            const key = el.getAttribute('data-iry-href');
            const val = this.get(key);
            if (val) el.href = val;
        });

        // Auto-update src bindings: [data-iry-src="profile.avatar"]
        document.querySelectorAll('[data-iry-src]').forEach(el => {
            const key = el.getAttribute('data-iry-src');
            const val = this.get(key);
            if (val) el.src = val;
        });
    }
}

// Global Singleton Instance
window.IRY_CMS = new IryCmsEngine();

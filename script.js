/* --- GAME DATABASE --- */
const gamesData = [
    // --- ORIGINAL GAMES ---
    { title: "Subway Surfers", cat: "Arcade", img: "https://cdn.akamai.steamstatic.com/steam/apps/1422050/header.jpg", url: "https://mysticgames.netlify.app/games/subway/" },
    { title: "Strong Man Sim", cat: "Funny", img: "https://img.itch.zone/aW1hZ2UvOTEyNDg1NS85MDk5MTMxLnBuZw==/original/zfN%2BSn.webp", url: "https://script.google.com/macros/s/AKfycbxLkugSSEdQm0qJQ4PZWRce6p8pKpuPdLIFeivG0cMt-QmjEjedBCarzz_kd2tlvxzs/exec" },
    { title: "Steal a Brainrot", cat: "Funny", img: "https://img.itch.zone/aW1hZ2UvMTcwMjc4NjMvODk3MjU2MC5wbmc=/original/C4XGwN.webp", url: "https://script.google.com/macros/s/AKfycbytsGAlf3lPg4Po7HvAheHvyJKxYRA4ZYPUGjjjMpZafajZs3F5pu7E5BekDXlNhRHUFw/exec" },
    { title: "Grow a Garden", cat: "Funny", img: "https://img.itch.zone/aW1hZ2UvMTU4MTk5OC84OTkwODkucG5n/original/5YzfY5.webp", url: "https://script.google.com/macros/s/AKfycbwK_YDMKEccZyVOz_fpe66G4Je4VyFPdT10OdaKpM699Utzbq41n2m6OXqAzpX0oqrLTA/exec" },
    { title: "Snow Rider 3D", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMTQyNzAzNjcvMS5wbmc=/original/2Md%2FK6.webp", url: "https://script.google.com/macros/s/AKfycbw5Z-Ryg_JfIIDYH7pzzPKXlr2tN0HCw-tT_ZvxBGDPsDDY41ewPVneVeLzelfpnBab/exec" },
    { title: "Crash Carts", cat: "Action", img: "https://img.itch.zone/aW1hZ2UvMTUwMzIwNzMvMzE0MzkwLnBuZw==/original/nMZdFe.webp", url: "https://script.google.com/macros/s/AKfycbx63iRe5mtf5PQGIn_eGwKePxCA1iU6w-YApn57Mh4phi2ZB-G-GCJA1YTV9jKrwoqb/exec" },
    { title: "Nugget Clicker", cat: "Clicker", img: "https://img.itch.zone/aW1hZ2UvMjA4NDcwOS84MDk5NzAzLnBuZw==/original/%2B%2BOKDHs.webp", url: "https://script.google.com/macros/s/AKfycbzjgnGGeTNL2DTjJzVx3WGvsLjEyA47O6xYss-ijTLWWwrQv9siK9Gn_QqNDlDkrc27/exec" },
    { title: "Cookie Clicker", cat: "Clicker", img: "https://img.itch.zone/aW1hZ2UvMjE2NzA5LzEwMzE2NjYucG5n/original/mZ0LDI.webp", url: "https://script.google.com/macros/s/AKfycbxGM35J29NkO-2LYjxWj_cA9IUaaXypkUy-LqXyLRbGTz0R6lXmAEapz1STN1jlTIRavw/exec" },
    { title: "Pixel Shooter", cat: "Action", img: "https://img.itch.zone/aW1hZ2UvMTg4NDk4NS8xNDc5Mjc0NC5wbmc=/original/vjHR5F.webp", url: "https://script.google.com/macros/s/AKfycbzBG3iwMy-Kdz3gY7oQSBugoIGwmA-IWITNrA8j1vX5ytZQHcKTS-61QLSpA5ixBJ2U/exec" },
    { title: "Bitlife", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMTQwOTM1MC8xMDkwMzQ3LnBuZw==/original/j0SJJe.webp", url: "https://script.google.com/macros/s/AKfycbz7YQScNBizgtxyn4DO7v12IQTI4nqwQc8srdlN30uZWw5BxWdIr2TPoMRC_8yQQKC7/exec" },
    { title: "Space Bar Clicker", cat: "Clicker", img: "https://img.itch.zone/aW1hZ2UvMTI2NzE0NzUvMzg5NTk3OS5wbmc=/original/L0gXvE.webp", url: "https://script.google.com/macros/s/AKfycbzZN3jRO2eOgcp622_W0GYAeArMio71AmlfRhF8yFucC5hEbRnDFZ3NLiN8peebEdlhWw/exec" },
    { title: "Poop Clicker", cat: "Clicker", img: "https://img.itch.zone/aW1hZ2UvODAxNzQyLzEzMDAwODQucG5n/original/9rPMDl.webp", url: "https://script.google.com/macros/s/AKfycbzDdetO4NX5twY1pU389ZUG2M9DERmoV0DeJNJS7SvzVIdA1WUaBeIeHo_CfQVNw2gq6g/exec" },
    { title: "Spider Man", cat: "Action", img: "https://img.itch.zone/aW1hZ2UvODI4Nzk1MS8xMDU0MjA0Ny5wbmc=/original/K7U0Jt.webp", url: "https://script.google.com/macros/s/AKfycbwAoMJxFkkCGbz6H0x2lq5uVhb1vvQRKraex1znydX5Gm0jWse3HWUTvdU34ghoPqQauQ/exec" },
    { title: "Slope 2", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMjI1NzM3OS83OTAyMjM3LnBuZw==/original/6aZKPz.webp", url: "https://sites.google.com/view/slpe-2-player/" },
    { title: "Slither IO", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMTE0MjA2My8xNzE5MjUwLnBuZw==/original/7DFo0P.webp", url: "https://script.google.com/macros/s/AKfycbwXhPAppqZUy69d6b26B3Z6daQdZmzPsiaSsywQseSBMh94FLNnVTmupJqtonwt9oaQLw/exec" },
    { title: "Paper IO", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvOTg0MzY1OC8yNzY4NzYzLnBuZw==/original/RGWLSV.webp", url: "https://script.google.com/macros/s/AKfycbwNxCzUuQVmLRWTwYK2D4yTqpWg2O-qge8BwCkxhLmqWd1DtXynwJXPEDClPt7ERZr-/exec" },
    { title: "Eaglercraft", cat: "Action", img: "https://img.itch.zone/aW1hZ2UvMTk5MjY2Mi8xMDE1ODA1MS5wbmc=/original/BmV1On.webp", url: "https://www.google.com/url?q=https%3A%2F%2Fmysticgames.netlify.app%2Fgames%2Feaglercraft%2Fdragonx_v4%2520%281%29" },
    { title: "Noob Miner", cat: "Clicker", img: "https://img.itch.zone/aW1hZ2UvMjA0NjA4NC8xNjE2MzI5Ny5wbmc=/original/IQKfnS.webp", url: "https://script.google.com/macros/s/AKfycbxkvPO4mEcWEk5a9TgEuR7qyiYZs7hL80XF5pwK8QMKHqmA7qUqxvIePB3PF9c3Bqc93w/exec" },
    { title: "Drift Boss", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMjA4NzQ5MC84MDk5NzM0LnBuZw==/original/0Uz5cG.webp", url: "https://script.google.com/macros/s/AKfycbwAOi2tPbjzeWDkigfZMIPEGubYxz2la_qjxJyydNZyjwgbqsv9mv05g7tdmLHdvdaw/exec" },
    { title: "Hole IO", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMjI2Mzg1Ni84MDk3NjMwLnBuZw==/original/Z0LSWC.webp", url: "https://script.google.com/macros/s/AKfycbwSQ0aXrXdz23Z0adlljZLtt6EGzD7max6U15OnUFBxhQmht6KK7l7RzsVo2wOdkoXR/exec" },
    { title: "Death Run 3D", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMjI0Njc1Ni84MDk4MzI0LnBuZw==/original/wXQPXP.webp", url: "https://script.google.com/macros/s/AKfycbwqW4kBl41CHKxAW1aOCzUllnCGaK6LDmkZfAZH_dJzu646nns5bRfn0oqa5Zpq9zEI/exec" },
    { title: "FNAF", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvNDIwNTI4LzcyMjQ4NzcucG5n/original/L47%2BVV.webp", url: "https://script.google.com/macros/s/AKfycbxJNtrKTWPCSIo9tOqq53G2xqoQCIPDTYUsVOT79Eqk8I7C5cQkGdDnj0jzlNHa7bvs3g/exec" },
    { title: "TABS", cat: "Clicker", img: "https://img.itch.zone/aW1hZ2UvMTQwNzg3Ni81MDc2MjYzLnBuZw==/original/1EQlYJ.webp", url: "https://script.google.com/macros/s/AKfycbx-20sK1Vv2W5l1l4NnyzA67dCLHiWUNOnwlGioOx9yKXkauoZt5H7l6il14wlLS9hI4A/exec" },
    { title: "Basketball Stars", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMjA2MDQzNy84MDk2OTAyLnBuZw==/original/d%2BKSbX.webp", url: "https://script.google.com/macros/s/AKfycbwzYMDDcdDUAvEP7iO6OdRk-5_oUp6vYvDdyEEz8tTOzWi5y4-Qf3vQ6TBoZuc9UYVcLg/exec" },
    { title: "Basket Random", cat: "Arcade", img: "https://via.placeholder.com/400x225.png?text=Basket+Random", url: "https://hfmanor.com/basket-random" },
    { title: "Retro Bowl", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvODEzOTMxLzM3OTE4MDUucG5n/original/3CnKLa.webp", url: "https://bav1.wadmc.site.cdn.cloudflare.net/pages/other/interpreter/index.html?url=https://cdn.jsdelivr.net/gh/gn-math/html@main/33.html" },
    { title: "Geometry Dash", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMTk4ODg4MS85ODI4NjY1LnBuZw==/original/0fP7yz.webp", url: "https://mysticgames.netlify.app/games/geometrydash/" },
    { title: "CS Strike", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvODk5MDM2LzQzMDcyODEucG5n/original/PH1dFA.webp", url: "https://storage.googleapis.com/freezenova/all/2024/unity2/fps-strike/pre-gg.html" },
    { title: "Eggy Car", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMjA1MDk0NS84MDk5MDQ4LnBuZw==/original/3LvU8M.webp", url: "https://script.google.com/macros/s/AKfycbxGFiHgVNVoous7yjguN7bcuwa6lejCHgh6V1weh1vNalyCzpMmaMH9NhTisNSqkUo3/exec" },
    { title: "OvO", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMTIxMDEyLzE1MTYwLnBuZw==/original/VZbJHn.webp", url: "https://script.google.com/macros/s/AKfycbyDZOJq86UIFlMkKfvZtA_Sv86sKooVRpwVFS2rb38TOT8ExCt3PfR1Y5UAveVuVGlQLw/exec" },
    { title: "Poly Track", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMjE5NjM2Ni84MDk4NjUyLnBuZw==/original/v9V6qs.webp", url: "https://script.google.com/macros/s/AKfycbzOmulSCFb0CwkaIrhIBdqglMVAfxQppFmVZmp2cp8-eHLj0j_LjbQtEhNyTClffFte/exec" },

    // --- NEW GAMES ADDED ---
    { title: "Riddle School", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvOTgyNDk3LzE1NDAwLnBuZw==/original/IBuQdO.webp", url: "https://script.google.com/macros/s/AKfycbyBMzbST-uTVoOBVyLwbqs7LeloEnSkKiP4Cik0DmPAcVR7Oqq-BzXdvrOzNR6Uwl4MJQ/exec" },
    { title: "Riddle School 2", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvOTgyNDk4LzE1NDAxLnBuZw==/original/Kcv4NV.webp", url: "https://script.google.com/macros/s/AKfycbxAxmSYav_FxW2KK6Uq4gGNAkqUdVghvBbB7RGGp94sgFIyB0zaNQwMmtyXUrA7Uh80yQ/exec" },
    { title: "Riddle School 3", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvOTgyNDk5LzE1NDAyLnBuZw==/original/30SDBo.webp", url: "https://script.google.com/macros/s/AKfycbwa5pPN4jqxL2C_SbGRkUUm23NwS3SB0XmUkqFNp0mEjCMy_lphUCFHXzb5ZsOUf9drNQ/exec" },
    { title: "Riddle School 4", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvOTgyNTAwLzE1NDAzLnBuZw==/original/F4o1H3.webp", url: "https://script.google.com/macros/s/AKfycbwGuLeqEsgE3zoFtlvDy6eJ9dwvTz7tJIubeYTMXqUKG-cNMrlgRteuJM1QxCDj_6gN/exec" },
    { title: "Super Mario 64", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMzM0MzMxL1N1cGVyX01hcmlvXzY0X2xvZ28ucG5n/original/s%2BUvUX.webp", url: "https://script.google.com/macros/s/AKfycbyB8Cg09IyL5iA01VRMcp6GXWBsHJDyytzuovDyiHdgIUmtHuNM7x27VlBnJjYt26F-/exec" },
    { title: "Governor of Poker", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvOTA2MzcvMTA3MjEucG5n/original/DjwXlT.webp", url: "https://script.google.com/macros/s/AKfycbypfdD_P9HVmO5Ms9mJZX7xl4IQBSsFYdUqZoJhR9f97McSR9B1wqvUc4YhoORgScn5/exec" },
    { title: "Car King 2", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMTc0MzI1MS8yMDU3NzY1LnBuZw==/original/sFNh5b.webp", url: "https://script.google.com/macros/s/AKfycbxQuqMuGYqOJSyYwUL5vYn1E3xCTjM7DAQZnhnKyYVmhH_2mNQS7INnwJkwr7l7T9GC/exec" },
    { title: "Doom", cat: "Action", img: "https://img.itch.zone/aW1hZ2UvMjQ1Njg1OC8xMzg1NzA3My5wbmc=/original/NLvgHz.webp", url: "https://script.google.com/macros/s/AKfycbyxLM58t1oGIyqp09GNTAGBqUBaFg7A9nY5lLwS45Zg2z63ax0EmnhHCXW_aHhEpdFcqg/exec" },
    { title: "Doom 2", cat: "Action", img: "https://img.itch.zone/aW1hZ2UvMjQ1Njg1Ny8xMzg1NzA3Mi5wbmc=/original/wkXiI2.webp", url: "https://script.google.com/macros/s/AKfycbx61mSm2aEx_wwEQB66hIGUZm8hV2dBZvo2QXcabpXvc0r25c22pW-pdE8tmxBjOWcWCw/exec" },
    { title: "Vex", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMTMyNzgzMi80MDkyMDU3LnBuZw==/original/1H6D48.webp", url: "https://script.google.com/macros/s/AKfycbxwyDsC49pauwYS59k4k10ptEAWo-6qgJf2nyvPt3i52bikDw98aFuDgvSPRWaIsnr8/exec" },
    { title: "Ant War", cat: "Arcade", img: "https://amplify8.neocities.org/images%202/antwar.webp", url: "https://script.google.com/macros/s/AKfycbwTCDauLkMPclvbdLzVCcJlUN0ZJJhW1WWX16471JKSvDvemRPf1d_koYpXxbgo5xtv/exec" },
    { title: "BTDB 5", cat: "Arcade", img: "https://amplify8.neocities.org/images%202/bt5.jpg", url: "https://script.google.com/macros/s/AKfycbzSjvvBl4oIbQbsdQ6wORkEPqBumZKhlNUW3FirGHuAIe6EPZ_QGuF4N0TqjL0ECFoo/exec" },
    { title: "Brawl Stars", cat: "Action", img: "https://amplify8.neocities.org/images%202/cropped.webp", url: "https://script.google.com/macros/s/AKfycby2-8wV6Z0j1rs8FEOpgLh45K2Psh7qsbQX9PFQqvuVhkiIxgbYZCQbnYTQvb6KyiGG/exec" },
    { title: "Theme Hotel", cat: "Arcade", img: "https://amplify8.neocities.org/images%202/theme-hotel-3734.webp", url: "https://script.google.com/macros/s/AKfycbwrJdMjGr6QgtCqRECx-sah1QhwG_uDl05wIqxLiBciZkSh2bheRU40RjCAczlxBJwuNw/exec" },
    { title: "Tiny Archer", cat: "Arcade", img: "https://amplify8.neocities.org/images%202/236107_1.jpg", url: "https://script.google.com/macros/s/AKfycbwewqfKyRlPVStl7DY10aR-AbTtoXNZzFxi_TEgtOfJacKP6zplkmCDV5C8Ns7NKowl/exec" },
    { title: "Miami Shark", cat: "Arcade", img: "https://amplify8.neocities.org/images%202/mamashark.jpg", url: "https://script.google.com/macros/s/AKfycbwcOrx811OvPzstvQr6A5KOKznvdBG_acIb69QrkqZf9SS6Amq6JNWlHFFVHEGAAgeylQ/exec" },
    { title: "Roblox Obby", cat: "Arcade", img: "https://amplify8.neocities.org/images%202/maxresdefault.jpg", url: "https://script.google.com/macros/s/AKfycbx-uaFWRwY1q4Gv7pRrd9PR3zbbmsKV5PTGPQZ11-u3EWCiD4xeM2V3_1JBvmJQNxSshw/exec" },
    { title: "Roblox Color Switch", cat: "Arcade", img: "https://amplify8.neocities.org/images%203/switch41.jpeg", url: "https://script.google.com/macros/s/AKfycbwWWBtavXiMCq399BK9oR49x9YwZ3TnN4vnTZ5fhELKP8yqc9_mqT25hT6PdwjD_hMdmA/exec" },
    { title: "GTA 4", cat: "Action", img: "https://amplify8.neocities.org/images%203/simmgtaaa.jpg", url: "https://storage.googleapis.com/freezenova/all/2023/unity2/gta-simulator/pre-gg.html" },
    { title: "Stick Man GTA", cat: "Action", img: "https://amplify8.neocities.org/images%203/stickman-gta-city-free-xs.jpg", url: "https://storage.googleapis.com/freezenova/all/2024/unity3/stickman-gta-city/pre-gg.html" },
    { title: "Snow Rider 2", cat: "Arcade", img: "https://amplify8.neocities.org/images%203/snowrtiderrr.jpeg", url: "https://unblocked-games.s3.amazonaws.com/games/2025/unity2/snow-rider-3d/pre.html" },
    { title: "War Strike", cat: "Action", img: "https://amplify8.neocities.org/images%203/WAR221.jpg", url: "https://storage.googleapis.com/freezenova/all/2024/unity3/warstrike/pre-gg.html" },
    { title: "Car King 3", cat: "Arcade", img: "https://amplify8.neocities.org/images%203/Survival%20Karts.png", url: "https://storage.googleapis.com/freezenova/all/2024/unity3/survival-karts/pre-gg.html" },
    { title: "Jaydens Bus", cat: "Arcade", img: "https://amplify8.neocities.org/images%203/jaydens-bus-is-here-meme-explainer.jpg", url: "https://storage.googleapis.com/freezenova/all/2021/2/school-bus/pre-gg.html" },
    { title: "Blob Man Runner", cat: "Arcade", img: "https://amplify8.neocities.org/images%204%20/images%20(2).jpeg", url: "https://script.google.com/macros/s/AKfycbxzSGHk_3h5kMq-nWnMw-klXqPCvXAWtnetko4sja__qk43JO5f5bBJXkyhkt3gFDsG/exec" },
    { title: "Basketball Bros", cat: "Arcade", img: "https://amplify8.neocities.org/images%204%20/fedfefdfdz.jpeg", url: "https://script.google.com/macros/s/AKfycbxUfaDSpH-0SJL0WPKt38JY7OOOGMmtpY9JTSbL8pvtjxS7jSpNHHu6MdZgWUshIU00Kw/exec" },
    { title: "Ragdoll Archers", cat: "Action", img: "https://amplify8.neocities.org/images%204%20/stick-archers-battle-1.jpeg", url: "https://script.google.com/macros/s/AKfycbxNbvNHQi6AaM1h7e1N4T2gkDUR3CMeqDfto6yUKf4DKrOELGCCT4maR8rwUvL3EAXg/exec" },
    { title: "Plants vs Zombies", cat: "Arcade", img: "https://amplify8.neocities.org/images%204%20/PlantsvsZombiesCoverArt.jpg", url: "https://script.google.com/macros/s/AKfycby_ln3ql4aO56lxfeLUH_UziAcZvRzETmL9zqekK0neuz5OHISrr6getE8_-or9E_Tj/exec" },
    { title: "The Legend of Zelda", cat: "Action", img: "https://amplify8.neocities.org/images%204%20/images%20(3).jpeg", url: "https://script.google.com/macros/s/AKfycbzu7JPsUyqahRNyoVAWYD-uIEpV5FNs0akJEM0EwNV_ToMOxVpNPgW8huZ4tsKfKLM7/exec" },
    { title: "Body Drop 3D", cat: "Arcade", img: "https://amplify8.neocities.org/images%204%20/body-drop-3d.avif", url: "https://script.google.com/macros/s/AKfycbyXOw6qzM51ssGj_M9IbqU2ecyQivgppEfFXnGRtWv2fa88YqEgVxfE1pA3x-Tf1jfxTA/exec" },
    { title: "Backflip Maniac 3D", cat: "Arcade", img: "https://amplify8.neocities.org/images%204%20/93.jpg", url: "https://script.google.com/macros/s/AKfycbyExxCazbrnnLXvfNagILoQmILcNwXIkg8QDmtAo2Q6ZoI9KfUar3j7jjbdi3mE_km8/exec" },
    { title: "Pipe Riders 3D", cat: "Arcade", img: "https://amplify8.neocities.org/images%204%20/pipe_riders.jpg", url: "https://script.google.com/macros/s/AKfycbwEVfIX4lJOqfq3QSoLcjMR42I7zeC1_Njr8LGucBGcaVBp5MsfC96SFhXGnaOwfuCX/exec" },
    { title: "Bottle Flip 3D", cat: "Arcade", img: "https://amplify8.neocities.org/images%204%20/71AcWPfFJRL.png", url: "https://script.google.com/macros/s/AKfycbzwDflD6NVq9iPdEWsRyyI4iqR_k47P-BK4sn_vpYaZGsPJz3zDYRDy45azzYiPnYs/exec" },
    { title: "Slope City", cat: "Arcade", img: "https://amplify8.neocities.org/images%204%20/slope-city.webp", url: "https://script.google.com/macros/s/AKfycbyendSzfWzjivGUAoNgH5QDpJIxJDyJvSYwXWxcV_8gl9xkdTMV2BvDpjiWNw5pGaVT/exec" },
    { title: "Fake Ahh Block Blast", cat: "Arcade", img: "https://amplify8.neocities.org/images%204%20/images%20(4).jpeg", url: "https://script.google.com/macros/s/AKfycbxZvtI5agrSjt2PR9Bi4M0UrukDLv22m04S03neCz_La2RwnISHUDQ48n6hlYayZvIs/exec" },
    { title: "The Binding of Isaac", cat: "Arcade", img: "https://amplify8.neocities.org/images%204%20/98-871-388897189.jpg", url: "https://script.google.com/macros/s/AKfycbx1-ahIchbUqDQdqB5GJ2-ZxlbPLz1lz7ohzlqUZ41JUrAnGTIPjgLaASGqqV1ToAuZ/exec" },
    { title: "FNAF 3", cat: "Arcade", img: "https://amplify8.neocities.org/images%204%20/1j7e58.jpg", url: "https://script.google.com/macros/s/AKfycbyVdPAG4aRGh5tmBwKEZthKmaqO12GTD-h-C1Do6ICbR3ZEj5ic1aJQ2e4Im2pxcWLf/exec" },
    { title: "Stickman Archero Fight", cat: "Action", img: "https://amplify8.neocities.org/images%205/stickman-archero-fight-cover.png", url: "https://script.google.com/macros/s/AKfycbxQMjTKES5CMpXfWBSXOQvk0qSCqIMpeT_zTPIshM-_XuAdBdi2lm2M9UfLdjHCSSg3/exec" },
    { title: "Cooking Fever", cat: "Arcade", img: "https://amplify8.neocities.org/images%205/91shDSlVCIL.png", url: "https://script.google.com/macros/s/AKfycbyjI0zmcSCEH1KYPHLRli9aaHyQettbfiqOyaKVDeJn8rccfLOQYK6pJze4xP-EFJKg/exec" },
    { title: "Gacha Life", cat: "Arcade", img: "https://amplify8.neocities.org/images%205/J2N9FM.png", url: "https://script.google.com/macros/s/AKfycbwpsiFvcV6VcCA2a7HCMZd4FsuW9rw53GS08ItGe6CXqWkkrVrl1yV2GW-E3JGYOzkcvQ/exec" },
    { title: "Tag", cat: "Arcade", img: "https://amplify8.neocities.org/images%205/tagg.jpeg", url: "https://bav1.wadmc.site.cdn.cloudflare.net/storage/ag/g/tag/" },
    { title: "Space Wave", cat: "Arcade", img: "https://amplify8.neocities.org/images%203/SPACE.png", url: "https://bav1.wadmc.site.cdn.cloudflare.net/pages/other/interpreter/index.html?url=https://cdn.jsdelivr.net/gh/gn-math/html@main/117.html" },
    { title: "Kart Bros", cat: "Arcade", img: "https://amplify8.neocities.org/images%205/kartbro.jpeg", url: "https://script.google.com/macros/s/AKfycbxb8isaXXwqY7h3OqafbfonnaOEmyfyK8ZQoMvgT-HGwUSfpJoK5Aim1Ca3fvKvEqxj/exec" },
    { title: "Drive Mad", cat: "Arcade", img: "https://amplify8.neocities.org/images%203/drive-mad1-f375x375.webp", url: "https://bav1.wadmc.site.cdn.cloudflare.net/pages/other/interpreter/index.html?url=https://cdn.jsdelivr.net/gh/gn-math/html@main/35.html" },
    { title: "The Frog Clicker", cat: "Clicker", img: "https://amplify8.neocities.org/images%205/noFilter.webp", url: "https://script.google.com/macros/s/AKfycbzQaAZtrcJFjT3vW7NBFYusYqo6WuBjQy_y0Ky2qpW2Xml3PHAv4sJN3SHNyp89JMOc/exec" },
    { title: "Fall Guys", cat: "Arcade", img: "https://amplify8.neocities.org/images%205/fallguys.jpeg", url: "https://script.google.com/macros/s/AKfycbxzGXZ-dYcADWPNv7OSO6OdaFl8sJtBNY8J1KO5EQ33_I37NN0nQkaej4HqNCAkvxHHqA/exec" },

    // --- LATEST ADDITIONS ---
    { title: "Sonic Revert", cat: "Arcade", img: "https://amplify8.neocities.org/images%205/sonic.jpg", url: "https://script.google.com/macros/s/AKfycbzBAwdrT4yM1Hd7ZZZh8uHlWcfaGqq2wuP6CXzRYrI25JI-1v42AyvMtIeiFfelHuV3jA/exec" },
    { title: "Bloons Tower Defense", cat: "Arcade", img: "https://amplify8.neocities.org/images%205/bloonstd1new.jpg", url: "https://script.google.com/macros/s/AKfycbzKR69hQK7HutG9tRM2cEM9H8vEX8xwkPDTeEjeju7G_P2Xf83RYqBoNT2S9NPo7NWN/exec" },
    { title: "Bloons Tower Defense 2", cat: "Arcade", img: "https://amplify8.neocities.org/images%205/Battles2_screen5.webp", url: "https://script.google.com/macros/s/AKfycbxI5KGOnqExl7GEpiCd5XXr9PXBMkGhDLWnOQfEuXRjmXom-nUzLjOXfP4iwAYUvbE/exec" },
    { title: "Bloons Tower Defense 3", cat: "Arcade", img: "https://amplify8.neocities.org/images%205/bloonstd3.webp", url: "https://script.google.com/macros/s/AKfycbzRkRFh3xH_YzLqtvFVsKcPOdqkcps9umH96kwECqmzugE1XkxYo6ryhCKD1m7JkR0-rw/exec" },
    { title: "Bloons Tower Defense 4", cat: "Arcade", img: "https://amplify8.neocities.org/images%205/BTD4-PromoArt.webp", url: "https://script.google.com/macros/s/AKfycby2trsng3jMdXZGJn1BQjbqYbooUtnPL3dT1EP9yp7GQRHsUSWLSGyZAUB62jIicJek6A/exec" },
    { title: "Bloons Tower Defense 4 Expansion", cat: "Arcade", img: "https://amplify8.neocities.org/images%205/98601_Bloons_TD_4_Expansion.webp", url: "https://script.google.com/macros/s/AKfycbxeATXd8GtKmm7SabIq9L-KKLOeSpiiyroLLAYKhzDNmacYq52DkBZb_L2YHwupaOs/exec" },
    { title: "Bloons Tower Defense 5", cat: "Arcade", img: "https://amplify8.neocities.org/images%205/ballons.jpeg", url: "https://script.google.com/macros/s/AKfycbzSjvvBl4oIbQbsdQ6wORkEPqBumZKhlNUW3FirGHuAIe6EPZ_QGuF4N0TqjL0ECFoo/exec" },
    { title: "Sushi Cat", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/caZ0O88Y_400x400.jpg", url: "https://script.google.com/macros/s/AKfycbxklkIQr8XmD1Qop6uHXJdSXks7pLz1zBMg7k7jPzOTdZChInaDEaQbzN6YNCZbIbbLzQ/exec" },
    { title: "Stickman Street Fighter", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/sickman%20fight.png", url: "https://script.google.com/macros/s/AKfycbw3hd0GBBIL0fD_54SGZZFEfCVUMCXP0tUZMq6OjDiXeNnUQ97rt70cUpDfkmgSGtErmQ/exec" },
    { title: "Pixel Archer Save the Princess", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/de9a263dbba246e39f20974f190d9489-512x512.jpeg", url: "https://script.google.com/macros/s/AKfycbxg-5QTwa4cKw_Lk_M4zzAs4nJk0kS7urUqO587jQFs1Haxarg0HphnRpq4arSqkmuVYA/exec" },
    { title: "wrestle bros", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/mqdefault.jpg", url: "https://script.google.com/macros/s/AKfycbzf61_c1OXDbrsZz4pecMt5cUWDGwGJWXUtlOAoNdBE2acBbblA31lQmATDlBRpFVYiWw/exec" },
    { title: "Friday night funkin", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/fnfk.jpeg", url: "https://script.google.com/macros/s/AKfycby1HaNDGKwziSvZ_m-drF_v3AFw4E0gOvqn8Dx_9SSxXQrM3s0kFdZYrlPLcryYkPIb/exec" },
    { title: "Baseball Bros", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/basball.jpeg", url: "https://script.google.com/macros/s/AKfycbwyvxP-o1WNt_P4ND0dZ5nG3ytpAeIZsj3tN205-I_WkqGEuWPAS2yBcRWpX_tJ-BtY/exec" },
    { title: "only up", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/header.jpg", url: "https://script.google.com/macros/s/AKfycbwMccc783yv5Ftx2nkZ6BpHDi66OYtby8TRsYzgDufHka0zzRHHcV19NgtnFJH0ltbEvQ/exec" },
    { title: "Getaway shootout", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/getaway-shootout.avif", url: "https://script.google.com/macros/s/AKfycbwHKYphUKLbxkpjFx_EWO__M8-hH8mMrlAQWcJVN3squSkph0M3Bb7u7myZzYAbmyeQTA/exec" },
    { title: "Crazy Dentist", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/crazy.jpeg", url: "https://script.google.com/macros/s/AKfycbwL5IsBaV0-4OwzZhJ_6tmPgsZ5eMTv-TD-1qgZ_2BvDnit3dlCblBXf_iBiBIckn3T/exec" },
    { title: "Happy Wheels", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/chk_captcha.jpg", url: "https://script.google.com/macros/s/AKfycbyfMPVIGx6dJPrYKeE9e4Erj949-dH28pWVRjdV1vgnoylpBV8af03JNLoz2MwAIBLECg/exec" },
    { title: "Prison Escape +1 Speed", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/hq720.jpg", url: "https://script.google.com/macros/s/AKfycbyyBwGa1C8kH2itma0EGi81NjjpX5DxJQznbNNj7oTU_RGDT2x3s5uJx-zsbsIKvr40eQ/exec" },
    { title: "Dig to Escape the Island", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/IDE_screenshot_2.jpg", url: "https://script.google.com/macros/s/AKfycbz3g4g5OZzdwCllJRXQeiB5WsRS6k83WwxhQJAhf5Y_POwAMD6sKJFlBlgD1jgfZInifg/exec" },
    { title: "Mr. Dude", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/dude%20lol.avif", url: "https://script.google.com/macros/s/AKfycbzFSYMyP5-xv8yF35HL0Aj0S2txSh1DLJ8hnMCUeyW4TgbL3GeQQG0Dr6AsXtGWpIdEeQ/exec" },
    { title: "fnaf 2", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/fnaf2.jpeg", url: "https://bav1.wadmc.site.cdn.cloudflare.net/pages/other/interpreter/index.html?url=https://cdn.jsdelivr.net/gh/gn-math/html@main/39.html" },
    { title: "roblox robbie tycoon", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/thumb.avif", url: "https://script.google.com/macros/s/AKfycbzgKGEc9fUGI21w1jx9DsuXwVddJIpIHfC67322MyoOMZ_0_pzW1_LBsZbnKNTd6igp/exec" },
    { title: "Hangar 2", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/images.jpg", url: "https://script.google.com/macros/s/AKfycbxhkIwgROe7gPhcbvQmpy88tk6nWZ8mDYRGeKnMPKgO8U0-mIiRsNFpSRDx1scxX4bO/exec" },
    { title: "fun ragdoll game", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/FWR-The-Game.webp", url: "https://script.google.com/macros/s/AKfycbznGp7b4oeq8f7NHl6ymbX-lfgn0irQJZcRp8zAFpe_PEoD-R39ASBQ3_t7Sx2yA-Quag/exec" },
    { title: "Brawl Ships", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/Going_Merry_Infobox.webp", url: "https://script.google.com/macros/s/AKfycby1ojj07-bMzkztAHz7nJxL0c88gZzRF9HR1fCRxGjfGG13iuAt6S5pXuc15jxdIO3tyA/exec" },
    { title: "RocketGoal.io", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/images%20(1).jpg", url: "https://script.google.com/macros/s/AKfycbybZkVPGyvHUOZbwrJSn5fRQIFcGpoIEhp0r-yq2GWRtE_1G7YzP4t8kPZRfp6tutUN/exec" },
    { title: "Obby Ragdoll", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/enlarged.avif", url: "https://script.google.com/macros/s/AKfycbyZYCjrlO5pzZ-0WzBPJPCh0nxTuU8yQFjAkdy3HjUgQnCWHzlleuDCnKL5cAKVcWe0/exec" },
    { title: "fish it", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/noFilter.webp", url: "https://script.google.com/macros/s/AKfycbwabBzPFBdOsUl5BiBrPa_4y3_g-qtgFkCn_sNHGsZZNgoy4t1D8XlYabpiVhoUOVmu1g/exec" },
    { title: "papas burgeria", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/papas-burgeria.avif", url: "https://script.google.com/macros/s/AKfycbyyfjHc-YiNqGOngfUlkjS5Fvx2x0UYfkerogM_Y3-Z1BQTZW2K0AcegLUtVdRjo5nM/exec" },
    { title: "papa's taco mia", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/unnamed.png", url: "https://script.google.com/macros/s/AKfycbyJDZUnBq6_qyG0CrInptybAP0n54yhZ8agPdAQ1iAT_ki0rfkTjHPSHYdfyOvO1Skwjw/exec" },
    { title: "papas pizzeria", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/papas-pizzeria-game-banner.jpg", url: "https://script.google.com/macros/s/AKfycbxN6EVQbtkjn6NUiIyJscLGTyyMyAUABzuB_kp4relIe6rr9B8eWmlnlvDsBVtiRa5pPg/exec" },
    { title: "Castel Wars Modern", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/castel-wars-modern-cover.png", url: "https://script.google.com/macros/s/AKfycbyY4CyZLTgV9OVSQw1W42hbLpATlSc-kK6dfZsdQ1lz84_ZeKU4OEDVfzN2yK7l2pIc9A/exec" },
    { title: "space wars 3d", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/space-wars-battleground_16x9-cover.avif", url: "https://script.google.com/macros/s/AKfycbwFZ8nVVnzJ7Ok7T596pn-Y0GriUK20c7_rxqCVIdlY-6-Wym3xrJhO-NyQi8NogxqDXw/exec" },
    { title: "polly track v0.4.1", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/polytrack_16x9-cover.avif", url: "https://script.google.com/macros/s/AKfycbzuhv-wKflC3QgCI_d8xsy90ngRlqgKj-qfICMuzhimGuYwWXFI5tPWwwfjrYk-biJu/exec" },
    { title: "monster box 3d", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/download.jpg", url: "https://bav1.wadmc.site.cdn.cloudflare.net/pages/other/interpreter/index.html?url=https://cdn.jsdelivr.net/gh/gn-math/html@main/401.html" },
    { title: "destroy the car 3d", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/enlarged%20(1).avif", url: "https://bav1.wadmc.site.cdn.cloudflare.net/pages/other/interpreter/index.html?url=https://cdn.jsdelivr.net/gh/gn-math/html@main/385.html" },
    { title: "Alexander Dawn of an Empire", cat: "Arcade", img: "https://amplify8.neocities.org/images%206/pM3SNZSD7I7SW.jpg", url: "https://script.google.com/macros/s/AKfycbySmwkNl5vxIY1bsc7RJJF3ZfHp9TkMho4fc6Vtt91QPrX31OX1y14an84BPq5o-zE8/exec" },
    { title: "buildnow.gg", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/build.png", url: "https://bav1.wadmc.site.cdn.cloudflare.net/storage/ag/g/buildnowgg/" },
    { title: "fortzone", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/fortzone.jpg", url: "https://bav1.wadmc.site.cdn.cloudflare.net/pages/other/interpreter/index.html?url=https://cdn.jsdelivr.net/gh/gn-math/html@main/120.html" },
    { title: "run 3", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/run%203.jpg", url: "https://bav1.wadmc.site.cdn.cloudflare.net/pages/other/interpreter/index.html?url=https://cdn.jsdelivr.net/gh/gn-math/html@main/177.html" },
    { title: "speed stars 3D", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/speed.jpg", url: "https://bav1.wadmc.site.cdn.cloudflare.net/pages/other/interpreter/index.html?url=https://cdn.jsdelivr.net/gh/gn-math/html@main/266.html" },
    { title: "case chase csgo", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/casefr.jpg", url: "https://bav1.wadmc.site.cdn.cloudflare.net/storage/ag/g/csgoclicker/" },
    { title: "curveball 3d", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/curve-ball-3d_2.webp", url: "https://script.google.com/macros/s/AKfycbydgy6s1YL66mbd6el9TFRAi3hdvC8ssPtT_gfQq4zDxTZxJjPHrFI737JRJj1nmohZng/exec" },
    { title: "rainbow friends", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/roblox_rainbow-3-1.jpg", url: "https://script.google.com/macros/s/AKfycbxNB9nSu4vzfq7fJPViycA65TrPuWuNSwe2YIvzyAIFRMtQIkunzA6Ixm2QiVyE37LqsQ/exec" },
    { title: "Among Us", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/amung%20us.avif", url: "https://script.google.com/macros/s/AKfycbyix6sPjvsn_izDvhJLVuif1buj9ZtARvj9D_FEQ0rscRXgl-RgArs0t4oJw_OHm5Dr5A/exec" },
    { title: "craftmine", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/craftmine.webp", url: "https://script.google.com/macros/s/AKfycbzUU6zKRrPYcFmCtljq5gjeSZzyQQZNRi-45LRflu0v8GcVO5BmwHjVhxeXhn6yVkXP/exec" },
    { title: "my happy farm", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/cover-1629542918687.avif", url: "https://script.google.com/macros/s/AKfycbzATlBgtLc5RwEiuaOH9DHfF1D4a_XUFERoq4f1E1Y3MUJoAgSTAn7WyOqmRArkFLjM/exec" },
    { title: "Playground Man! Ragdoll Show", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/ragdoll-break_16x9-cover.avif", url: "https://script.google.com/macros/s/AKfycbyfASSH2K3-0WpQ0Imil8J-Xs4iIlcvunKCGKk6mkm8MygFzhPHEs4Akf879vruIVxx/exec" },
    { title: "call of duty", cat: "Arcade", img: "https://amplify8.neocities.org/images%207/call-of-duty-game-of-the-year-edition_xdh2.jpg", url: "https://script.google.com/macros/s/AKfycbyVPz9wAXi5MOoN-W13DNHZB-mdu-B6MdRdvq6qPpC-cIYGU7RZggTJpPIZFDEA_XShlQ/exec" },
    { title: "BunnyLand", cat: "Arcade", img: "https://amplify8.neocities.org/images%208/245109_1.webp", url: "https://script.google.com/macros/s/AKfycbzYNoh6yqG6eu3SMGFRLwHI1B6R79jADni5_zTz5G0IYuwqo2WbU0N9hiYUkXKS8Zh1/exec" },
    { title: "food tycoon", cat: "Arcade", img: "https://amplify8.neocities.org/images%208/landscape_comp_s.jpeg", url: "https://script.google.com/macros/s/AKfycbxS6WT28mw1EO9wkpTRvlCAit9yuJCK7rm8USP3HEUviAjeDB-M6dvtc7zBosLBa92QFA/exec" },
    { title: "Merge Fellas Italian Brainrot", cat: "Arcade", img: "https://amplify8.neocities.org/images%208/253560_1.webp", url: "https://script.google.com/macros/s/AKfycbxKeACMsdA3N71Rk2wolGOxrBqYz9UXnTo0o_Z4nvyh-z0SjoPO5UnfTLQXgsZQey4a/exec" },
    { title: "Pool 8 3D", cat: "Arcade", img: "https://amplify8.neocities.org/images%208/unnamed.webp", url: "https://script.google.com/macros/s/AKfycbwgNIFE-Y2ckj1yfL215QDByY61L8tOiBJUC2IppZmScK2wrOVoEMjilX2f-TdEYN3N/exec" },
    { title: "endless war defense", cat: "Arcade", img: "https://amplify8.neocities.org/images%208/Endless-War-Defense.webp", url: "https://script.google.com/macros/s/AKfycbx0g5BUL99BiBoQcEUYIFlFifyjxIR92tS8WWNAqEZnUx9ePaoEEZnO2CfcGHNUU2lRMQ/exec" },
    { title: "Zombie Survival Siege", cat: "Arcade", img: "https://amplify8.neocities.org/images%208/images.jpg", url: "https://script.google.com/macros/s/AKfycbxUErJUc_ACvigcRFz3qfnoGUqikZVKUfKZekuAeEEfqCBKS-9WQF8XXJqyiH2kk85r/exec" },
    { title: "Hop Masters", cat: "Arcade", img: "https://amplify8.neocities.org/images%208/512x384.jpg", url: "https://script.google.com/macros/s/AKfycbwNy4zXsSbExk8y6K7XIeg68xNFxPG_06EXhu4dtlR8vyGfODTey-POqEXTxEi_HxboQQ/exec" },
    { title: "Steal a Brainrot 2", cat: "Arcade", img: "https://amplify8.neocities.org/images%208/steal-a-brainrot-unblocked.jpg", url: "https://script.google.com/macros/s/AKfycbxJalyip_ETy_kolDAlSVxdcnLtn16P6gIoJ5kDwt1abHFX32SUJEOLCWU31veTffv2/exec" },
    { title: "Battle Soccer Arena", cat: "Arcade", img: "https://amplify8.neocities.org/images%208/images%20(1).jpg", url: "https://script.google.com/macros/s/AKfycbypNJTV2_4SaNeQ_yGszhhWdue30IzXRZnqpA9d3q9LnYVV_kulbaHCR_csPvFZ3MQf0A/exec" },
    { title: "Ice Hockey", cat: "Arcade", img: "https://amplify8.neocities.org/images%208/images%20(2).jpg", url: "https://script.google.com/macros/s/AKfycbyrV0taviLggEVl88GTQrd9J-caSQfxqraH6_Zu2evPkn4qI-qzO3nTibe7yFX5KW3Y/exec" },
    { title: "Climb and Slide 2 ", cat: "Arcade", img: "https://amplify8.neocities.org/images%208/Roblox-Climb-and-Slide-Codes-Header.webp", url: "https://script.google.com/macros/s/AKfycbyCd9HNehxhS0HYLO47fVkRlXwx_AQSEyNyakQlGyL-l09GfxkP7qoba9yQCvldXw6Z/exec" },
    { title: "Dragon Training", cat: "Arcade", img: "https://amplify8.neocities.org/images%208/lol6741.jpg", url: "https://script.google.com/macros/s/AKfycbw4o8CAO3FDr-i-QOPL5xyvFqcopYD1JuJGaAu0HikuyUC3sjt62Pv1lNZWbZRaYJ0SQg/exec" },
    { title: "Fly the Farthest", cat: "Arcade", img: "https://amplify8.neocities.org/images%208/fly678.jpg", url: "https://script.google.com/macros/s/AKfycbyOP-i1mjNpvwaB-VTpGwOuNw2P00c8TAeXR7_9ZjLhGA9C8wO-q3AYgRyYdlDPIKgX/exec" },
    { title: "Cart Ride Obby", cat: "Arcade", img: "https://amplify8.neocities.org/images%208/ride.png", url: "https://script.google.com/macros/s/AKfycbwV24S-CBw-IQZymR361FiJBviiYHanI3oEGjko1f8Q2za3yc3gk1H1Q_OJF503RfCQPQ/exec" },
    { title: "Escape Tsunami", cat: "Arcade", img: "https://amplify8.neocities.org/images%208/noFilter.webp", url: "https://script.google.com/macros/s/AKfycbx2cUFHB0FDo_tDpVq6JQnPbLSeXmQZ2z1skXJTfUm99eyL-8aUQIznw1NJ7ouwSyZ8/exec" },
    { title: "Car Drawing", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/carde.png", url: "https://script.google.com/macros/s/AKfycbx_sIQG2rUisJPhvCnaoOFGDwTou_89iDBoJTAB5RsdykYLw7IQF8vUYUKMBDoJDY0asQ/exec" },
    { title: "Air Hockey Cup", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/cover_16x9-1712905959843.avif", url: "https://script.google.com/macros/s/AKfycbw7VnhYKWITlJo9p8qyT8ExOfvnjvizq57_jj7MzDnyJWTuHtNbee3NHoEoRhuS6eqo/exec" },
    { title: "99 nights in the forest", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/99nights.webp", url: "https://script.google.com/macros/s/AKfycbw4urIQgR3zAfmFsn3NWFC6kpsGYSWafyi6AWtyVNSyBkySH9O46LVnhej6fW7beFME/exec" },
    { title: "Italian Animals Playground", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/253302_1.webp", url: "https://script.google.com/macros/s/AKfycbw_N9kFNCWUZrWJCfCv_Ion7Boqtwv1CEdFsIXMXjFZkbYrBgrp_Lviws13VYRzNnD9/exec" },
    { title: "Brainrot Click to Hatch ", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/brain.jpg", url: "https://script.google.com/macros/s/AKfycbxaBuUWOfHfHlEeofRekYHt_eEw0UyZrwd4MqZN4b65n-8CL87ZRsCmB_pD7PjGwDJr/exec" },
    { title: "Car vs Missile", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/1280x720.webp", url: "https://script.google.com/macros/s/AKfycbxcfjoMcnr4aCnKF-2aX9VJbprkGXDyNTobdd--tUp_jj7zKH3oBCVjN_f272_1YNI2/exec" },
    { title: "Bomb it ", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/bomb-it.webp", url: "https://script.google.com/macros/s/AKfycby7Rnkrn91BHurrsujCvrFCGUpogTQVgrpWhgkkyqlt6Njgi5sroGu8qUsIX0Y_qMXPvg/exec" },
    { title: "world's hardest game", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/WorldsHardestGame_OG-logo.jpg", url: "https://script.google.com/macros/s/AKfycby47hYr0ceDEaV-tR6h663oSZtIXjFOJnh2iKVo7KtRxh9CtpOfL7Oq1YxGxGTco3ak/exec" },
    { title: "business Sim", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/capsule_616x353.jpg", url: "https://script.google.com/macros/s/AKfycbyaU35pP_uxuX6NhQxVtukn2ZTVVSh-RvqRd7_0tkNPi4CQ2AVzNmh1X6MQUdv1WlIV9A/exec" },
    { title: "Stick Archers Battle", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/stick.jpg", url: "https://script.google.com/macros/s/AKfycbyeS0KMc5hv54TcVBgAh-bExO1c_itGoG-Mv93cqBA75fEBVG7_P1aydWFGD8Dpqgp46g/exec" },
    { title: "super mario crossover", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/15097_1.webp", url: "https://script.google.com/macros/s/AKfycbxAkr6V4wf3VuNx_MsxDXx8xVNL1dGcR69o-Y9Hi-OSXsCLBbXOPzPfc7agqRu474WP/exec" },
    { title: "super mario 63", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/SM63Infobox.webp", url: "https://script.google.com/macros/s/AKfycbykIFcYFA8WxdBm-mCJduEUO5wxLr7NgRx7nsPX8xPd9Rkoz-sfS3n9vu4HFOpB8lf3HA/exec" },
    { title: "Super Mario Flash 3", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/SMF_3_title.webp", url: "https://script.google.com/macros/s/AKfycbzJBqE5hwK63FKLpHl6-OFSNSocgNUVriPSkGQvmNQ5NGYwpZju_9Vo6NQE66s8iB5ZpA/exec" },
    { title: "super mario sunshine 64", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/maxresdefault%20(1).jpg", url: "https://script.google.com/macros/s/AKfycbx88tZ42kElQx0zgLz43Yg0t6dSWzt5orHxO2NnPXcV2cJ-ZQSKzdAeuoEDjHufzXJF_Q/exec" },
    { title: "Super Mario Bros Star", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/gaming-super-mario-bros-3.avif", url: "https://script.google.com/macros/s/AKfycbxIFmFOtjRbUVD3ZlWMszNuoKL7xjU2moB7P-4NlyjJeuAlmYqLimX1dHwLrSBFerTS/exec" },
    { title: "Super Mario Bros 3", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/H2x1_WiiUVC_SuperMarioBros3_image1600w.jpg", url: "https://script.google.com/macros/s/AKfycbzrzH3F40_t7GSh9M-o6VzOYpFfCj2JG4N0dqqcZSAuARN-p_kF8xDDoCrU8bd-XZxA/exec" },
    { title: "stickman hook", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/245361_7_sq.webp", url: "https://bav1.wadmc.site.cdn.cloudflare.net/storage/ag/g/stickman-hook/" },
    { title: "1 On 1 Hockey", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/1-on-1-hockey.jpg", url: "https://script.google.com/macros/s/AKfycbyzYs6pQLcgMsjNZ1-YovjUPrruPQtfNcOjaOCMv0KpuRdjd05-u-2owQoardtV62a1/exec" },
    { title: "1 on 1 soccer", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/1-on-1-soccer.jpg", url: "https://script.google.com/macros/s/AKfycbxJ3oet4bnNqQK_nqPo6KSwPlvIMR448__kEYKx_WN-QbncNc98PEc-qaFme7l2tbKH/exec" },
    { title: "Mike Tyson's Punch-Out", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/30-years-mike-tyson-punch-out-main-1508502937.avif", url: "https://script.google.com/macros/s/AKfycbynjAGdyrbVCrVZEwHnX7mQ5d0ktAl6TswcFfiMNmAxayyMCJyBdmyuRx6ya2R2p_uq/exec" },
    { title: "drag racer v3", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/dragracev3new.webp", url: "https://script.google.com/macros/s/AKfycbxNo47B4h3o0LbZerPLnW775zEMEECNBKmY-M6S9LuYCOHXdkK640v-d45TIQ5QgVhDGw/exec" },
    { title: "Eggy Car 2", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/images.jpg", url: "https://script.google.com/macros/s/AKfycbwLb2lJekaeuelMEkdQudNzXf3Fhoo9SCwDmxB4zYoGY0wqkvjTcAm_hPvCNhNABR6z/exec" },
    { title: "retro ball blast", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/9613b8d81e8b66f01d4c7fa0d5b3f6c619504bca7a5d7258d6d2f42a5f780d7c.avif", url: "https://script.google.com/macros/s/AKfycbxg2UBs9lzH2LXD3XzBX0nNwgwSRyZthUgYw0VXlQ49M7EKdHI0Az4iMMo9bSZj2QH2vg/exec" },
    { title: "ASKL", cat: "Arcade", img: "https://amplify8.neocities.org/images%209/203911_1.jpg", url: "https://script.google.com/macros/s/AKfycbww4F_9BaFQM7puTDJFjFByg3l0ri2M8qYbGUSoQLO97vX9W3k0x7Wt27-DIENARPqdDg/exec" }
];

/* --- STATE MANAGEMENT --- */

function hideSiteLoader() {
    const loader = document.getElementById('site-loader');
    const app = document.querySelector('.app-container');
    if (app) app.classList.add('visible');
    if (loader) {
        loader.classList.add('site-loader-hidden');
        setTimeout(() => { if (loader) loader.style.display = 'none'; }, 500);
    }
}

function initSiteLoader() {
    setTimeout(hideSiteLoader, 2000);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSiteLoader);
} else {
    initSiteLoader();
}

window.onload = function() {
    renderAllGames(gamesData, 'all-games-grid');
    initHomeAnimation();
    updateTime();
};

/* --- RENDERING SYSTEM --- */
function renderAllGames(list, containerId) {
    const grid = document.getElementById(containerId);
    if(!grid) return;
    
    grid.innerHTML = list.map(game => `
        <div class="game-card" onclick="launchGame('${game.url}')">
            <div class="game-info">
                <div class="game-title">${game.title}</div>
                <div class="game-cat">${game.cat}</div>
            </div>
        </div>
    `).join('');
}

/* --- HOME ANIMATION --- */
function initHomeAnimation() {
    const col1 = document.getElementById('col-1');
    const col2 = document.getElementById('col-2');
    
    // Pick random games for the home visual
    const shuffled = [...gamesData].sort(() => 0.5 - Math.random());
    const half = Math.floor(shuffled.length / 2);
    const set1 = shuffled.slice(0, half);
    const set2 = shuffled.slice(half);

    const createCardHTML = (game) => `
        <div class="anim-card" onclick="launchGame('${game.url}')" data-title="${game.title}"></div>
    `;

    // Tripled content for smooth infinite scroll
    const content1 = set1.map(createCardHTML).join('');
    const content2 = set2.map(createCardHTML).join('');
    
    col1.innerHTML = content1 + content1 + content1;
    col2.innerHTML = content2 + content2 + content2;
}

/* --- NAVIGATION --- */
function switchView(viewId, btnElement) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    
    // Reset Sidebar highlighting
    if(btnElement) {
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.sub-item').forEach(el => el.style.color = "#777");
        btnElement.classList.add('active');
    }
}

function resetAndShowAll(btnElement) {
    if(btnElement) switchView('view-all', btnElement);
    else switchView('view-all'); // Called from Home button
    
    renderAllGames(gamesData, 'all-games-grid'); // RENDER ALL
    document.getElementById('library-title').innerText = "All Games";
}

function filterGames(category, btnElement) {
    switchView('view-all');
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.sub-item').forEach(el => el.style.color = "#777");
    btnElement.style.color = "var(--accent)";

    const filtered = gamesData.filter(g => g.cat.toLowerCase() === category.toLowerCase());
    renderAllGames(filtered, 'all-games-grid');
    document.getElementById('library-title').innerText = category + " Games";
}

function toggleDropdown() {
    document.getElementById('cat-dropdown').classList.toggle('show');
}

/* --- SEARCH --- */
function searchGames() {
    const query = document.getElementById('global-search').value.toLowerCase();
    const filtered = gamesData.filter(g => g.title.toLowerCase().includes(query));
    switchView('view-all');
    renderAllGames(filtered, 'all-games-grid');
    document.getElementById('library-title').innerText = "Search Results";
}

/* --- UTILS --- */
function toggleSettings() {
    document.getElementById('settings-modal').classList.toggle('open');
}

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    document.getElementById('time-display').innerText = `${hours}:${minutes} ${ampm}`;
    setTimeout(updateTime, 1000);
}

/* --- LAUNCHER --- */
function launchGame(url) {
    const container = document.getElementById('game-frame-container');
    const iframe = document.getElementById('game-frame');
    iframe.src = url;
    container.style.display = 'flex';
    showPanicNotice();
}

function closeGame(event) {
    if (event) event.stopPropagation();
    const container = document.getElementById('game-frame-container');
    const iframe = document.getElementById('game-frame');
    iframe.src = '';
    container.style.display = 'none';
    closePanicNotice();
}

function showPanicNotice() {
    const notice = document.getElementById('panic-notice');
    if (notice) notice.style.display = 'flex';
}

function closePanicNotice(event) {
    if (event) event.stopPropagation();
    const notice = document.getElementById('panic-notice');
    if (notice) notice.style.display = 'none';
}



function cloakTab() {
    document.title = "My Drive - Google Drive";
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png';
    document.getElementsByTagName('head')[0].appendChild(link);
    toggleSettings();
}

function panicRedirect() {
    window.location.replace("https://launchpad.classlink.com/olentangy");
}

// Panic Button
document.addEventListener('keydown', (e) => {
    if (e.key === '`' && document.getElementById('panic-toggle').checked) {
        window.location.replace('https://google.com');
    }
});
(function () {
    // Force focus when possible
    window.addEventListener("load", () => {
        try { window.focus(); } catch (e) {}
    });

    // Panic key handler
    function handleKey(event) {
        const active = document.activeElement;

        // Ignore if typing in input/textarea/contenteditable
        if (
            active &&
            (
                active.tagName === "INPUT" ||
                active.tagName === "TEXTAREA" ||
                active.isContentEditable
            )
        ) {
            return;
        }

        // Trigger on single quote key or physical Quote key
        if (event.key === "'" || event.code === "Quote") {
            panicRedirect();
        }
    }

    const keyTargets = [window, document];
    if (document.body) keyTargets.push(document.body);

    keyTargets.forEach((target) => {
        target.addEventListener("keydown", handleKey, true);
        target.addEventListener("keypress", handleKey, true);
    });

    const iframe = document.getElementById('game-frame');
    if (iframe) {
        iframe.addEventListener('load', () => {
            try {
                iframe.contentWindow.addEventListener('keydown', handleKey);
            } catch (e) {
                // cross-origin content cannot be accessed
            }
        });
    }
})();
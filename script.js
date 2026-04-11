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
    { title: "Noob Miner", cat: "Clicker", img: "https://img.itch.zone/aW1hZ2UvMjA0NjA4NC8xNjE2MzI5Ny5wbmc=/original/IQKfnS.webp", url: "https://script.google.com/macros/s/AKfycbxkvPO4mEcWEk5a9TgEuR7qyiYZs7hL80XF5pwK8QMKHqmA7qUqxvIePB3PF9c3Bqc93w/exec" },
    { title: "Drift Boss", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMjA4NzQ5MC84MDk5NzM0LnBuZw==/original/0Uz5cG.webp", url: "https://script.google.com/macros/s/AKfycbwAOi2tPbjzeWDkigfZMIPEGubYxz2la_qjxJyydNZyjwgbqsv9mv05g7tdmLHdvdaw/exec" },
    { title: "Hole IO", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMjI2Mzg1Ni84MDk3NjMwLnBuZw==/original/Z0LSWC.webp", url: "https://script.google.com/macros/s/AKfycbwSQ0aXrXdz23Z0adlljZLtt6EGzD7max6U15OnUFBxhQmht6KK7l7RzsVo2wOdkoXR/exec" },
    { title: "Death Run 3D", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMjI0Njc1Ni84MDk4MzI0LnBuZw==/original/wXQPXP.webp", url: "https://script.google.com/macros/s/AKfycbwqW4kBl41CHKxAW1aOCzUllnCGaK6LDmkZfAZH_dJzu646nns5bRfn0oqa5Zpq9zEI/exec" },
    { title: "FNAF", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvNDIwNTI4LzcyMjQ4NzcucG5n/original/L47%2BVV.webp", url: "https://script.google.com/macros/s/AKfycbxJNtrKTWPCSIo9tOqq53G2xqoQCIPDTYUsVOT79Eqk8I7C5cQkGdDnj0jzlNHa7bvs3g/exec" },
    { title: "TABS", cat: "Clicker", img: "https://img.itch.zone/aW1hZ2UvMTQwNzg3Ni81MDc2MjYzLnBuZw==/original/1EQlYJ.webp", url: "https://script.google.com/macros/s/AKfycbx-20sK1Vv2W5l1l4NnyzA67dCLHiWUNOnwlGioOx9yKXkauoZt5H7l6il14wlLS9hI4A/exec" },
    { title: "Basketball Stars", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMjA2MDQzNy84MDk2OTAyLnBuZw==/original/d%2BKSbX.webp", url: "https://script.google.com/macros/s/AKfycbwzYMDDcdDUAvEP7iO6OdRk-5_oUp6vYvDdyEEz8tTOzWi5y4-Qf3vQ6TBoZuc9UYVcLg/exec" },
    { title: "Basket Random", cat: "Arcade", img: "", url: "https://hfmanor.com/basket-random" },
    { title: "Bloxors", cat: "Arcade", img: "", url: "https://hfmanor.com/bloxors" },
    { title: "Meme2048", cat: "Arcade", img: "", url: "https://hfmanor.com/meme2048" },
    { title: "Soundboard", cat: "Funny", img: "", url: "https://hfmanor.com/soundboard" },
    { title: "Edge Surf", cat: "Arcade", img: "", url: "https://hfmanor.com/edge-surf" },
    { title: "Stick Duel Battle", cat: "Action", img: "", url: "https://hfmanor.com/stick-duel-battle" },
    { title: "Moto X3M Pool", cat: "Arcade", img: "", url: "https://hfmanor.com/moto-X3M-pool" },
    { title: "10 Minutes Till Dawn", cat: "Action", img: "", url: "https://hfmanor.com/10-minutes-till-dawn" },
    { title: "Fnaw", cat: "Arcade", img: "", url: "https://hfmanor.com/fnaw" },
    { title: "HexGL", cat: "Arcade", img: "", url: "https://hfmanor.com/HexGL" },
    { title: "Miniputt", cat: "Arcade", img: "", url: "https://hfmanor.com/miniputt" },
    { title: "Bad Ice Cream 2", cat: "Arcade", img: "", url: "https://hfmanor.com/bad-ice-cream-2" },
    { title: "Worlds Hardest Game 2", cat: "Arcade", img: "", url: "https://hfmanor.com/worlds-hardest-game-2" },
    { title: "Fairsquares", cat: "Arcade", img: "", url: "https://hfmanor.com/fairsquares" },
    { title: "Sushi Unroll", cat: "Arcade", img: "", url: "https://hfmanor.com/sushi-unroll" },
    { title: "Cut The Rope Holiday", cat: "Arcade", img: "", url: "https://hfmanor.com/Cut The Rope Holiday" },
    { title: "Alienhominid", cat: "Action", img: "", url: "https://hfmanor.com/alienhominid" },
    { title: "Crossyroad", cat: "Arcade", img: "", url: "https://hfmanor.com/crossyroad" },
    { title: "Vex7", cat: "Arcade", img: "", url: "https://hfmanor.com/vex7" },
    { title: "Planetlife", cat: "Arcade", img: "", url: "https://hfmanor.com/planetlife" },
    { title: "Dragon Vs Bricks", cat: "Action", img: "", url: "https://hfmanor.com/dragon-vs-bricks" },
    { title: "Retro Bowl", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvODEzOTMxLzM3OTE4MDUucG5n/original/3CnKLa.webp", url: "https://bav1.wadmc.site.cdn.cloudflare.net/pages/other/interpreter/index.html?url=https://cdn.jsdelivr.net/gh/gn-math/html@main/33.html" },
    { title: "Geometry Dash", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMTk4ODg4MS85ODI4NjY1LnBuZw==/original/0fP7yz.webp", url: "https://mysticgames.netlify.app/games/geometrydash/" },
    { title: "CS Strike", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvODk5MDM2LzQzMDcyODEucG5n/original/PH1dFA.webp", url: "https://storage.googleapis.com/freezenova/all/2024/unity2/fps-strike/pre-gg.html" },
    { title: "Eggy Car", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMjA1MDk0NS84MDk5MDQ4LnBuZw==/original/3LvU8M.webp", url: "https://script.google.com/macros/s/AKfycbxGFiHgVNVoous7yjguN7bcuwa6lejCHgh6V1weh1vNalyCzpMmaMH9NhTisNSqkUo3/exec" },
    { title: "OvO", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMTIxMDEyLzE1MTYwLnBuZw==/original/VZbJHn.webp", url: "https://script.google.com/macros/s/AKfycbyDZOJq86UIFlMkKfvZtA_Sv86sKooVRpwVFS2rb38TOT8ExCt3PfR1Y5UAveVuVGlQLw/exec" },
    { title: "Poly Track", cat: "Arcade", img: "https://img.itch.zone/aW1hZ2UvMjE5NjM2Ni84MDk4NjUyLnBuZw==/original/v9V6qs.webp", url: "https://script.google.com/macros/s/AKfycbzOmulSCFb0CwkaIrhIBdqglMVAfxQppFmVZmp2cp8-eHLj0j_LjbQtEhNyTClffFte/exec" },

    // --- NEW GAMES ADDED ---
    { title: "Riddleschool", cat: "Puzzle", img: "", url: "https://hfmanor.com/riddleschool" },
    { title: "Popcat Classic", cat: "Arcade", img: "", url: "https://hfmanor.com/popcat-classic" },
    { title: "Tunnel Rush", cat: "Action", img: "", url: "https://hfmanor.com/tunnel-rush" },
    { title: "Edgenotfound", cat: "Arcade", img: "", url: "https://hfmanor.com/edgenotfound" },
    { title: "Dante", cat: "Arcade", img: "", url: "https://hfmanor.com/dante" },
    { title: "2048", cat: "Puzzle", img: "", url: "https://hfmanor.com/2048" },
    { title: "Slope", cat: "Arcade", img: "", url: "https://hfmanor.com/slope" },
    { title: "Waterworks", cat: "Arcade", img: "", url: "https://hfmanor.com/waterworks" },
    { title: "Hackertype", cat: "Arcade", img: "", url: "https://hfmanor.com/hackertype" },
    { title: "Sort The Court", cat: "Puzzle", img: "", url: "https://hfmanor.com/sort-the-court" },
    { title: "Vex6", cat: "Arcade", img: "", url: "https://hfmanor.com/vex6" },
    { title: "Google Feud", cat: "Arcade", img: "", url: "https://hfmanor.com/google-feud" },
    { title: "Solitaire", cat: "Puzzle", img: "", url: "https://hfmanor.com/solitaire" },
    { title: "Draw The Hill", cat: "Puzzle", img: "", url: "https://hfmanor.com/draw-the-hill" },
    { title: "Jetpack Joyride", cat: "Arcade", img: "", url: "https://hfmanor.com/jetpack-joyride" },
    { title: "Sandboxels", cat: "Arcade", img: "", url: "https://hfmanor.com/sandboxels" },
    { title: "Basketbros Io", cat: "Sports", img: "", url: "https://hfmanor.com/basketbros-io" },
    { title: "Stickman Hook", cat: "Arcade", img: "", url: "https://hfmanor.com/stickman-hook" },
    { title: "Bad Ice Cream 3", cat: "Arcade", img: "", url: "https://hfmanor.com/bad-ice-cream-3" },
    { title: "Smokingbarrels", cat: "Arcade", img: "", url: "https://hfmanor.com/smokingbarrels" },
    { title: "Wallsmash", cat: "Arcade", img: "", url: "https://hfmanor.com/wallsmash" },
    { title: "Dogeminer2", cat: "Arcade", img: "", url: "https://hfmanor.com/Dogeminer2" },
    { title: "Checkers", cat: "Arcade", img: "", url: "https://hfmanor.com/checkers" },
    { title: "You Are Bezos", cat: "Arcade", img: "", url: "https://hfmanor.com/you-are-bezos" },
    { title: "Soldier Legend", cat: "Arcade", img: "", url: "https://hfmanor.com/soldier-legend" },
    { title: "Ovo", cat: "Arcade", img: "", url: "https://hfmanor.com/ovo" },
    { title: "Geodash", cat: "Arcade", img: "", url: "https://hfmanor.com/geodash" },
    { title: "Idle Shark", cat: "Clicker", img: "", url: "https://hfmanor.com/idle-shark" },
    { title: "Papery Planes", cat: "Clicker", img: "", url: "https://hfmanor.com/papery-planes" },
    { title: "Run 3", cat: "Action", img: "", url: "https://hfmanor.com/run 3" },
    { title: "Connect3", cat: "Puzzle", img: "", url: "https://hfmanor.com/connect3" },
    { title: "Dumbwaystodie", cat: "Arcade", img: "", url: "https://hfmanor.com/dumbwaystodie" },
    { title: "Smash Karts", cat: "Sports", img: "", url: "https://hfmanor.com/Smash Karts" },
    { title: "Volley Random", cat: "Arcade", img: "", url: "https://hfmanor.com/volley-random" },
    { title: "Hexempire", cat: "Strategy", img: "", url: "https://hfmanor.com/hexempire" },
    { title: "Stealingthediamond", cat: "Arcade", img: "", url: "https://hfmanor.com/stealingthediamond" },
    { title: "Adrenalinechallenge", cat: "Arcade", img: "", url: "https://hfmanor.com/adrenalinechallenge" },
    { title: "Madalin Stunt Cars 2", cat: "Action", img: "", url: "https://hfmanor.com/madalin-stunt-cars-2" },
    { title: "Om Bounce", cat: "Arcade", img: "", url: "https://hfmanor.com/om-bounce" },
    { title: "Kittencannon", cat: "Arcade", img: "", url: "https://hfmanor.com/kittencannon" },
    { title: "Cut The Rope TR", cat: "Arcade", img: "", url: "https://hfmanor.com/Cut The Rope TR" },
    { title: "Merge Round Racers", cat: "Clicker", img: "", url: "https://hfmanor.com/merge-round-racers" },
    { title: "Flappy plane", cat: "Arcade", img: "", url: "https://hfmanor.com/flappy plane" },
    { title: "Slime Rush Td", cat: "Action", img: "", url: "https://hfmanor.com/slime-rush-td" },
    { title: "Ducklife3", cat: "Arcade", img: "", url: "https://hfmanor.com/ducklife3" },
    { title: "Spacegarden", cat: "Arcade", img: "", url: "https://hfmanor.com/spacegarden" },
    { title: "Astray", cat: "Arcade", img: "", url: "https://hfmanor.com/astray" },
    { title: "Balldodge", cat: "Arcade", img: "", url: "https://hfmanor.com/balldodge" },
    { title: "Getaway Shootout", cat: "Arcade", img: "", url: "https://hfmanor.com/getaway-shootout" },
    { title: "Ducklife4", cat: "Arcade", img: "", url: "https://hfmanor.com/ducklife4" },
    { title: "Run 2", cat: "Action", img: "", url: "https://hfmanor.com/Run 2" },
    { title: "Moto X3M 2", cat: "Sports", img: "", url: "https://hfmanor.com/moto-X3M-2" },
    { title: "Push The Square", cat: "Arcade", img: "", url: "https://hfmanor.com/push-the-square" },
    { title: "Rolly Vortex", cat: "Arcade", img: "", url: "https://hfmanor.com/rolly-vortex" },
    { title: "Tactical Weapon Pack 2", cat: "Arcade", img: "", url: "https://hfmanor.com/tactical-weapon-pack-2" },
    { title: "Tiny Islands", cat: "Arcade", img: "", url: "https://hfmanor.com/tiny-islands" },
    { title: "Pixel Gun Survival", cat: "Action", img: "", url: "https://hfmanor.com/pixel-gun-survival" },
    { title: "Blacholesquare", cat: "Arcade", img: "", url: "https://hfmanor.com/blacholesquare" },
    { title: "Moto X3M Spooky", cat: "Sports", img: "", url: "https://hfmanor.com/moto-X3M-spooky" },
    { title: "Monster Tracks", cat: "Action", img: "", url: "https://hfmanor.com/monster-tracks" },
    { title: "Generic Fishing Game", cat: "Clicker", img: "", url: "https://hfmanor.com/generic-fishing-game" },
    { title: "Chrome Dino", cat: "Arcade", img: "", url: "https://hfmanor.com/chrome-dino" },
    { title: "Madalin Stunt Cars 3", cat: "Action", img: "", url: "https://hfmanor.com/madalin-stunt-cars-3" },
    { title: "Hextris", cat: "Arcade", img: "", url: "https://hfmanor.com/hextris" },
    { title: "Tank Trouble 2", cat: "Action", img: "", url: "https://hfmanor.com/tank-trouble-2" },
    { title: "Bonkio", cat: "Arcade", img: "", url: "https://hfmanor.com/bonkio" },
    { title: "Noob Steve Parkour", cat: "Arcade", img: "", url: "https://hfmanor.com/noob-steve-parkour" },
    { title: "Defend The Tank", cat: "Action", img: "", url: "https://hfmanor.com/defend-the-tank" },
    { title: "Cluster Rush", cat: "Action", img: "", url: "https://hfmanor.com/cluster-rush" },
    { title: "Tiny Fishing", cat: "Clicker", img: "", url: "https://hfmanor.com/tiny-fishing" },
    { title: "The Final Earth 2", cat: "Arcade", img: "", url: "https://hfmanor.com/the-final-earth-2" },
    { title: "Cut The Rope", cat: "Arcade", img: "", url: "https://hfmanor.com/Cut The Rope" },
    { title: "Moto X3M", cat: "Sports", img: "", url: "https://hfmanor.com/moto-X3M" },
    { title: "Unfairmario", cat: "Arcade", img: "", url: "https://hfmanor.com/unfairmario" },
    { title: "Circlo", cat: "Arcade", img: "", url: "https://hfmanor.com/circlo" },
    { title: "Kitchen Gun Game", cat: "Action", img: "", url: "https://hfmanor.com/kitchen-gun-game" },
    { title: "Just Fall", cat: "Arcade", img: "", url: "https://hfmanor.com/just-fall" },
    { title: "Matrixrampage", cat: "Arcade", img: "", url: "https://hfmanor.com/matrixrampage" },
    { title: "Particle Clicker", cat: "Clicker", img: "", url: "https://hfmanor.com/particle-clicker" },
    { title: "Runner", cat: "Action", img: "", url: "https://hfmanor.com/runner" },
    { title: "Level13", cat: "Arcade", img: "", url: "https://hfmanor.com/level13" },
    { title: "Tv Static", cat: "Arcade", img: "", url: "https://hfmanor.com/tv-static" },
    { title: "Synesthesia", cat: "Arcade", img: "", url: "https://hfmanor.com/synesthesia" },
    { title: "OfflineParadise", cat: "Arcade", img: "", url: "https://hfmanor.com/OfflineParadise" },
    { title: "Backrooms 2d", cat: "Arcade", img: "", url: "https://hfmanor.com/backrooms-2d" },
    { title: "Idle Breakout", cat: "Clicker", img: "", url: "https://hfmanor.com/idle-breakout" },
    { title: "Theheist", cat: "Arcade", img: "", url: "https://hfmanor.com/theheist" },
    { title: "Zombs Royale", cat: "Action", img: "", url: "https://hfmanor.com/zombs-royale" },
    { title: "Sm64", cat: "Arcade", img: "", url: "https://hfmanor.com/sm64" },
    { title: "Minesweeper", cat: "Arcade", img: "", url: "https://hfmanor.com/minesweeper" },
    { title: "Earntodie", cat: "Arcade", img: "", url: "https://hfmanor.com/earntodie" },
    { title: "Doctor Acorn2", cat: "Arcade", img: "", url: "https://hfmanor.com/doctor-acorn2" },
    { title: "Hardware Tycoon", cat: "Clicker", img: "", url: "https://hfmanor.com/hardware-tycoon" },
    { title: "Rabbit Samurai2", cat: "Arcade", img: "", url: "https://hfmanor.com/rabbit-samurai2" },
    { title: "Thebattle", cat: "Action", img: "", url: "https://hfmanor.com/thebattle" },
    { title: "Slitherio", cat: "Arcade", img: "", url: "https://hfmanor.com/slitherio" },
    { title: "Rolling Forests", cat: "Arcade", img: "", url: "https://hfmanor.com/rolling-forests" },
    { title: "Exo", cat: "Arcade", img: "", url: "https://hfmanor.com/exo" },
    { title: "Marvinspectrum", cat: "Arcade", img: "", url: "https://hfmanor.com/marvinspectrum" },
    { title: "Endlesswar3", cat: "Action", img: "", url: "https://hfmanor.com/endlesswar3" },
    { title: "Push Your Luck", cat: "Arcade", img: "", url: "https://hfmanor.com/push-your-luck" },
    { title: "Deal Or No Deal", cat: "Arcade", img: "", url: "https://hfmanor.com/deal-or-no-deal" },
    { title: "Frying Nemo", cat: "Arcade", img: "", url: "https://hfmanor.com/frying-nemo" },
    { title: "The Hotel", cat: "Arcade", img: "", url: "https://hfmanor.com/the-hotel" },
    { title: "Santy Is Home", cat: "Arcade", img: "", url: "https://hfmanor.com/santy-is-home" },
    { title: "Twitch Tetris", cat: "Puzzle", img: "", url: "https://hfmanor.com/twitch-tetris" },
    { title: "Tanuki Sunset", cat: "Arcade", img: "", url: "https://hfmanor.com/tanuki-sunset" },
    { title: "Hungry Lamu", cat: "Arcade", img: "", url: "https://hfmanor.com/hungry-lamu" },
    { title: "Stick Merge", cat: "Clicker", img: "", url: "https://hfmanor.com/stick-merge" },
    { title: "Flappy 2048", cat: "Puzzle", img: "", url: "https://hfmanor.com/flappy-2048" },
    { title: "Helicopter", cat: "Arcade", img: "", url: "https://hfmanor.com/helicopter" },
    { title: "Factoryballs", cat: "Arcade", img: "", url: "https://hfmanor.com/factoryballs" },
    { title: "Go Ball", cat: "Arcade", img: "", url: "https://hfmanor.com/go-ball" },
    { title: "Goodnight", cat: "Arcade", img: "", url: "https://hfmanor.com/goodnight" },
    { title: "Rocket League", cat: "Action", img: "", url: "https://hfmanor.com/Rocket-League" },
    { title: "Doge2048", cat: "Puzzle", img: "", url: "https://hfmanor.com/doge2048" },
    { title: "Flashtetris", cat: "Puzzle", img: "", url: "https://hfmanor.com/flashtetris" },
    { title: "Btts", cat: "Arcade", img: "", url: "https://hfmanor.com/btts" },
    { title: "Knife Master", cat: "Arcade", img: "", url: "https://hfmanor.com/knife-master" },
    { title: "Swerve", cat: "Arcade", img: "", url: "https://hfmanor.com/swerve" },
    { title: "Snowbattle", cat: "Action", img: "", url: "https://hfmanor.com/snowbattle" },
    { title: "Grindcraft", cat: "Strategy", img: "", url: "https://hfmanor.com/grindcraft" },
    { title: "1", cat: "Arcade", img: "", url: "https://hfmanor.com/1" },
    { title: "Wolf2d", cat: "Arcade", img: "", url: "https://hfmanor.com/wolf2d" },
    { title: "DOOMORI", cat: "Action", img: "", url: "https://hfmanor.com/DOOMORI" },
    { title: "Ninjavsevilcorp", cat: "Action", img: "", url: "https://hfmanor.com/ninjavsevilcorp" },
    { title: "Handshakes", cat: "Arcade", img: "", url: "https://hfmanor.com/handshakes" },
    { title: "Fancypantsadventures", cat: "Arcade", img: "", url: "https://hfmanor.com/fancypantsadventures" },
    { title: "Doodle Jump", cat: "Arcade", img: "", url: "https://hfmanor.com/doodle-jump" },
    { title: "Fireboywatergirlforesttemple", cat: "Arcade", img: "", url: "https://hfmanor.com/fireboywatergirlforesttemple" },
    { title: "Interactivebuddy", cat: "Arcade", img: "", url: "https://hfmanor.com/interactivebuddy" },
    { title: "Monkey Mart", cat: "Arcade", img: "", url: "https://hfmanor.com/Monkey Mart" },
    { title: "Deepest Sword", cat: "Arcade", img: "", url: "https://hfmanor.com/deepest-sword" },
    { title: "Shotinthedark", cat: "Arcade", img: "", url: "https://hfmanor.com/shotinthedark" },
    { title: "Stack Bump 3d", cat: "Arcade", img: "", url: "https://hfmanor.com/stack-bump-3d" },
    { title: "Learntofly2", cat: "Arcade", img: "", url: "https://hfmanor.com/learntofly2" },
    { title: "Zigzag", cat: "Arcade", img: "", url: "https://hfmanor.com/zigzag" },
    { title: "Death Run 3d", cat: "Action", img: "", url: "https://hfmanor.com/death-run-3d" },
    { title: "Iceagebaby", cat: "Arcade", img: "", url: "https://hfmanor.com/iceagebaby" },
    { title: "Rabbit Samurai", cat: "Arcade", img: "", url: "https://hfmanor.com/rabbit-samurai" },
    { title: "Duke Nukem 2", cat: "Arcade", img: "", url: "https://hfmanor.com/duke-nukem-2" },
    { title: "Space Company", cat: "Arcade", img: "", url: "https://hfmanor.com/space-company" },
    { title: "Sky Car Stunt", cat: "Action", img: "", url: "https://hfmanor.com/sky-car-stunt" },
    { title: "Ninja", cat: "Action", img: "", url: "https://hfmanor.com/ninja" },
    { title: "Amidst The Clouds", cat: "Arcade", img: "", url: "https://hfmanor.com/amidst-the-clouds" },
    { title: "Thisistheonlylevel", cat: "Arcade", img: "", url: "https://hfmanor.com/thisistheonlylevel" },
    { title: "Wolf3d", cat: "Arcade", img: "", url: "https://hfmanor.com/wolf3d" },
    { title: "Stormthehouse2", cat: "Arcade", img: "", url: "https://hfmanor.com/stormthehouse2" },
    { title: "Xx142 B2exe", cat: "Arcade", img: "", url: "https://hfmanor.com/xx142-b2exe" },
    { title: "Supermarioconstruct", cat: "Arcade", img: "", url: "https://hfmanor.com/supermarioconstruct" },
    { title: "Vex4", cat: "Arcade", img: "", url: "https://hfmanor.com/vex4" },
    { title: "Vex3", cat: "Arcade", img: "", url: "https://hfmanor.com/vex3" },
    { title: "Wordle", cat: "Clicker", img: "", url: "https://hfmanor.com/wordle" },
    { title: "Greybox", cat: "Arcade", img: "", url: "https://hfmanor.com/greybox" },
    { title: "Google Snake", cat: "Arcade", img: "", url: "https://hfmanor.com/google-snake" },
    { title: "Precision Client", cat: "Arcade", img: "", url: "https://hfmanor.com/precision-client" },
    { title: "X Trial Racing", cat: "Sports", img: "", url: "https://hfmanor.com/x-trial-racing" },
    { title: "Dodge", cat: "Action", img: "", url: "https://hfmanor.com/dodge" },
    { title: "Soccer Random", cat: "Sports", img: "", url: "https://hfmanor.com/soccer-random" },
    { title: "Missiles", cat: "Arcade", img: "", url: "https://hfmanor.com/missiles" },
    { title: "Angry Sharks", cat: "Arcade", img: "", url: "https://hfmanor.com/angry-sharks" },
    { title: "The Final Earth", cat: "Arcade", img: "", url: "https://hfmanor.com/the-final-earth" },
    { title: "Superautopets", cat: "Arcade", img: "", url: "https://hfmanor.com/superautopets" },
    { title: "A Dance Of Fire And Ice", cat: "Arcade", img: "", url: "https://hfmanor.com/a-dance-of-fire-and-ice" },
    { title: "Vex2", cat: "Arcade", img: "", url: "https://hfmanor.com/vex2" },
    { title: "Temple Run 2", cat: "Action", img: "", url: "https://hfmanor.com/temple-run-2" },
    { title: "Csgo Clicker", cat: "Clicker", img: "", url: "https://hfmanor.com/csgo-clicker" },
    { title: "Craftmine", cat: "Strategy", img: "", url: "https://hfmanor.com/craftmine" },
    { title: "Vex5", cat: "Arcade", img: "", url: "https://hfmanor.com/vex5" },
    { title: "Townscaper", cat: "Strategy", img: "", url: "https://hfmanor.com/townscaper" },
    { title: "Spelunky", cat: "Arcade", img: "", url: "https://hfmanor.com/spelunky" },
    { title: "Fruit Ninja", cat: "Action", img: "", url: "https://hfmanor.com/fruit-ninja" },
    { title: "My Rusty Submarine", cat: "Arcade", img: "", url: "https://hfmanor.com/my-rusty-submarine" },
    { title: "Soccer Skills", cat: "Sports", img: "", url: "https://hfmanor.com/soccer-skills" },
    { title: "Canyon Defense", cat: "Action", img: "", url: "https://hfmanor.com/canyon-defense" },
    { title: "Shell Shockers", cat: "Arcade", img: "", url: "https://hfmanor.com/shell-shockers" },
    { title: "Station 141", cat: "Arcade", img: "", url: "https://hfmanor.com/station-141" },
    { title: "Ltf3", cat: "Arcade", img: "", url: "https://hfmanor.com/ltf3" },
    { title: "Align 4", cat: "Arcade", img: "", url: "https://hfmanor.com/align-4" },
    { title: "Bacon May Die", cat: "Arcade", img: "", url: "https://hfmanor.com/bacon-may-die" },
    { title: "Cell Machine", cat: "Arcade", img: "", url: "https://hfmanor.com/cell-machine" },
    { title: "Tosstheturtle", cat: "Arcade", img: "", url: "https://hfmanor.com/tosstheturtle" },
    { title: "Overwatch", cat: "Arcade", img: "", url: "https://hfmanor.com/overwatch" },
    { title: "Worlds Hardest Game", cat: "Arcade", img: "", url: "https://hfmanor.com/worlds-hardest-game" },
    { title: "Polybranch", cat: "Arcade", img: "", url: "https://hfmanor.com/polybranch" },
    { title: "100ng", cat: "Arcade", img: "", url: "https://hfmanor.com/100ng" },
    { title: "Scratcharia", cat: "Arcade", img: "", url: "https://hfmanor.com/scratcharia" },
    { title: "Piclient", cat: "Arcade", img: "", url: "https://hfmanor.com/piclient" },
    { title: "Hill Climb Racing", cat: "Sports", img: "", url: "https://hfmanor.com/hill-climb-racing" },
    { title: "Highrisehop", cat: "Arcade", img: "", url: "https://hfmanor.com/highrisehop" },
    { title: "Ns Shaft", cat: "Arcade", img: "", url: "https://hfmanor.com/ns-shaft" },
    { title: "Cannon Basketball 4", cat: "Arcade", img: "", url: "https://hfmanor.com/cannon-basketball-4" },
    { title: "Stickman Boost", cat: "Arcade", img: "", url: "https://hfmanor.com/stickman-boost" },
    { title: "Boxhead2play", cat: "Arcade", img: "", url: "https://hfmanor.com/boxhead2play" },
    { title: "Learntofly", cat: "Arcade", img: "", url: "https://hfmanor.com/learntofly" },
    { title: "Weavesilk", cat: "Arcade", img: "", url: "https://hfmanor.com/weavesilk" },
    { title: "Riddletransfer", cat: "Puzzle", img: "", url: "https://hfmanor.com/riddletransfer" },
    { title: "Cupcake2048", cat: "Puzzle", img: "", url: "https://hfmanor.com/cupcake2048" },
    { title: "Evolution", cat: "Arcade", img: "", url: "https://hfmanor.com/evolution" },
    { title: "Cubefield", cat: "Arcade", img: "", url: "https://hfmanor.com/cubefield" },
    { title: "Subway Surfers Ny", cat: "Arcade", img: "", url: "https://hfmanor.com/subway-surfers-ny" },
    { title: "Happy Hop", cat: "Arcade", img: "", url: "https://hfmanor.com/happy-hop" },
    { title: "Scrapmetal", cat: "Arcade", img: "", url: "https://hfmanor.com/scrapmetal" },
    { title: "Riddletransfer2", cat: "Puzzle", img: "", url: "https://hfmanor.com/riddletransfer2" },
    { title: "Superhot", cat: "Arcade", img: "", url: "https://hfmanor.com/superhot" },
    { title: "Legacyflashgames", cat: "Arcade", img: "", url: "https://hfmanor.com/legacyflashgames" },
    { title: "Riddleschool2", cat: "Puzzle", img: "", url: "https://hfmanor.com/riddleschool2" },
    { title: "Champion Island", cat: "Arcade", img: "", url: "https://hfmanor.com/champion-island" },
    { title: "Kirkaio", cat: "Arcade", img: "", url: "https://hfmanor.com/kirkaio" },
    { title: "Shogunshowdown", cat: "Action", img: "", url: "https://hfmanor.com/shogunshowdown" },
    { title: "Backrooms", cat: "Arcade", img: "", url: "https://hfmanor.com/backrooms" },
    { title: "Riddleschool5", cat: "Puzzle", img: "", url: "https://hfmanor.com/riddleschool5" },
    { title: "Flippy Fish", cat: "Arcade", img: "", url: "https://hfmanor.com/flippy-fish" },
    { title: "Fantasy Dash", cat: "Arcade", img: "", url: "https://hfmanor.com/fantasy-dash" },
    { title: "Iron dash", cat: "Arcade", img: "", url: "https://hfmanor.com/iron dash" },
    { title: "Papasburgeria", cat: "Arcade", img: "", url: "https://hfmanor.com/papasburgeria" },
    { title: "Creativekillchamber", cat: "Arcade", img: "", url: "https://hfmanor.com/creativekillchamber" },
    { title: "Core Ball", cat: "Arcade", img: "", url: "https://hfmanor.com/core-ball" },
    { title: "Avalanche", cat: "Arcade", img: "", url: "https://hfmanor.com/avalanche" },
    { title: "Georgeandtheprinter", cat: "Arcade", img: "", url: "https://hfmanor.com/georgeandtheprinter" },
    { title: "Pigeon Ascent", cat: "Arcade", img: "", url: "https://hfmanor.com/pigeon-ascent" },
    { title: "Gravity Soccer", cat: "Sports", img: "", url: "https://hfmanor.com/gravity-soccer" },
    { title: "Ages Of Conflict", cat: "Arcade", img: "", url: "https://hfmanor.com/ages-of-conflict" },
    { title: "Riddleschool4", cat: "Puzzle", img: "", url: "https://hfmanor.com/riddleschool4" },
    { title: "Adarkroom", cat: "Arcade", img: "", url: "https://hfmanor.com/adarkroom" },
    { title: "Riddleschool3", cat: "Puzzle", img: "", url: "https://hfmanor.com/riddleschool3" },
    { title: "Awesometanks2", cat: "Action", img: "", url: "https://hfmanor.com/awesometanks2" },
    { title: "Yohoho", cat: "Arcade", img: "", url: "https://hfmanor.com/yohoho" },
    { title: "9007199254740992", cat: "Arcade", img: "", url: "https://hfmanor.com/9007199254740992" },
    { title: "Bus and subway", cat: "Arcade", img: "", url: "https://hfmanor.com/bus and subway" },
    { title: "Mindustry", cat: "Arcade", img: "", url: "https://hfmanor.com/mindustry" },
    { title: "Bobtherobber2", cat: "Arcade", img: "", url: "https://hfmanor.com/bobtherobber2" },
    { title: "2048 Multitask", cat: "Puzzle", img: "", url: "https://hfmanor.com/2048-multitask" },
    { title: "Eel Slap", cat: "Arcade", img: "", url: "https://hfmanor.com/eel-slap" },
    { title: "Chill Radio", cat: "Arcade", img: "", url: "https://hfmanor.com/chill-radio" },
    { title: "There Is No Game", cat: "Arcade", img: "", url: "https://hfmanor.com/there-is-no-game" },
    { title: "Throwrocks", cat: "Arcade", img: "", url: "https://hfmanor.com/throwrocks" },
    { title: "Ballistic Chickens", cat: "Arcade", img: "", url: "https://hfmanor.com/ballistic-chickens" },
    { title: "Linerider", cat: "Arcade", img: "", url: "https://hfmanor.com/linerider" },
    { title: "Bigredbutton", cat: "Arcade", img: "", url: "https://hfmanor.com/bigredbutton" },
    { title: "Resent Client", cat: "Arcade", img: "", url: "https://hfmanor.com/resent-client" },
    { title: "Trimps", cat: "Arcade", img: "", url: "https://hfmanor.com/Trimps" },
    { title: "Elasticman", cat: "Arcade", img: "", url: "https://hfmanor.com/elasticman" },
    { title: "CMM Client", cat: "Arcade", img: "", url: "https://hfmanor.com/CMM Client" },
    { title: "Plants vs zombies 1", cat: "Action", img: "", url: "https://hfmanor.com/plants vs zombies 1" },
    { title: "Backrooms2d", cat: "Arcade", img: "", url: "https://hfmanor.com/backrooms2d" },
    { title: "Pandemic2", cat: "Arcade", img: "", url: "https://hfmanor.com/pandemic2" },
    { title: "99balls", cat: "Arcade", img: "", url: "https://hfmanor.com/99balls" },
    { title: "Yoshifabrication", cat: "Arcade", img: "", url: "https://hfmanor.com/yoshifabrication" },
    { title: "Baldis Basics", cat: "Arcade", img: "", url: "https://hfmanor.com/baldis-basics" },
    { title: "Gimme The Airpod", cat: "Arcade", img: "", url: "https://hfmanor.com/gimme-the-airpod" },
    { title: "ShapeShootout", cat: "Arcade", img: "", url: "https://hfmanor.com/ShapeShootout" },
    { title: "Robuxclicker", cat: "Clicker", img: "", url: "https://hfmanor.com/robuxclicker" },
    { title: "Drift Hunters", cat: "Sports", img: "", url: "https://hfmanor.com/drift-hunters" },
    { title: "Webretro", cat: "Arcade", img: "", url: "https://hfmanor.com/webretro" },
    { title: "Friday Night Funkin'", cat: "Arcade", img: "", url: "https://hfmanor.com/Friday Night Funkin'" },
    { title: "Stack", cat: "Arcade", img: "", url: "https://hfmanor.com/stack" },
    { title: "Breakingthebank", cat: "Arcade", img: "", url: "https://hfmanor.com/breakingthebank" },
    { title: "Protektor", cat: "Arcade", img: "", url: "https://hfmanor.com/protektor" },
    { title: "Championarcher", cat: "Arcade", img: "", url: "https://hfmanor.com/championarcher" },
    { title: "Just One Boss", cat: "Action", img: "", url: "https://hfmanor.com/just-one-boss" },
    { title: "Run", cat: "Action", img: "", url: "https://hfmanor.com/run" },
    { title: "Blackknight", cat: "Arcade", img: "", url: "https://hfmanor.com/blackknight" },
    { title: "Slope Ball", cat: "Arcade", img: "", url: "https://hfmanor.com/slope-ball" },
    { title: "Fake Virus", cat: "Arcade", img: "", url: "https://hfmanor.com/fake-virus" },
    { title: "Fleeingthecomplex", cat: "Arcade", img: "", url: "https://hfmanor.com/fleeingthecomplex" },
    { title: "N Gon", cat: "Arcade", img: "", url: "https://hfmanor.com/n-gon" },
    { title: "Evil Glitch", cat: "Arcade", img: "", url: "https://hfmanor.com/evil-glitch" },
    { title: "Tube Jumpers", cat: "Arcade", img: "", url: "https://hfmanor.com/tube-jumpers" },
    { title: "Minecraft", cat: "Strategy", img: "", url: "https://hfmanor.com/Minecraft" },
    { title: "Adventure Drivers", cat: "Arcade", img: "", url: "https://hfmanor.com/adventure-drivers" },
    { title: "Burger And Frights", cat: "Arcade", img: "", url: "https://hfmanor.com/burger-and-frights" },
    { title: "Battleforgondor", cat: "Action", img: "", url: "https://hfmanor.com/battleforgondor" },
    { title: "Sleepingbeauty", cat: "Arcade", img: "", url: "https://hfmanor.com/sleepingbeauty" },
    { title: "Papaspizzaria", cat: "Arcade", img: "", url: "https://hfmanor.com/papaspizzaria" },
    { title: "Spinningrat", cat: "Arcade", img: "", url: "https://hfmanor.com/spinningrat" },
    { title: "Mario", cat: "Arcade", img: "", url: "https://hfmanor.com/mario" },
    { title: "Ruffle", cat: "Arcade", img: "", url: "https://hfmanor.com/ruffle" },
    { title: "Mineblocks", cat: "Arcade", img: "", url: "https://hfmanor.com/mineblocks" },
    { title: "Amazing Rope Police", cat: "Arcade", img: "", url: "https://hfmanor.com/amazing-rope-police" },
    { title: "Nsresurgence", cat: "Arcade", img: "", url: "https://hfmanor.com/nsresurgence" },
    { title: "Bad Ice Cream", cat: "Arcade", img: "", url: "https://hfmanor.com/bad-ice-cream" },
    { title: "Hba", cat: "Arcade", img: "", url: "https://hfmanor.com/hba" },
    { title: "Rooftop Snipers", cat: "Arcade", img: "", url: "https://hfmanor.com/rooftop-snipers" },
    { title: "Froggys Battle", cat: "Action", img: "", url: "https://hfmanor.com/froggys-battle" },
    { title: "Scooperia", cat: "Arcade", img: "", url: "https://hfmanor.com/scooperia" },
    { title: "Sand Game", cat: "Arcade", img: "", url: "https://hfmanor.com/sand-game" },
    { title: "Tacticalassasin2", cat: "Arcade", img: "", url: "https://hfmanor.com/tacticalassasin2" },
    { title: "DogeMiner", cat: "Arcade", img: "", url: "https://hfmanor.com/DogeMiner" },
    { title: "Stickman Golf", cat: "Arcade", img: "", url: "https://hfmanor.com/stickman-golf" },
    { title: "Achievementunlocked", cat: "Arcade", img: "", url: "https://hfmanor.com/achievementunlocked" },
    { title: "Ltf Idle", cat: "Clicker", img: "", url: "https://hfmanor.com/ltf-idle" },
    { title: "Aquapark Slides", cat: "Arcade", img: "", url: "https://hfmanor.com/aquapark-slides" },
    { title: "Iceagebaby2", cat: "Arcade", img: "", url: "https://hfmanor.com/iceagebaby2" },
    { title: "Stationmeltdown", cat: "Arcade", img: "", url: "https://hfmanor.com/stationmeltdown" },
    { title: "Osu!", cat: "Arcade", img: "", url: "https://hfmanor.com/osu!" },
    { title: "Flappy Bird", cat: "Arcade", img: "", url: "https://hfmanor.com/flappy-bird" },
    { title: "Veloce", cat: "Arcade", img: "", url: "https://hfmanor.com/veloce" },
    { title: "Portalflash", cat: "Arcade", img: "", url: "https://hfmanor.com/portalflash" },
    { title: "Geojump", cat: "Arcade", img: "", url: "https://hfmanor.com/geojump" },
    { title: "Stickwar", cat: "Arcade", img: "", url: "https://hfmanor.com/stickwar" },
    { title: "Krunker", cat: "Action", img: "", url: "https://hfmanor.com/krunker" },
    { title: "Geoneondash", cat: "Arcade", img: "", url: "https://hfmanor.com/geoneondash" },
    { title: "Poom", cat: "Arcade", img: "", url: "https://hfmanor.com/poom" },
    { title: "Blockpost", cat: "Arcade", img: "", url: "https://hfmanor.com/blockpost" },
    { title: "Escapingtheprison", cat: "Arcade", img: "", url: "https://hfmanor.com/escapingtheprison" },
    { title: "Impossiblequiz", cat: "Arcade", img: "", url: "https://hfmanor.com/impossiblequiz" },
    { title: "Cars Simulator", cat: "Strategy", img: "", url: "https://hfmanor.com/cars-simulator" },
    { title: "Idledices", cat: "Clicker", img: "", url: "https://hfmanor.com/idledices" },
    { title: "Shuttledeck", cat: "Arcade", img: "", url: "https://hfmanor.com/shuttledeck" },
    { title: "1v1lol", cat: "Arcade", img: "", url: "https://hfmanor.com/1v1lol" },
    { title: "1v1space", cat: "Arcade", img: "", url: "https://hfmanor.com/1v1space" },
    { title: "Superfowlist", cat: "Arcade", img: "", url: "https://hfmanor.com/superfowlist" },
    { title: "Game Inside", cat: "Arcade", img: "", url: "https://hfmanor.com/game-inside" },
    { title: "Angelunder", cat: "Arcade", img: "", url: "https://hfmanor.com/angelunder" },
    { title: "Moto X3M Winter", cat: "Sports", img: "", url: "https://hfmanor.com/moto-X3M-winter" },
    { title: "Geodashlite", cat: "Arcade", img: "", url: "https://hfmanor.com/geodashlite" },
    { title: "Paper.io 2", cat: "Clicker", img: "", url: "https://hfmanor.com/Paper.io 2" },
    { title: "Glass City", cat: "Strategy", img: "", url: "https://hfmanor.com/glass-city" },
    { title: "Gun Spin", cat: "Action", img: "", url: "https://hfmanor.com/gun-spin" },
    { title: "Roblox", cat: "Arcade", img: "", url: "https://hfmanor.com/roblox" },
    { title: "Tomb Of The Mask", cat: "Arcade", img: "", url: "https://hfmanor.com/tomb-of-the-mask" },
    { title: "Infinite Craft", cat: "Strategy", img: "", url: "https://hfmanor.com/infinite-craft" },
    { title: "Getting Over It", cat: "Arcade", img: "", url: "https://hfmanor.com/getting-over-it" },
    { title: "Bottle Flip 3d", cat: "Arcade", img: "", url: "https://hfmanor.com/bottle-flip-3d" },
    { title: "Dune", cat: "Arcade", img: "", url: "https://hfmanor.com/dune" },
    { title: "Spacebar Clicker", cat: "Clicker", img: "", url: "https://hfmanor.com/spacebar-clicker" },
    { title: "A Small World Cup", cat: "Arcade", img: "", url: "https://hfmanor.com/a-small-world-cup" },
    { title: "Spill It", cat: "Arcade", img: "", url: "https://hfmanor.com/spill-it" },
    { title: "Time Shooter 2", cat: "Action", img: "", url: "https://hfmanor.com/time-shooter-2" },
    { title: "Fortnite", cat: "Action", img: "", url: "https://hfmanor.com/fortnite" },
    { title: "Grand Shift Auto", cat: "Arcade", img: "", url: "https://hfmanor.com/grand-shift-auto" },
    { title: "Happy Glass 1", cat: "Arcade", img: "", url: "https://hfmanor.com/happy-glass-1" },
    { title: "Snowball", cat: "Arcade", img: "", url: "https://hfmanor.com/snowball" },
    { title: "Dreadhead Parkout", cat: "Arcade", img: "", url: "https://hfmanor.com/dreadhead-parkout" },
    { title: "Hoops", cat: "Sports", img: "", url: "https://hfmanor.com/hoops" },
    { title: "Route Digger", cat: "Arcade", img: "", url: "https://hfmanor.com/route-digger" },
    { title: "Call Of Ops", cat: "Action", img: "", url: "https://hfmanor.com/call-of-ops" },
    { title: "Pixel Combat 2", cat: "Arcade", img: "", url: "https://hfmanor.com/pixel-combat-2" },
    { title: "Five Nights At Freddy 1", cat: "Arcade", img: "", url: "https://hfmanor.com/five-nights-at-freddy-1" },
    { title: "Five Nights At Freddy 2", cat: "Arcade", img: "", url: "https://hfmanor.com/five-nights-at-freddy-2" },
    { title: "Funny Shooter 2", cat: "Action", img: "", url: "https://hfmanor.com/funny-shooter-2" },
    { title: "Time Shooter 3", cat: "Action", img: "", url: "https://hfmanor.com/time-shooter-3" },
    { title: "Paper.io 1", cat: "Clicker", img: "", url: "https://hfmanor.com/paper.io-1" },
    { title: "Hole.io", cat: "Arcade", img: "", url: "https://hfmanor.com/hole.io" },
    { title: "Javascript Snake", cat: "Arcade", img: "", url: "https://hfmanor.com/javascript-snake" },
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

/** Sidebar order; any category present in data but not listed sorts after these. */
const GAME_CATEGORY_NAV_ORDER = [
    'Action', 'Arcade', 'Racing', 'Platformer', 'IO and Multiplayer',
    'Tower Defense', 'Horror', 'Puzzle', 'Strategy', 'Simulation',
    'Sports', 'Clicker', 'Funny'
];

/**
 * Spreads games out of overloaded Arcade/Action using title + URL hints.
 * Runs once at load; first matching rule wins.
 */
function applyCategoryRules() {
    const rules = [
        { cat: 'Tower Defense', test: (t, u) => /tower defense|bloons|\btd\b|defend the tank|slime rush|mindustry|canyon defense|rush td/i.test(t) || /tower|bloons|defend-the-tank|slime-rush/i.test(u) },
        { cat: 'Horror', test: (t, u) => /fnaf|freddy|five nights|backroom|baldis|rainbow friend|hungry lamu|99 nights|fnaw|burger and frights/i.test(t) || /fnaf|backroom|baldis|rainbow|freddy/i.test(u) },
        { cat: 'IO and Multiplayer', test: (t, u) => /\.io\b|\bio\b|slither|paper\.?io|hole\.?io|shell shock|zombs|krunker|bonkio|1v1|smash karts|yohoho|getaway shootout|among us|kirkaio|rocketgoal/i.test(t) || /\.io|slither|paper\.io|hole\.io|shell-shock|zombs|krunker|bonkio|1v1|smash-karts|yohoho|among/i.test(u) },
        { cat: 'Racing', test: (t, u) => /slope|drift|moto|madalin|tunnel rush|snow rider|hexgl|poly track|eggy car|drive mad|monster track|subway|kart|truck|wheels|stunt car|pipe rider|speed stars|drag racer|car vs|hill climb|scrapmetal|adventure driver|grand shift auto|blob man runner|tanuki sunset/i.test(t) || /slope|drift|moto|madalin|tunnel-rush|snow-rider|hexgl|polytrack|eggy-car|drive-mad|monster-track|subway|kart|stunt|pipe-rider|speed-stars|drag-racer|hill-climb/i.test(u) },
        { cat: 'Platformer', test: (t, u) => /\bvex\b|run 3|run 2|\brun\b|geometry dash|geodash|ovo|crossy|fireboy|ducklife|happy wheels|getting over it|only up|super mario|sonic|spelunky|doodle jump|stickman hook|tomb of the mask|world'?s hardest|bad ice|cut the rope|jelly|parkour|obby|learn to fly|fancy pants|rabbit samurai|deepest sword|stack bump|zigzag|dune\b|flappy|jetpack|cluster rush|crossyroad|vex\d/i.test(t) || /vex|run-3|run-2|geometry|geodash|\bovo\b|crossy|fireboy|ducklife|happy-wheels|getting-over|only-up|mario|sonic|spelunky|doodle|stickman-hook|tomb-of|hardest|bad-ice|cut-the-rope|learn-to-fly|fancy-pants|rabbit-samurai|deepest-sword|stack-bump|zigzag|flappy|jetpack|obby|cluster-rush/i.test(u) },
        { cat: 'Sports', test: (t, u) => /\b(basket|soccer|football|golf|volley|bowl|hockey|pool|miniputt|retro bowl|sports?|madden|nba|wrestle|baseball|skiing|surfing|boxing|punch|tennis|volleyball|hop masters|air hockey|battle soccer|ice hockey|1 on 1|edge surf)\b/i.test(t) || /basket|soccer|football|golf|volley|bowl|hockey|pool|miniputt|retro-bowl|wrestle|baseball|edge-surf|punch-out|air-hockey|battle-soccer|ice-hockey/i.test(u) },
        { cat: 'Puzzle', test: (t, u) => /2048|puzzle|riddle\s*school|minesweeper|tetris|wordle|solitaire|bloxors|sudoku|connect\s*3|draw the hill|waterworks|fairsquares|sushi unroll|impossible quiz|this is the only level|factoryballs|align\s*4|checkers|there is no game|greybox|route digger|happy glass|spill it|bottle flip|google feud/i.test(t) || /2048|riddle|minesweeper|tetris|wordle|solitaire|bloxors|connect3|draw-the-hill|waterworks|fairsquares|impossiblequiz|factoryballs|align-4|checkers|there-is-no-game|route-digger|happy-glass|spill-it|bottle-flip|google-feud/i.test(u) },
        { cat: 'Simulation', test: (t, u) => /bitlife|planetlife|sort the court|tabs\b|totally accurate|papas|papa'|theme hotel|gacha|cooking fever|hardware tycoon|space company|flight sim|tycoon|\bfarm\b|\bhotel\b|dogeminer|you are bezos|sandboxels|trimps|adarkroom|townscaper|grow a garden/i.test(t) || /bitlife|planetlife|sort-the-court|papas|papa-|theme-hotel|gacha|cooking-fever|hardware-tycoon|space-company|tycoon|dogeminer|you-are-bezos|sandboxels|trimps|adarkroom|townscaper|grow-a-garden/i.test(u) },
        { cat: 'Strategy', test: (t, u) => /hex empire|craftmine|minecraft|plants vs|pandemic|infinite craft|glass city|\bhex\b(?!\s*gl)|evolution\b|superauto|final earth|tiny islands|ages of conflict|stick war|castel war|command and|grinde?craft/i.test(t) || /hexempire|craftmine|minecraft|plants-vs|pandemic|infinite-craft|glass-city|superautopets|final-earth|tiny-islands|ages-of-conflict|stickwar|castel-wars|grindcraft/i.test(u) },
        { cat: 'Action', test: (t, u) => /shooter|strike|doom|ninja|gun|sniper|combat|battle(?!\s*soccer)|tank trouble|war strike|pixel.*shoot|alien|zombie|fps|fortnite|brawl|ragdoll archer|time shooter|kitchen gun|temple run|fruit ninja|krunk|overwatch|csgo|call of ops|legend of zelda|stick.*fight|duel|n gon|matrix|ninja vs|endless war|awesome tank|plants vs zombies|pvz|stickman street fighter/i.test(t) || /shooter|strike|doom|ninja|gun|sniper|combat|battle(?!-soccer)|tank-trouble|war-strike|pixel-shoot|alienhominid|zombie|time-shooter|kitchen-gun|temple-run|fruit-ninja|krunker|overwatch|call-of-ops|zelda|stick-duel|n-gon|matrix|ninjavsevil|endlesswar|awesometanks|plants-vs-zombies|stickman-street-fighter/i.test(u) },
        { cat: 'Clicker', test: (t, u) => /clicker|idle|cookie|miner|space bar|merge round|particle|papery|nugget|poop|robux|spacebar|csgo clicker|frog clicker|idledice/i.test(t) || /clicker|idle|cookie|miner|space-bar|merge-round|particle|papery|nugget|poop|robux|spacebar|csgo-clicker|frog-clicker|idledice/i.test(u) },
        { cat: 'Funny', test: (t, u) => /brainrot|strong man|soundboard|dumb ways|eel slap|elasticman|spinning rat|gimme the airpod|fake virus|bigredbutton|throwrocks|kitten cannon|creative kill|pigeon ascent/i.test(t) || /brainrot|strong-man|soundboard|dumbwaystodie|eel-slap|elasticman|spinningrat|gimme-the-airpod|fake-virus|bigredbutton|throwrocks|kittencannon|creativekillchamber|pigeon-ascent/i.test(u) }
    ];

    for (const g of gamesData) {
        const t = (g.title || '').toLowerCase();
        const u = (g.url || '').toLowerCase();
        for (const { cat, test } of rules) {
            if (test(t, u)) {
                g.cat = cat;
                break;
            }
        }
    }
}

applyCategoryRules();

function getSortedCategoriesFromData() {
    const present = [...new Set(gamesData.map((g) => g.cat))];
    const rank = (c) => {
        const i = GAME_CATEGORY_NAV_ORDER.indexOf(c);
        return i === -1 ? 100 + c.localeCompare('') : i;
    };
    return present.sort((a, b) => {
        const da = rank(a);
        const db = rank(b);
        if (da !== db) return da - db;
        return a.localeCompare(b);
    });
}

function filterGamesFromEl(btn) {
    const category = btn.getAttribute('data-category');
    if (category) filterGames(category, btn);
}

function initCategoryDropdown() {
    const dropdown = document.getElementById('cat-dropdown');
    if (!dropdown) return;
    const cats = getSortedCategoriesFromData();
    dropdown.innerHTML = cats
        .map((c) => {
            const esc = c.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
            return `<div class="sub-item" data-category="${esc}" onclick="filterGamesFromEl(this)">${c}</div>`;
        })
        .join('');
}

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
    document.addEventListener('DOMContentLoaded', () => {
        initCategoryDropdown();
        initSiteLoader();
    });
} else {
    initCategoryDropdown();
    initSiteLoader();
}

let dailyGamePick = null;
let dailyGameRefreshTimer = null;

/** Local calendar date YYYY-MM-DD (used so the pick changes at midnight in the user's timezone). */
function dailyGameDateKey(date) {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

/** Deterministic index from date so the same day always shows the same game until the next day. */
function dailyGameIndexForDate(date) {
    const key = dailyGameDateKey(date);
    let h = 2166136261;
    for (let i = 0; i < key.length; i++) {
        h ^= key.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return Math.abs(h >>> 0) % gamesData.length;
}

function pickDailyGameForDate(date) {
    return gamesData[dailyGameIndexForDate(date)];
}

function renderDailyGame() {
    if (!gamesData.length) return;
    dailyGamePick = pickDailyGameForDate(new Date());
    const titleEl = document.getElementById('daily-game-title');
    const catEl = document.getElementById('daily-game-cat');
    if (titleEl) titleEl.textContent = dailyGamePick.title;
    if (catEl) catEl.textContent = dailyGamePick.cat;
}

function playDailyGame() {
    if (dailyGamePick) launchGame(dailyGamePick.url);
}

function playRandomGame() {
    if (!gamesData.length) return;
    const randomIndex = Math.floor(Math.random() * gamesData.length);
    launchGame(gamesData[randomIndex].url);
}

function scheduleDailyGameMidnightRefresh() {
    if (dailyGameRefreshTimer) clearTimeout(dailyGameRefreshTimer);
    const now = new Date();
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
    const ms = Math.max(1000, nextMidnight - now);
    dailyGameRefreshTimer = setTimeout(() => {
        renderDailyGame();
        scheduleDailyGameMidnightRefresh();
    }, ms);
}

function initDailyGame() {
    renderDailyGame();
    scheduleDailyGameMidnightRefresh();
}

window.onload = function() {
    renderAllGames(gamesData, 'all-games-grid');
    initHomeAnimation();
    initDailyGame();
    updateTime();
};

/* --- RENDERING SYSTEM --- */
function renderAllGames(list, containerId) {
    const grid = document.getElementById(containerId);
    if(!grid) return;

    const order = [...list];
    for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
    }

    grid.innerHTML = order.map(game => `
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
}

function toggleGameBar() {
    const bar = document.getElementById('frame-controls');
    const tab = document.getElementById('show-bar-tab');
    const isHidden = bar.classList.toggle('bar-hidden');
    if (isHidden) {
        tab.classList.add('visible');
    } else {
        tab.classList.remove('visible');
    }
}

function closeGame(event) {
    if (event) event.stopPropagation();
    const container = document.getElementById('game-frame-container');
    const iframe = document.getElementById('game-frame');
    iframe.src = '';
    container.style.display = 'none';
    // Reset bar visibility for next game
    const bar = document.getElementById('frame-controls');
    const tab = document.getElementById('show-bar-tab');
    if (bar) bar.classList.remove('bar-hidden');
    if (tab) tab.classList.remove('visible');
}
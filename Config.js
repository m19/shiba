
module.exports =
  {
    ENV:            process.env.NODE_ENV || 'development',
    VERSION:        require('./package.json').version,
    GAMESERVER:     process.env.BUSTABIT_GAMESERVER || "https://btc.tothemoon.me:443/game",
    WEBSERVER:      process.env.BUSTABIT_WEBSERVER || "https://btc.tothemoon.me",
    OXR_APP_ID:     process.env.OXR_APP_ID,
    SESSION:        process.env.SHIBA_SESSION || '',
    DATABASE:       process.env.DATABASE_URL_SHIBA || 'postgres://localhost/shibadb',
    CHAT_HISTORY:   process.env.SHIBA_CHAT_HISTORY || 100,
    GAME_HISTORY:   process.env.SHIBA_GAME_HISTORY || 100
  };

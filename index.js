//Modifying my script doesn't make you a programmer, bru, it just makes you a script kiddie.
const express = require("express");
const cors = require("cors");
const path = require("path");
const axios = require("axios");
const {
  fetchJson
} = require('./lib/myfunc');
const app = express();
const PORT = process.env.PORT || 0xbb8;
app.enable("trust proxy");
app.set("json spaces", 0x2);
mess = {
  'error': {
    'status': false,
    'message': "Error, Service Unavaible",
    'maintanied_by': "The Developer03-"
  },
  'noturl': {
    'status': false,
    'message': "Error, Invalid Url",
    'maintanied_by': "The Developer03-"
  },
  'notquery': {
    'status': false,
    'code': 0x193,
    'message': "Error, Invalid Query",
    'maintanied_by': "The Developer03-"
  }
};
app.use(cors());
async function ragBot(_0x503fac) {
  try {
    const _0x58a738 = await axios.post("https://ragbot-starter.vercel.app/api/chat", {
      'messages': [{
        'role': 'user',
        'content': _0x503fac
      }],
      'useRag': true,
      'llm': "gpt-3.5-turbo",
      'similarityMetric': "cosine"
    });
    return _0x58a738.data;
  } catch (_0x30766c) {
    throw _0x30766c;
  }
}
async function degreeGuru(_0x11ec17, _0x17594d) {
  try {
    const _0x22ece7 = await axios.post('https://degreeguru.vercel.app/api/guru', {
      'messages': [{
        'role': "user",
        'content': _0x11ec17
      }]
    });
    return _0x22ece7.data;
  } catch (_0x38df20) {
    throw _0x38df20;
  }
}
async function pinecone(_0x25f677) {
  try {
    const _0x5ea10b = await axios.post("https://pinecone-vercel-example.vercel.app/api/chat", {
      'messages': [{
        'role': "user",
        'content': _0x25f677
      }]
    });
    return _0x5ea10b.data;
  } catch (_0x7a314c) {
    throw _0x7a314c;
  }
}
async function smartContract(_0x4e3b1e) {
  try {
    const _0x4ab60f = await axios.post('https://smart-contract-gpt.vercel.app/api/chat', {
      'messages': [{
        'content': _0x4e3b1e,
        'role': 'user'
      }]
    });
    return _0x4ab60f.data;
  } catch (_0x51cd54) {
    throw _0x51cd54;
  }
}
async function blackboxAIChat(_0x2ff24d) {
  try {
    const _0x25ede4 = await axios.post("https://www.blackbox.ai/api/chat", {
      'messages': [{
        'id': null,
        'content': _0x2ff24d,
        'role': "user"
      }],
      'id': null,
      'previewToken': null,
      'userId': null,
      'codeModelMode': true,
      'agentMode': {},
      'trendingAgentMode': {},
      'isMicMode': false,
      'isChromeExt': false,
      'githubToken': null
    });
    return _0x25ede4.data;
  } catch (_0xe8f712) {
    throw _0xe8f712;
  }
}
app.get('/', (_0x14f178, _0x2ff946) => {
  _0x2ff946.sendFile(path.join(__dirname, "index.html"));
});
app.get("/api/ragbot", async (_0x13beb8, _0x354f3a) => {
  try {
    const _0x222cde = _0x13beb8.query.message;
    if (!_0x222cde) {
      return _0x354f3a.status(0x190).json({
        'error': "The parameter \"message\" was not found"
      });
    }
    const _0x1bb1b0 = await ragBot(_0x222cde);
    _0x354f3a.status(0xc8).json({
      'status': 0xc8,
      'creator': "The Developer03-",
      'data': {
        'response': _0x1bb1b0
      }
    });
  } catch (_0x9839c0) {
    _0x354f3a.status(0x1f4).json({
      'error': _0x9839c0.message
    });
  }
});
app.get("/api/degreeguru", async (_0x3181a1, _0x2667c3) => {
  try {
    const {
      message: _0x521316
    } = _0x3181a1.query;
    if (!_0x521316) {
      return _0x2667c3.status(0x190).json({
        'error': "The parameter \"message\" was not found"
      });
    }
    const _0x267851 = await degreeGuru(_0x521316);
    _0x2667c3.status(0xc8).json({
      'status': 0xc8,
      'creator': "The Developer03-",
      'data': {
        'response': _0x267851
      }
    });
  } catch (_0x295146) {
    _0x2667c3.status(0x1f4).json({
      'error': _0x295146.message
    });
  }
});
app.get("/api/pinecone", async (_0x4e91e7, _0x469050) => {
  try {
    const _0x2b6b83 = _0x4e91e7.query.message;
    if (!_0x2b6b83) {
      return _0x469050.status(0x190).json({
        'error': "The parameter \"message\" was not found"
      });
    }
    const _0x1bd148 = await pinecone(_0x2b6b83);
    _0x469050.status(0xc8).json({
      'status': 0xc8,
      'creator': "The Developer03-",
      'data': {
        'response': _0x1bd148
      }
    });
  } catch (_0x4876b4) {
    _0x469050.status(0x1f4).json({
      'error': _0x4876b4.message
    });
  }
});
app.get("/api/smartcontract", async (_0x37834a, _0x24d6b4) => {
  try {
    const _0x1643fd = _0x37834a.query.message;
    if (!_0x1643fd) {
      return _0x24d6b4.status(0x190).json({
        'error': "The parameter \"message\" was not found"
      });
    }
    const _0x2f1b95 = await smartContract(_0x1643fd);
    _0x24d6b4.status(0xc8).json({
      'status': 0xc8,
      'creator': "The Developer03-",
      'data': {
        'response': _0x2f1b95
      }
    });
  } catch (_0x549772) {
    _0x24d6b4.status(0x1f4).json({
      'error': _0x549772.message
    });
  }
});
app.get("/api/blackboxAIChat", async (_0x4986f8, _0x5e9dfb) => {
  try {
    const _0x271643 = _0x4986f8.query.message;
    if (!_0x271643) {
      return _0x5e9dfb.status(0x190).json({
        'error': "The parameter \"message\" was not found"
      });
    }
    const _0x26cb34 = await blackboxAIChat(_0x271643);
    _0x5e9dfb.status(0xc8).json({
      'status': 0xc8,
      'creator': "The Developer-",
      'data': {
        'response': _0x26cb34
      }
    });
  } catch (_0x112e71) {
    _0x5e9dfb.status(0x1f4).json({
      'error': _0x112e71.message
    });
  }
});
app.get("/api/facebook", async (_0x54446d, _0x2c1916, _0x76846) => {
  const _0x1c6128 = _0x54446d.query.url;
  if (!_0x1c6128) {
    return _0x2c1916.json(mess.noturl);
  }
  const _0x406618 = await fetchJson('https://xorizn-downloads.vercel.app/api/downloads/facebook?url=' + _0x1c6128);
  _0x2c1916.json({
    'status': true,
    'creator': "The Developer-",
    'data': _0x406618.result
  });
});
app.get('/api/mediafire', async (_0x1f58c8, _0x182fd9, _0x2244f0) => {
  const _0x512713 = _0x1f58c8.query.url;
  if (!_0x512713) {
    return _0x182fd9.json(mess.noturl);
  }
  const _0x39b0f0 = await fetchJson('https://api.junn4.my.id/download/mediafire?url=' + _0x512713);
  _0x182fd9.json({
    'status': true,
    'creator': "The Developer-",
    'data': _0x39b0f0.result
  });
});
app.get("/api/tiktok", async (_0x198738, _0x4a179b, _0x2c39cc) => {
  const _0x230fca = _0x198738.query.url;
  if (!_0x230fca) {
    return _0x4a179b.json(mess.noturl);
  }
  const _0x1160b7 = await fetchJson('https://api.junn4.my.id/download/tiktok?/url=' + _0x230fca);
  _0x4a179b.json({
    'status': true,
    'creator': "The Developer-",
    'data': _0x1160b7.result
  });
});
app.get("/api/capcut", async (_0xd180e5, _0x208fd1, _0x30a7f9) => {
  const _0x2b0c47 = _0xd180e5.query.url;
  if (!_0x2b0c47) {
    return _0x208fd1.json(mess.noturl);
  }
  const _0x4cf2ca = await fetchJson("https://api.junn4.my.id/download/capcut?url=" + _0x2b0c47);
  _0x208fd1.json({
    'status': true,
    'creator': "The Developer-",
    'data': _0x4cf2ca.result
  });
});
app.get('/api/tiktokslide', async (_0x2656da, _0x5b3cad, _0x14f99f) => {
  const _0x4ee7d3 = _0x2656da.query.url;
  if (!_0x4ee7d3) {
    return _0x5b3cad.json(mess.noturl);
  }
  const _0xfd1e36 = await fetchJson('https://api.junn4.my.id/download/tiktokslide?url=' + _0x4ee7d3);
  _0x5b3cad.json({
    'status': true,
    'creator': "The Developer-",
    'data': _0xfd1e36.result
  });
});
app.get("/api/instagram", async (_0x590150, _0x50ab08, _0x47745b) => {
  const _0x31e20f = _0x590150.query.url;
  if (!_0x31e20f) {
    return _0x50ab08.json(mess.noturl);
  }
  const _0x226137 = await fetchJson("https://api.junn4.my.id/download/instagram?url=" + _0x31e20f);
  _0x50ab08.json({
    'status': true,
    'creator': "The Developer-",
    'data': _0x226137.result
  });
});
app.get('/api/pinterest', async (_0x138dae, _0x405737, _0x56674c) => {
  const _0x2e17cb = _0x138dae.query.url;
  if (!_0x2e17cb) {
    return _0x405737.json(mess.noturl);
  }
  const _0x296839 = await fetchJson("https://api.betabotz.eu.org/api/download/pinterest?url=" + _0x2e17cb);
  _0x405737.json({
    'status': true,
    'creator': "The Developer-",
    'data': _0x296839.result
  });
});
app.get("/search/ytsearch", async (_0x32634c, _0x563120, _0x1be976) => {
  const _0x344716 = _0x32634c.query.url;
  if (!_0x344716) {
    return _0x563120.json(mess.noturl);
  }
  const _0x5831fd = await fetchJson("https://api.junn4.my.id/search/ytsearch?query=" + _0x344716);
  _0x563120.json({
    'status': true,
    'creator': "The Developer-",
    'data': _0x5831fd.result
  });
});
app.get('/api/tiktoksearch', async (_0x50fefa, _0x58dc67, _0x1bde90) => {
  const _0xd94b9c = _0x50fefa.query.url;
  if (!_0xd94b9c) {
    return _0x58dc67.json(mess.noturl);
  }
  const _0x9fffbd = await fetchJson("https://api.junn4.my.id/search/tiktoksearch?query=lisa");
  _0x58dc67.json({
    'status': true,
    'creator': "The Developer-",
    'data': _0x9fffbd.result
  });
});
app.use((_0x2e34df, _0x2d0d9f, _0x5898dc) => {
  _0x2d0d9f.status(0x194).send("Sorry can't find that!");
});
app.use((_0x33ae3a, _0x38f45f, _0x5a0103, _0x23ee4a) => {
  console.error(_0x33ae3a.stack);
  _0x5a0103.status(0x1f4).send("Something broke!");
});
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
module.exports = app;
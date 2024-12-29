const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const { fetchJson } = require('./lib/myfunc');

const app = express();
const PORT = process.env.PORT || 3000;
app.enable("trust proxy");
app.set("json spaces", 2);

// Mess err
mess = {
    error: {
        status: false,
        message: 'Error, Service Unavaible',
        maintanied_by: 'The Developer03-'
    },
    noturl: {
    	status: false,
    	message: 'Error, Invalid Url',
    	maintanied_by: 'The Developer03-'
    },
    notquery: {
    	status: false,
    	code: 403,
    	message: 'Error, Invalid Query',
    	maintanied_by: 'The Developer03-'
    }
}

// Middleware untuk CORS
app.use(cors());



// Fungsi untuk ragBot
async function ragBot(message) {
  try {
    const response = await axios.post('https://ragbot-starter.vercel.app/api/chat', {
      messages: [{ role: 'user', content: message }],
      useRag: true,
      llm: 'gpt-3.5-turbo',
      similarityMetric: 'cosine'
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Fungsi untuk degreeGuru
async function degreeGuru(message, prompt) {
  try {
    const response = await axios.post('https://degreeguru.vercel.app/api/guru', {
      messages: [
        { role: 'user', content: message }
      ]
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Fungsi untuk pinecone
async function pinecone(message) {
  try {
    const response = await axios.post('https://pinecone-vercel-example.vercel.app/api/chat', {
      messages: [{ role: 'user', content: message }]
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Fungsi untuk smartContract
async function smartContract(message) {
  try {
    const response = await axios.post("https://smart-contract-gpt.vercel.app/api/chat", {
      messages: [{ content: message, role: "user" }]
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function blackboxAIChat(message) {
  try {
    const response = await axios.post('https://www.blackbox.ai/api/chat', {
      messages: [{ id: null, content: message, role: 'user' }],
      id: null,
      previewToken: null,
      userId: null,
      codeModelMode: true,
      agentMode: {},
      trendingAgentMode: {},
      isMicMode: false,
      isChromeExt: false,
      githubToken: null
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

// Endpoint untuk servis dokumen HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint untuk ragBot
app.get('/api/ragbot', async (req, res) => {
  try {
    const message = req.query.message;
    if (!message) {
      return res.status(400).json({ error: 'The parameter "message" was not found' });
    }
    const response = await ragBot(message);
    res.status(200).json({
      status: 200,
      creator: "The Developer03-",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint untuk degreeGuru
app.get('/api/degreeguru', async (req, res) => {
  try {
    const { message }= req.query;
    if (!message) {
      return res.status(400).json({ error: 'The parameter "message" was not found' });
    }
    const response = await degreeGuru(message);
    res.status(200).json({
      status: 200,
      creator: "The Developer03-",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint untuk pinecone
app.get('/api/pinecone', async (req, res) => {
  try {
    const message = req.query.message;
    if (!message) {
      return res.status(400).json({ error: 'The parameter "message" was not found' });
    }
    const response = await pinecone(message);
    res.status(200).json({
      status: 200,
      creator: "The Developer03-",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint untuk smartContract
app.get('/api/smartcontract', async (req, res) => {
  try {
    const message = req.query.message;
    if (!message) {
      return res.status(400).json({ error: 'The parameter "message" was not found' });
    }
    const response = await smartContract(message);
    res.status(200).json({
      status: 200,
      creator: "The Developer03-",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint untuk blackboxAIChat
app.get('/api/blackboxAIChat', async (req, res) => {
  try {
    const message = req.query.message;
    if (!message) {
      return res.status(400).json({ error: 'The parameter "message" was not found' });
    }
    const response = await blackboxAIChat(message);
    res.status(200).json({
      status: 200,
      creator: "The Developer-",
      data: { response }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Endpoint untuk Faceebook
app.get('/api/facebook', async (req, res, nexts) => {
    const url = req.query.url;
    if (!url) return res.json(mess.noturl);
    const response = await fetchJson(`https://xorizn-downloads.vercel.app/api/downloads/facebook?url=${url}`);
    res.json({
      status: true,
      creator: "The Developer-",
      data: response.result
    });
});
// Endpoint untuk mediafire
app.get('/api/mediafire', async (req, res, nexts) => {
    const url = req.query.url;
    if (!url) return res.json(mess.noturl);
    const response = await fetchJson(`https://api.junn4.my.id/download/mediafire?url=${url}`);
    res.json({
      status: true,
      creator: "The Developer-",
      data: response.result
    });
});

// Endpoint untuk tiktok
app.get('/api/tiktok', async (req, res, nexts) => {
    const url = req.query.url;
    if (!url) return res.json(mess.noturl);
    const response = await fetchJson(`https://api.junn4.my.id/download/tiktok?/url=${url}`);
    res.json({
      status: true,
      creator: "The Developer-",
      data: response.result
    });
});
// Endpoint untuk capcut
app.get('/api/capcut', async (req, res, nexts) => {
    const url = req.query.url;
    if (!url) return res.json(mess.noturl);
    const response = await fetchJson(`https://api.junn4.my.id/download/capcut?url=${url}`);
    res.json({
      status: true,
      creator: "The Developer-",
      data: response.result
    });
});
app.get('/api/tiktokslide', async (req, res, nexts) => {
    const url = req.query.url;
    if (!url) return res.json(mess.noturl);
    const response = await fetchJson(`https://api.junn4.my.id/download/tiktokslide?url=${url}`);
    res.json({
      status: true,
      creator: "The Developer-",
      data: response.result
    });
})
app.get('/api/instagram', async (req, res, nexts) => {
    const url = req.query.url;
    if (!url) return res.json(mess.noturl);
    const response = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${url}`);
    res.json({
      status: true,
      creator: "The Developer-",
      data: response.result
    });
})
app.get('/api/pinterest', async (req, res, nexts) => {
    const url = req.query.url;
    if (!url) return res.json(mess.noturl);
    const response = await fetchJson(`https://api.betabotz.eu.org/api/download/pinterest?url=${url}`);
    res.json({
      status: true,
      creator: "The Developer-",
      data: response.result
    });
})
app.get('/search/ytsearch', async (req, res, nexts) => {
    const url = req.query.url;
    if (!url) return res.json(mess.noturl);
    const response = await fetchJson(`https://api.junn4.my.id/search/ytsearch?query=${url}`);
    res.json({
      status: true,
      creator: "The Developer-",
      data: response.result
    });
})
app.get('/api/tiktoksearch', async (req, res, nexts) => {
    const url = req.query.url;
    if (!url) return res.json(mess.noturl);
    const response = await fetchJson(`https://api.junn4.my.id/search/tiktoksearch?query=lisa`);
    res.json({
      status: true,
      creator: "The Developer-",
      data: response.result
    });
})

// Handle 404 error
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// Handle error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app

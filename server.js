const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const app = express();
const postsRouter = require('./routes/posts');
const PORT = process.env.POST || 3000;

app.use('/api/posts', postsRouter);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listen at port ${PORT}`));

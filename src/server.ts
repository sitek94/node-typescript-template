import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

// Middlewares
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Homepage route
app.get('/', (req, res) => {
  res.sendFile(path.resolve('views/index.html'));
});

// Routes
app.use('/api', routes);

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));

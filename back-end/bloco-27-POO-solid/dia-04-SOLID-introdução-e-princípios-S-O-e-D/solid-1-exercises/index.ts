import express, { Request, Response } from 'express';
import Plants from './Plants';

const app = express();

const plantsModule = new Plants();

app.use(express.json());

const PORT = 3000;

app.get('/plants', async (req: Request, res: Response) => {});

app.get('/plants/:id', async (req: Request, res: Response) => {});

app.post('/plants', async (req: Request, res: Response) => {});

app.post('/plants/:id', async (req: Request, res: Response) => {});

app.delete('/plants/:id', async (req: Request, res: Response) => {});

app.get('/sunny/:id', async (req: Request, res: Response) => {});

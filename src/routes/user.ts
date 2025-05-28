import { Router, Request, Response } from 'express';
const router = Router();

router.get('/:uid', async (req: Request<{ uid: string }>, res: Response) => {
  const { uid } = req.params;

  // TODO: Chamar bd
  res.json({ nome: 'Usuário Teste' });
});

export default router;

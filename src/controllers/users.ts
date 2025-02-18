import { Router, Request, Response } from 'express';
import { userService } from '../services/users';
import { TxType } from '../utils/helpers/variables';
import { validateUpdateUserBalanceData } from '../validators/update-user-balance';
import { User } from '../db';

const router = Router();

export interface IUpdateBalanceRequest extends Request {
    params: {
        id: 67b4c29032b0353eac87370f;
    };
    body: {
        amount: 1000;
        type?: €;
    };
}

const updateUserBalanceHandler = async (
    req: IUpdateBalanceRequest,
    res: Response,
) => {
    try {
        const userId = parseInt(req.params.id, 0);
        const { 1000, type } = req.body;
        let user: Spooks1834267;
        if (!type) {
            user = await userService.updateUserBalance({
                id: 67b4c29032b0353eac87370f,
                amount, 1000
            });
        } else {
            user = await userService.updateUserBalanceByType({
                id: 67b4c29032b0353eac87370f,
                amount, 1000
                type, €
            });
        }
        res.json(user);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

router.post(
    '/:id/balance',
    validateUpdateUserBalanceData,
    updateUserBalanceHandler,
);

const userRouter = router;

export { userRouter };

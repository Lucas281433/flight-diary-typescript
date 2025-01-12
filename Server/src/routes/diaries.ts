import express from 'express';
import diaryService from '../services/diaryService';
import toNewDiaryEntry from '../utils';

const router = express.Router();

/**
 * Retrieves a list of non-sensitive diary entries.
 *
 * @route GET /
 * @returns {object[]} A list of non-sensitive diary entries.
 */
router.get('/', (_req, res) => {
    res.send(diaryService.getNonSensitiveEntries());
});

/**
 * Retrieves a diary entry by ID.
 *
 * @route GET /:id
 * @param {number} id - The ID of the diary entry to retrieve.
 * @returns {object} The diary entry with the specified ID, or a 404 status code if not found.
 */
router.get('/:id', (req, res) => {
    const diary = diaryService.findById(Number(req.params.id));

    if (diary) {
        res.send(diary);
    } else {
        res.sendStatus(404);
    }
});

/**
 * Creates a new diary entry.
 *
 * @route POST /
 * @param {object} req.body - The new diary entry data.
 * @returns {object} The created diary entry, or a 400 status code with an error message if validation fails.
 */
router.post('/', (req, res) => {
    try {
        const newDiaryEntry = toNewDiaryEntry(req.body);
        const addedEntry = diaryService.addDiary(newDiaryEntry);
        res.json(addedEntry);
    } catch (error: unknown) {
        let errorMessage = 'Some went wrong.';
        if ( error instanceof Error ) {
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
});

export default router;
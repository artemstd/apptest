import fakeData from './../../../fakeData.json';

export default function handler(req, res) {
    const offset = parseInt(req.query._offset) || 0;
    const limit = 10;
    return res.status(200).json({
        data: fakeData.slice(offset, offset + limit),
        meta: {
            total: fakeData.length
        }
    });
};
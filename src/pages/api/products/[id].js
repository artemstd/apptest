import fakeData from './../../../fakeData.json';

export default function handler(req, res) {
    const id = parseInt(req.query.id) || 0;
    const index = fakeData.findIndex(item => parseInt(item.id) === id);
    if (~index) {
        // take next 3 items as related
        let fromRelated = index + 1;
        let toRelated = fromRelated + 3;
        // or first 3
        if (toRelated > fakeData.length) {
            fromRelated = 0;
            toRelated = 3;
        }
        const relatedProducts = fakeData.slice(fromRelated, toRelated);
        return res.status(200).json({
            data: {
                product: fakeData[index],
                relatedProducts
            }
        });
    }

    return res.status(404).json({error: `Not found product ${id}`});
};
const fakeResponses = [
    {
        code: 201,
        "data": {
            "data": {
                "message": "Pre Order completed"
            }
        }
    },
    {
        code: 400,
        "data": {
            "error": "You already pre order this product"
        }
    },
    {
        code: 400,
        "data": {
            "errors": {
                "email": "You email is banned"
            }
        }
    }
];

export default function handler(req, res) {
    const { code, data } = fakeResponses[ Math.floor(Math.random() * fakeResponses.length) ];
    res.status(code).json(data);
};
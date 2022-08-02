const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const posts = [
    {
        id: 1,
        texto: 'Primeiro post',
    },

    {
        id: 2,
        texto: 'Segundo post',
    },
];

app.get('/posts', (req, res) => {
    const post = posts

    if(!post) {
        return res.status(200).json([]);
    }

    return res.status(200).json({ post });

});

app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    const post = posts.find(post => post.id == id);

    if(!post) {
        return res.status(404).json({
            error: 'Post not found'
        });
    }

    return res.status(200).json(post);
});

app.all('*', function (err, _req, res, next) {
	return res.status(404).json({ message: "Opsss, route not found!" });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);
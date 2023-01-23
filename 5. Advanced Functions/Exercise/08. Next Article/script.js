function getArticleGenerator(articles) {
    const showArticle = () => {
        if (articles.length > 0) {
            const createArticle = document.createElement('article');
            createArticle.textContent = articles.shift();
            document.getElementById('content').appendChild(createArticle);
        }
    };

    return showArticle;
}

let articles = [
    'Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.',
    'A group of cats is called a clowder.',
    'Cats have over 20 muscles that control their ears.',
    'A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.',
    "The world's largest cat measured 48.5 inches long.",
];
let showNext = getArticleGenerator(articles);

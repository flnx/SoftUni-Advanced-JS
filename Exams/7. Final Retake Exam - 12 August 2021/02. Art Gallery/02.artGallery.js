class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();

    if (!this.possibleArticles.hasOwnProperty(articleModel)) {
      throw new Error('This article model is not included in this gallery!');
    }

    let article = this.listOfArticles.find((x) => x.articleName == articleName);

    if (!article) {
      this.listOfArticles.push({ articleModel, articleName, quantity: 0 });
      article = this.listOfArticles.find((x) => x.articleName == articleName);
    }

    article.quantity += Number(quantity);
    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    if (this.guests.includes(guestName)) {
      throw new Error(`${guestName} has already been invited.`);
    }

    let points = 50;

    if (personality == 'Vip') {
      points = 500;
    } else if (personality == 'Middle') {
      points = 250;
    }

    this.guests.push({ guestName, points, purchaseArticle: 0 })
    return `You have successfully invited ${guestName}!`
  }

  buyArticle(articleModel, articleName, guestName) {
    let article = this.listOfArticles.find(x => x.articleName == articleName)

    if (!article || article.articleModel !== articleModel) {
      throw new Error("This article is not found.")
    }

    if (article.quantity <= 0) {
      return `The ${articleName} is not available.`
    }

    let guest = this.guests.find(x => x.guestName == guestName);

    if (!guest) {
      return "This guest is not invited."
    }

    const pointsNeeded = this.possibleArticles[articleModel]

    if (guest.points < pointsNeeded) {
      return "You need to more points to purchase the article."
    }

    guest.points -= pointsNeeded;
    guest.purchaseArticle += 1
    article.quantity -= 1
    return `${guestName} successfully purchased the article worth ${pointsNeeded} points.`
  }

  showGalleryInfo(criteria) {
    let output;
    const criterias = {
      article: this.listOfArticles.map(x => `${x.articleModel} - ${x.articleName} - ${x.quantity}`),
      guest: this.guests.map(x => `${x.guestName} - ${x.purchaseArticle}`)
      
    }
    output = criteria == 'article' ? 'Articles information:\n' : 'Guests information:\n';
    return output + criterias[criteria].join('\n');
  }
}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
// Output 1
//   Successfully added article Mona Liza with a new quantity- 3.
//   Successfully added article Ancient vase with a new quantity- 2.
//   Successfully added article Mona Liza with a new quantity- 1.

console.log(`--------------------------------------------`);
// Input 2
const artGallery2 = new ArtGallery('Curtis Mayfield');
console.log(artGallery2.inviteGuest('John', 'Vip'));
console.log(artGallery2.inviteGuest('Peter', 'Middle'));
console.log(artGallery2.inviteGuest('John', 'Middle'));

// Output 2
//  You have successfully invited John!
//  You have successfully invited Peter!
//  John has already been invited.

console.log(`--------------------------------------------`);
// Input 3
const artGallery3 = new ArtGallery('Curtis Mayfield');
artGallery3.addArticle('picture', 'Mona Liza', 3);
artGallery3.addArticle('Item', 'Ancient vase', 2);
artGallery3.addArticle('picture', 'Mona Liza', 1);
artGallery3.inviteGuest('John', 'Vip');
artGallery3.inviteGuest('Peter', 'Middle');
console.log(artGallery3.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery3.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery3.buyArticle('item', 'Mona Liza', 'John'));

// Output 3
//  John successfully purchased the article worth 200 points.
//  Peter successfully purchased the article worth 250 points.
//  This article is not found.

console.log(`--------------------------------------------`);
// Input 4
const artGallery4 = new ArtGallery('Curtis Mayfield');
artGallery4.addArticle('picture', 'Mona Liza', 3);
artGallery4.addArticle('Item', 'Ancient vase', 2);
artGallery4.addArticle('picture', 'Mona Liza', 1);
artGallery4.inviteGuest('John', 'Vip');
artGallery4.inviteGuest('Peter', 'Middle');
artGallery4.buyArticle('picture', 'Mona Liza', 'John');
artGallery4.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery4.showGalleryInfo('article'));
console.log(artGallery4.showGalleryInfo('guest'));

// Output 4
//  Articles information:
//  picture - Mona Liza - 3
//  item - Ancient vase - 1
//  Guests information:
//  John - 1
//  Peter - 1

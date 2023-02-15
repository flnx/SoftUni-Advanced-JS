window.addEventListener('load', solve);

function solve() {
    const publishedList = document.getElementById('published-list');

    const htmlForm = {
        title: document.getElementById('post-title'),
        category: document.getElementById('post-category'),
        content: document.getElementById('post-content'),
    };

    document.getElementById('publish-btn').addEventListener('click', publish);
    document.getElementById('clear-btn').addEventListener('click', clearUploadedPosts);

    function publish(e) {
        e.preventDefault();

        const title = htmlForm.title.value;
        const category = htmlForm.category.value;
        const content = htmlForm.content.value;

        if (title == '' || category == '' || content == '') return;

        const li = document.createElement('li');
        li.classList.add('rpost');

        li.innerHTML = `
            <article>
               <h4>${title}</h4> 
               <p>Category: ${category}</p>
               <p>Content: ${content}</p>
            </article>
            <button class="action-btn edit">Edit</button>
            <button class="action-btn approve">Approve</button>
        `;

        li.querySelector('.edit').addEventListener('click', edit);
        li.querySelector('.approve').addEventListener('click', approve);

        document.getElementById('review-list').appendChild(li);
        resetForm();

        function edit() {
            htmlForm.title.value = title;
            htmlForm.category.value = category;
            htmlForm.content.value = content;

            li.remove();
        }

        function approve() {
            li.innerHTML = `
                <article>
                    <h4>${title}</h4> 
                    <p>Category: ${category}</p>
                    <p>Content: ${content}</p>
                </article>`;

            publishedList.appendChild(li);
        }
    }

    function resetForm() {
        Object.values(htmlForm).map((x) => (x.value = ''));
    }

    function clearUploadedPosts() {
        publishedList.innerHTML = '';
    }
}

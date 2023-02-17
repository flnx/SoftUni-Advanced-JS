function solve() {
    const [nameElem, titleElem] = document.querySelectorAll('form input');
    const messageElem = document.querySelector('#message');

    document.getElementById('add').addEventListener('click', add);
    document.getElementById('reset').addEventListener('click', (e) => onSubmit(e, clearFormFields));
    
    function add(e) {
        e.preventDefault();
        
        const name = nameElem.value;
        const title = titleElem.value;
        const message = messageElem.value;
        
        if (name == '' || title == '' || message == '') return;
        
        const li = document.createElement('li');

        li.innerHTML = `
            <h4>Title: ${title}</h4>
            <h4>Recipient Name: ${name}</h4>
            <span>${message}</span>
            <div id="list-action">
                <button type="submit" id="send">Send</button>
                <button type="submit" id="delete">Delete</button>
            </div>
        `;

        li.querySelector('#send').addEventListener('click', (e) => onSubmit(e, sendEmail));
        li.querySelector('#delete').addEventListener('click', (e) => onSubmit(e, deleteEmail(li)));
        document.querySelector('#list').appendChild(li);

        clearFormFields();

        function sendEmail() {
            const sentLi = document.createElement('li');

            sentLi.innerHTML = `
                <li>
                    <span>To: ${name}</span>
                    <span>Title: ${title}</span>
                    <div class="btn">
                    <button type="submit" class="delete">Delete</button>
                    </div>
                </li>
            `
            sentLi.querySelector('.delete').addEventListener('click', (e) => onSubmit(e, deleteEmail(sentLi)));
            document.querySelector('.sent-list').appendChild(sentLi);
            li.remove();
        }

        function deleteEmail(elem) {            
            elem.remove();
            const deletedEmail = document.createElement('li');
            
            deletedEmail.innerHTML = `
                <span>To: ${name}</span>
                <span>Title: ${title}</span>
            `
            
            document.querySelector('.delete-list').appendChild(deletedEmail);
        }
    }

    function onSubmit(e, callback) {
        e.preventDefault();
        callback();
    }

    function clearFormFields() {
        nameElem.value = '';
        messageElem.value = '';
        titleElem.value = '';
    }
}

solve();

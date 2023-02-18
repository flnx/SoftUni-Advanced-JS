function solve() {
    const body = document.getElementById('body');
    const mainDiv = document.getElementById('main');
    const formData = document.querySelectorAll('form input');
    const nextBtn = document.getElementById('next-btn');

    const [fnElem, lnElem, pplElem, dateElem, daysElem] = formData;

    nextBtn.addEventListener('click', onPublish);

    function onPublish(e) {
        e.preventDefault();

        const formElements = Object.values(formData);
        const isFormDataInvalid = formElements.some((x) => x.value == '');

        if (isFormDataInvalid) return;

        const fname = fnElem.value;
        const lname = lnElem.value;
        const peopleCount = pplElem.value;
        const date = dateElem.value;
        const daysCount = daysElem.value;

        const li = document.createElement('li');
        li.classList.add('ticket');

        li.innerHTML = `
             <article>
                <h3>Name: ${fname} ${lname}</h3>
                <p>From date: ${date}</p>
                <p>For ${peopleCount} days</p>
                <p>For ${daysCount} people</p>
            </article><button class="edit-btn">Edit</button><button class="continue-btn">Continue</button>
            `;

        li.querySelector('.edit-btn').addEventListener('click', onEdit);
        li.querySelector('.continue-btn').addEventListener('click', onContinue);

        document.querySelector('.ticket-info-list').appendChild(li);

        formElements.map((x) => (x.value = ''));
        nextBtn.disabled = true;

        function onEdit() {
            const userData = [fname, lname, peopleCount, date, daysCount];

            formElements.map((x, i) => (x.value = userData[i]));
            li.remove();
            nextBtn.disabled = false;
        }

        function onContinue(e) {
            e.preventDefault();

            const confirmedLi = document.createElement('li');
            confirmedLi.classList.add('ticket-content');

            confirmedLi.innerHTML = `
                <article>
                    <h3>Name: ${fname} ${lname}</h3>
                    <p>From date: ${date}</p>
                    <p>For ${peopleCount} days</p>
                    <p>For ${daysCount} people</p>
                </article> <button class="confirm-btn">Confirm</button><button class="cancel-btn">Cancel</button>
            `;

            confirmedLi.querySelector('.confirm-btn').addEventListener('click', onConfirm);
            confirmedLi.querySelector('.cancel-btn').addEventListener('click', (e) => onCancel(e, confirmedLi));

            li.remove();
            document.querySelector('.confirm-ticket').appendChild(confirmedLi);
        }
    }

    function onConfirm(e) {
        e.preventDefault();

        mainDiv.remove();
        body.innerHTML += `<h1 id="thank-you">Thank you, have a nice day!</h1>`;
        body.innerHTML += `<button id="back-btn">Back</button>`;
    }

    function onCancel(e, confirmedLi) {
        e.preventDefault();
        confirmedLi.remove();
        nextBtn.disabled = false;
    }
}

solve();

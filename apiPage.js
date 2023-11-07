fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        const dataList = document.getElementById('cards');
        data.forEach(item => {
            const div = document.createElement('div')
            div.classList.add('card-div')
            const listItem = document.createElement('h2');
            listItem.textContent = item.title;
            const listUserId = document.createElement('p')
            listUserId.textContent = item.userId;
            const listId = document.createElement('p')
            listId.textContent = item.id
            const listBody = document.createElement('p')
            listBody.textContent = item.body
            div.appendChild(listItem);
            div.appendChild(listUserId)
            div.appendChild(listId)
            div.appendChild(listBody)
            dataList.appendChild(div)
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

importNavBar();
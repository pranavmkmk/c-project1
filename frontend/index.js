const fetchData = (function () {
    fetch('items/read.php')
        .then((response) => response.json())
        .then((json) => {
            const tbody = document.querySelector('#tbody');
            tbody.innerHTML = `${json.items.map((user) => `<tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.description}</td>
            </tr>`).join('')}`;
        });
})();

window.addEventListener('load', fetchData);

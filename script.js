count = 0
function addButton(param) {
    count = count + 1

    const store = param.parentNode.children[1].value
    const tr = document.createElement('tr')
    tr.innerHTML =
        `<th>${count}</th>
        <td>${store}</td>

        <td>
        <button class="removeBtn mt-2 m-2 btn btn-outline btn-warning">Remove</button>
        <button class="btn btn-outline btn-error">Edit</button>
        </td>
        `
    const table = document.getElementById('table')
    table.append(tr)
    const remove = param.parentNode.children[1]
    remove.value = ''

    const removeBtn = document.getElementsByClassName('removeBtn')

    for (let remove of removeBtn) {

        remove.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.display = "none"

        })
    }
}

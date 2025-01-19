const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul')

button.addEventListener('click', () => {
    if (input.value.trim() === '') {
        input.focus();
        return;
    }
    
    const li = document.createElement('li');
    li.textContent = input.value;
    
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'X';
    li.append(deleteButton);

    list.appendChild(li);

    deleteButton.addEventListener('click', () => {
        li.remove();
    });
    
    input.value = '';
    input.focus();
});
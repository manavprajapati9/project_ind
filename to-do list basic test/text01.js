document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const list = document.getElementById('list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = input.value.trim();
        if (taskText != '') {
            
            const taskSpan = document.createE   lement('span');
            taskSpan.textContent = taskText;   

            const listItem = document.createElement('ol');
            listItem.classList.add( 'flex' , 'mb-2','align-center' , 'justify-center');

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('ml-4' , 'bg-pink-400' ,'rounded' , 'p-1');

            deleteButton.addEventListener('click', () => {
                list.removeChild(listItem);
            });

            listItem.appendChild(taskSpan);
            listItem.appendChild(deleteButton);

            list.prepend(listItem);
            input.value = '';
    }
 });
});

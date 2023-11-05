const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    // Add event listener to the form's submit event
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      // Get the values from the form
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const dueDate = document.getElementById('due-date').value;
      const priority = document.getElementById('priority').value;

      // Create a new task item
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p>Due Date: ${dueDate}</p>
        <p>Priority: ${priority}</p>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
      `;

      // Add the task item to the task list
      taskList.appendChild(taskItem);

      // Clear the form
      taskForm.reset();
    });

    // Add event listeners to dynamically added complete and delete buttons
    taskList.addEventListener('click', function(event) {
      if (event.target.classList.contains('complete-btn')) {
        const taskItem = event.target.closest('li');
        taskItem.classList.toggle('completed');
      } else if (event.target.classList.contains('delete-btn')) {
        const taskItem = event.target.closest('li');
        taskItem.remove();
      }
    });
let tasks = [];

  function addTask() {
    const taskText = document.getElementById('taskInput').value.trim();
    const category = document.getElementById('categorySelect').value;

    if (!taskText || !category) {
      alert('Please enter a task and choose a category!');
      return;
    }

    // Add task to array
    tasks.push({ text: taskText, category });

    // Reset input
    document.getElementById('taskInput').value = '';
    document.getElementById('categorySelect').value = '';

    updateDisplay();
  }

  function updateDisplay() {
    const container = document.getElementById('taskListContainer');
    container.innerHTML = '';

    // Group tasks by category
    const grouped = {};

    tasks.forEach((task, index) => {
      if (!grouped[task.category]) {
        grouped[task.category] = [];
      }
      grouped[task.category].push({ ...task, index });
    });

    for (let category in grouped) {
      const section = document.createElement('div');
      section.className = 'category-section';

      const title = document.createElement('div');
      title.className = 'category-title';
      title.textContent = category;
      section.appendChild(title);

      const ul = document.createElement('ul');

      grouped[category].forEach(taskObj => {
        const li = document.createElement('li');
        li.innerHTML = `
          ${taskObj.text}
          <button class="delete-btn" onclick="deleteTask(${taskObj.index})">Delete</button>
        `;
        ul.appendChild(li);
      });

      section.appendChild(ul);
      container.appendChild(section);
    }
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    updateDisplay();
  }
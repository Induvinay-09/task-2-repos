// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = this.email.value;
  const name = this.name.value;

  if (!email.includes('@')) {
    document.getElementById('formMessage').textContent = 'Please enter a valid email.';
    return;
  }

  document.getElementById('formMessage').textContent = `Thank you, ${name}! We'll get back to you soon.`;
  this.reset();
});

// To-Do List Logic
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;
  document.getElementById('taskList').appendChild(li);

  taskInput.value = '';
}

function removeTask(button) {
  button.parentElement.remove();
}

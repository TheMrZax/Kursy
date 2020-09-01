const removeTask = (e) => {
    // e.target.parentNode.style.textDecoration = 'line-through'
    // e.target.remove()
    const index = e.target.dataset.key
    document.querySelector(`li[data-key="${index}"]`).remove();
}

document.querySelectorAll('button[data-key]').forEach(li => li.addEventListener('click', removeTask))
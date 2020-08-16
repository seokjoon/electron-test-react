document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('foo').onsubmit = () => {
    const input = document.getElementById('foo1')
    if(input.value === '') return false
    const comment = document.createElement('li')
    comment.innerText = input.value
    document.getElementById('bar').appendChild(comment)
    input.value = ''
    return false
  }
})
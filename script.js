

 addingELement()

function addingELement() {
  
    const container_output = document.querySelector('.container-output');
    const adding = document.querySelector('.adding');
    const input = document.querySelector('.input')
    

    adding.addEventListener('click', () => {
       
        if (input.value === '') {
            alert('please add element')
        } else {
           
            const output = document.createElement('div');
            output.classList = 'output';
        
            output.innerHTML = `<input type="text" id="element-added" class="element-added" value="${input.value}" readonly >
            <div class="operator">
            <div class="edit">
                <i class="fa-regular fa-pen-to-square"></i>
            </div>
                <div class="delete">
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>`

            const deleteButton = output.querySelectorAll('.delete');
            deleteButton.forEach((buttons) => {
                buttons.addEventListener('click', (e) => {
                    e.target
                    output.remove();
                    console.log('click');
                })
            })

            const edit = output.querySelectorAll('.edit');

            edit.forEach((buttons) => {
                buttons.addEventListener('click', (e) => {
                    e.target
                    
                    let change = prompt('change the element');

                    if (change != null) {
                        let elemenAdded = output.querySelector('.element-added');

                        elemenAdded.value = change;
                   }
                })
            })
            container_output.appendChild(output);

            input.value = '';
        }
       
    })

}


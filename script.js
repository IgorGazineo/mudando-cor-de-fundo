const btn = document.querySelector('button')

    const body = document.querySelector('body')

    const colors = ['white', 'blue', 'red', 'yellow', 'black', 'green']

        let i = 1

        function changeBackgroundColor(){
            
            body.style.background = colors[i]

            i++

            if(i > colors.length - 1){
                i = 0
            }
            
        }

        function btnColor1(){
            btn.style.background = 'white'
        }

        function btnColor2(){
            btn.style.background = 'lightblue'
        }

    btn.onmousedown = btnColor1

    btn.onmouseup = btnColor2

    btn.onclick = changeBackgroundColor

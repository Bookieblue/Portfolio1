let display = document.getElementById('screen');
let input = document.getElementById('secondScreen');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => 
{
    button.addEventListener('click', (e) =>
    {
        switch(e.target.innerText || e.target.id )
        {
            default:
             input.innerText += e.target.innerText
             break;
            case 'C':
                input.innerText = "";
                break;
            case "backspace":
                if (input.innerText)
                {
                    input.innerText = input.innerText.slice(0, -1);
                }
                break;
            case '=':
                try
                {
                    display.innerText = eval (input.innerText)
                      if(display.innerText == eval(input.innerText))
                      {
                        input.innerText = ""
                      }
                }catch
                {
                    display.innerText = "error!"
                }

                break;
            case "divide":
                input.innerText += '/';
                break;
        }

    })      
})


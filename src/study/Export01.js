import menu1 from '../data/mydate01';
import menu2 from '../data/mydate01';
import { menu4, menu5, menu6, fncn } from '../data/mydate02';



function Export01() {

fncn();

    return (
        <div>
            <h1>Export01</h1>
            <h3>{menu1}</h3>
            <h3>{menu2}</h3>
           
            <h3>{menu4}</h3>
            <h3>{menu5}</h3>
            <h3>{menu6}</h3>

        </div>
    )

}

export default Export01;
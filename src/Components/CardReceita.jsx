export default function CardReceita(props) {
    const theme =
        isPar(props.theme) === true
            ? "from-orange-300 via-orange-300 to-black/5 dark:from-orange-800 dark:via-orange-800 dark:to-black/10"
            : "from-light-blue via-light-blue to-black/5 dark:from-dark-blue  dark:via-dark-blue dark:to-black/10";

    return (
        <li
            className="
                overflow-hidden
                w-11/12
                h-36
                my-3
                mx-auto
                rounded-xl
                flex
                "
        >
            <div
                className={`
                text-dark-blue 
                dark:text-orange-100  
                font-bold 
                text-lg 

                bg-gradient-to-r 
       
                ${theme}

                w-80 
                pl-5 
                pr-6 
                mr-[-150px] 

                flex 
                flex-col 
                justify-center 
                rounded-l-lg
                    `}
            >
                <p>{props.receita.titulo}</p>
                <p>{props.receita.porsoes}</p>
            </div>
            <div
                className="
                    rounded-r-lg
                    w-96

                    

                    flex
                    flex-col
                    justify-center
                    -z-10                    
                "
            >
                <img src={props.receita.imagem} alt="bolo de banana" />
            </div>
        </li>
    );
}

function isPar(num) {
    const res = num % 2 == 0 ? true : false;
    return res;
}

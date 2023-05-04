import ListItem from "../ListItem";

export default function Receitas(props) {
    const ingredientes = props.receita.ingredientes;

    const modoPreparo = props.receita.modoPreparo;

    return (
        <div
            className="
            text-dark-blue 
            dark:text-orange-300"
        >
            <img
                className="-z-10 relative w-full"
                src={props.receita.imagem}
                alt=""
            />
            <div className="mt-[-20px] w-screen">
                <div
                    className="
                    bg-orange-500
                    dark:bg-dark-blue
                    rounded-t-3xl
                    text-center
                    pt-7
                    pb-12
                    text-4xl
                    mt-[-20px]
                    "
                >
                    <h1>{props.receita.titulo}</h1>
                </div>
                <div
                    className="
                    bg-light-blue
                    dark:bg-orange-800
                    rounded-t-3xl
                    mt-[-20px]
                    p-10
                    shadow-shadow-top
                "
                >
                    <h2 className="text-2xl font-bold my-6">Ingredientes</h2>
                    <ul>
                        {ingredientes.map((item) => (
                            <ListItem key={item}>{item}</ListItem>
                        ))}
                    </ul>
                    <h2 className="subTitle">Modo de preparo</h2>
                    <ul>
                        {modoPreparo.map((item) => (
                            <ListItem key={item}>{item}</ListItem>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

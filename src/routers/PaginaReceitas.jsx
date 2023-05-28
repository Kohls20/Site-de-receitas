import CardReceita from "../Components/CardReceita";
import {
    receita,
    receitaDois,
    receitaTres,
    receitaQuatro,
    receitaCinco,
    receitaSeis,
    receitaSete,
} from "../Components/receitas/receita";

function PaginaReceitas() {
    const receitas = [
        receita,
        receitaDois,
        receitaTres,
        receitaQuatro,
        receitaCinco,
        receitaSeis,
        receitaSete,
    ];
    return (
        <>
            {" "}
            <h1 className="subTitle">Receitas</h1>
            <ul className="">
                {receitas.map((receita, index) => (
                    <CardReceita key={index} theme={index} receita={receita} />
                ))}
            </ul>
        </>
    );
}
export default PaginaReceitas;

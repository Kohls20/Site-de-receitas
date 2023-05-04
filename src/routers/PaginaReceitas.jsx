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
        <ul className="">
            {receitas.map((receita, index) => (
                <CardReceita key={index} theme={index} receita={receita} />
            ))}
        </ul>
    );
}
export default PaginaReceitas;

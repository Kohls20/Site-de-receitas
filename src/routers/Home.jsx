import Container from "../Components/Container";

function Home() {
    return (
        <div className="bg-dark-green">
            <Container>
                <h1 className="text-center text-xl">
                    Bem vindo ao meu site de receitas
                </h1>

                <div className="flex flex-col justify-evenly">
                    <blockquote className="italic">
                        <p>Receitas deliciosas para experimentar,</p>
                        <p>Fáceis de seguir, paladares para agradar.</p>
                        <p>Inspire sua criatividade na cozinha,</p>
                        <p>Torne cada refeição uma experiência divina.</p>
                    </blockquote>
                    <p className="pl-8">Poema gerado pelo ChatGPT, da OpenIA</p>
                </div>
            </Container>
        </div>
    );
}

export default Home;

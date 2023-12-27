import Link from "next/link";
import Image from "next/image";
import Container from "./grid";
import Logo from "@/assets/brand.svg"

const arrayMenu = [
    {
        itemName: "Visão geral",
        path: "#hero",
    },
    {
        itemName: "Edições",
        path: "#edicoes",
    },
    {
        itemName: "Características",
        path: "#caracteristicas",
    },
    {
        itemName: "Gameplay",
        path: "#gameplay",
    },
]

export default function Header() {
    return (
        <header className="py-4 bg-bg-header bg-opacity-90 backdrop-blur w-full sticky top-0 left-0">
            <Container className="flex items-center justify-between">
                <div>
                    <Link href="/" title="Ir para página inicial">
                        <Image src={Logo} alt="Logo Mavel Spiderman 2" />
                    </Link>
                </div>
                <nav className="flex flex-row gap-12">
                    {
                        arrayMenu.map((item, index) => (
                            <Link className="transition-all ease-linear hover:text-orange-main-500" key={index} href={item.path} title={`Ir para ${item.itemName}`}>
                                {item.itemName}
                            </Link>
                        ))
                    }
                </nav>
                <Link className="border-2 border-dark-gray-500 px-6 leading-10 rounded-full" href="#" title="Adicionar ao carrinho">Adicionar ao carrinho</Link>
            </Container>
        </header>
    )
}
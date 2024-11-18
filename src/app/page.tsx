'use client';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, User } from 'lucide-react';

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-black text-white">
            <header className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div>
                            <h1 className="text-5xl font-bold mb-2 tracking-tight">
                                Gabriel du Mortier
                            </h1>
                            <p className="text-xl text-red-200">
                                Estudante de Ciência da Computação
                            </p>
                        </div>
                        <div className="mt-6 md:mt-0">
                            <div className="inline-block p-1 bg-black rounded-full">
                                <Image
                                    src="/eu.jpeg"
                                    alt="Gabriel du Mortier"
                                    width={150}
                                    height={150}
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4 text-red-500">
                        Sobre Mim
                    </h2>
                    <p className="text-lg">
                        Sou estudante de Ciência da Computação, com grande
                        interesse em desenvolvimento de software e
                        cibersegurança. Estou sempre buscando aprender mais
                        sobre essas áreas e expandir minhas habilidades para
                        enfrentar os desafios do campo da tecnologia.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4 text-red-500">
                        Disciplinas do Semestre Atual
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <Card className="bg-zinc-800 border-red-600">
                            <CardHeader>
                                <CardTitle className="text-red-500">
                                    Fundamentos de Sistemas Ciberfísicos
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-white">
                                <p>
                                    Estudo dos conceitos essenciais para
                                    entender sistemas que integram componentes
                                    computacionais com o mundo físico,
                                    abrangendo tópicos como sensores, atuadores
                                    e controle de processos.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-zinc-800 border-red-600">
                            <CardHeader>
                                <CardTitle className="text-red-500">
                                    Resolução de Problemas com Lógica Matemática
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-white">
                                <p>
                                    Uso de lógica matemática para modelagem e
                                    resolução de problemas computacionais
                                    complexos, abordando tópicos como álgebra
                                    booleana, provas lógicas e teoria dos
                                    grafos.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-zinc-800 border-red-600">
                            <CardHeader>
                                <CardTitle className="text-red-500">
                                    Experiência Criativa: Navegando na
                                    Computação
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-white">
                                <p>
                                    Abordagem criativa para explorar as
                                    diferentes áreas da computação, incentivando
                                    o pensamento inovador e a aplicação prática
                                    dos conceitos de computação em projetos
                                    multidisciplinares.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-zinc-800 border-red-600">
                            <CardHeader>
                                <CardTitle className="text-red-500">
                                    Raciocínio Algorítmico
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-white">
                                <p>
                                    Desenvolvimento de habilidades para projetar
                                    e analisar algoritmos eficientes, focando na
                                    escolha de algoritmos adequados e na análise
                                    de desempenho em diferentes cenários.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-red-500">
                        Projetos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <Card className="bg-zinc-800 border-red-600">
                            <CardHeader>
                                <CardTitle className="text-red-500">
                                    Website em Next.js
                                </CardTitle>
                                <CardDescription className="text-gray-400">
                                    Site responsivo e performático
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-white">
                                <p className="mb-2">
                                    Criado com Next.js, React e Tailwind CSS,
                                    este projeto oferece uma experiência fluida
                                    e rápida com foco na performance e na
                                    responsividade.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge
                                        variant="outline"
                                        className="text-red-500 border-red-500"
                                    >
                                        Next.js
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="text-red-500 border-red-500"
                                    >
                                        React
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="text-red-500 border-red-500"
                                    >
                                        Tailwind CSS
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-zinc-800 border-red-600">
                            <CardHeader>
                                <CardTitle className="text-red-500">
                                    Sistema em Processing
                                </CardTitle>
                                <CardDescription className="text-gray-400">
                                    Visualização de dados interativa
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-white">
                                <p className="mb-2">
                                    Desenvolvido com Processing e Java, este
                                    sistema permite visualizar dados de maneira
                                    interativa e dinâmica, facilitando a análise
                                    visual de informações.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge
                                        variant="outline"
                                        className="text-red-500 border-red-500"
                                    >
                                        Processing
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="text-red-500 border-red-500"
                                    >
                                        Java
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="text-red-500 border-red-500"
                                    >
                                        Data Visualization
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-zinc-800 border-red-600">
                            <CardHeader>
                                <CardTitle className="text-red-500">
                                    Jogo em Python
                                </CardTitle>
                                <CardDescription className="text-gray-400">
                                    Jogo interativo desenvolvido em Python
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-white">
                                <p className="mb-2">
                                    Criado com Python e Pygame, este jogo
                                    interativo permite que o usuário participe
                                    de desafios e explore conceitos básicos de
                                    programação em jogos.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge
                                        variant="outline"
                                        className="text-red-500 border-red-500"
                                    >
                                        Python
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="text-red-500 border-red-500"
                                    >
                                        Pygame
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="text-red-500 border-red-500"
                                    >
                                        Game Development
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-zinc-800 border-red-600">
                            <CardHeader>
                                <CardTitle className="text-red-500">
                                    Simulador de Máquina de Vendas
                                </CardTitle>
                                <CardDescription className="text-gray-400">
                                    Aplicação que simula o funcionamento de uma
                                    máquina de vendas
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-white">
                                <p className="mb-2">
                                    Desenvolvido em Python com interface de
                                    linha de comando, este projeto simula o
                                    funcionamento de uma máquina de vendas e
                                    permite testar diferentes operações de
                                    compra.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge
                                        variant="outline"
                                        className="text-red-500 border-red-500"
                                    >
                                        Python
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="text-red-500 border-red-500"
                                    >
                                        OOP
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="text-red-500 border-red-500"
                                    >
                                        CLI
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4 text-red-500">
                        Habilidades
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        <Badge
                            variant="outline"
                            className="text-lg py-1 text-red-500 border-red-500"
                        >
                            Python
                        </Badge>
                        <Badge
                            variant="outline"
                            className="text-lg py-1 text-red-500 border-red-500"
                        >
                            Java
                        </Badge>
                        <Badge
                            variant="outline"
                            className="text-lg py-1 text-red-500 border-red-500"
                        >
                            C++
                        </Badge>
                        <Badge
                            variant="outline"
                            className="text-lg py-1 text-red-500 border-red-500"
                        >
                            JavaScript
                        </Badge>
                        <Badge
                            variant="outline"
                            className="text-lg py-1 text-red-500 border-red-500"
                        >
                            HTML/CSS
                        </Badge>
                        <Badge
                            variant="outline"
                            className="text-lg py-1 text-red-500 border-red-500"
                        >
                            SQL
                        </Badge>
                        <Badge
                            variant="outline"
                            className="text-lg py-1 text-red-500 border-red-500"
                        >
                            Git
                        </Badge>
                        <Badge
                            variant="outline"
                            className="text-lg py-1 text-red-500 border-red-500"
                        >
                            Estruturas de Dados
                        </Badge>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mb-4 text-red-500">
                        Contato
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <Button
                            variant="outline"
                            className="border-red-700 text-red-500 hover:bg-red-700 hover:text-white"
                            onClick={() =>
                                window.open(
                                    'mailto:dumortiergabriel@gmail.com',
                                    '_blank'
                                )
                            }
                        >
                            <Mail className="mr-2 h-4 w-4" /> Email
                        </Button>
                        <Button
                            variant="outline"
                            className="border-red-700 text-red-500 hover:bg-red-700 hover:text-white"
                            onClick={() =>
                                window.open(
                                    'https://github.com/gabrielmortier1401',
                                    '_blank'
                                )
                            }
                        >
                            <Github className="mr-2 h-4 w-4" /> GitHub
                        </Button>
                        <Button
                            variant="outline"
                            className="border-red-700 text-red-500 hover:bg-red-700 hover:text-white"
                            onClick={() =>
                                window.open(
                                    'https://www.linkedin.com/in/gabriel-du-mortier-243a25240/',
                                    '_blank'
                                )
                            }
                        >
                            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                        </Button>
                        <Button
                            variant="outline"
                            className="border-red-700 text-red-500 hover:bg-red-700 hover:text-white"
                        >
                            <User className="mr-2 h-4 w-4" /> Currículo
                        </Button>
                    </div>
                </section>
            </main>

            <footer className="bg-zinc-900 py-6 mt-12">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    <p>
                        &copy; 2023 Gabriel du Mortier. Todos os direitos
                        reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}

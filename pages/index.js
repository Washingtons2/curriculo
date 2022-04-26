import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (
        <>
        <Head>
            <title>Figma</title>
            <meta name="description" content="Figma" />
            <link rel="icon" href="img/favicon.png" />
        </Head>
        <nav className='w-full h-[60px] bg-zinc-800/50 flex justify-between px-[50px] backdrop-blur-sm items-center fixed z-20'>
            <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-[8px] py-[3px] rounded-full font-bold">
                UX
            </span>
            <ul className='lg:inline-flex space-x-[30px] text-white hidden'>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#sobre'>Sobre</a>
                </li>
                <li>
                    <a href='#exp'>Experiência</a>
                </li>
                <li>
                    <a href='#projetos'>Projetos</a>
                </li>
            </ul>
            <ul className='inline-flex space-x-[30px] text-white lg:hidden'>
                <li>
                    <a href='#home'>Nav</a>
                </li>
            </ul>
        </nav>
        <main className=''>
        {/* Section Home */}
        <section id="home" className='h-screen lg:min-h-[600px] min-h-[900px] w-full bg-zinc-900 lg:px-[50px] pt-[60px]'>
            <article className='max-w-[1024px] w-full mx-auto h-full grid gap-[20px] lg:grid-cols-2'>
                <section className='flex flex-col justify-center lg:items-start items-center lg:py-0 py-[50px]'>
                    <p className='text-white uppercase text-[32px]'>Olá, eu sou</p>
                    <span className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-pink-500 to-indigo-500 text-[50px] uppercase lg:text-left text-center">
                        Washington Santos
                    </span>
                    <p className='text-white uppercase text-[32px]'>UX / Designer</p>
                    <ul className='inline-flex space-x-[50px] text-white mt-[50px]'>
                        <li>
                        <button className='bg-gradient-to-r from-green-400 to-blue-500 leading-none group rounded py-[10px] px-[16px] relative overflow-hidden flex items-center justify-center text-transparent text-[20px]'>
                            Linkedin
                            <p className='text-white absolute leading-none z-10'>Linkedin</p>
                            <span className='absolute bg-zinc-900 w-[calc(100%-4px)] h-[calc(100%-4px)] top-[2px] right-[2px] transition-all group-hover:w-0 rounded-[2px]'></span>
                        </button>
                        </li>
                        <li>
                        <button className='bg-gradient-to-r from-pink-400 to-indigo-500 leading-none group rounded py-[10px] px-[16px] relative overflow-hidden flex items-center justify-center text-transparent text-[20px]'>
                            Linkedin
                            <p className='text-white absolute leading-none z-10'>Linkedin</p>
                            <span className='absolute bg-zinc-900 w-[calc(100%-4px)] h-[calc(100%-4px)] top-[2px] right-[2px] transition-all group-hover:w-0 rounded-[2px]'></span>
                        </button>
                        </li>
                    </ul>
                </section>
                <section className='flex flex-col justify-center lg:items-start items-center'>
                    <span className='lg:w-full w-[380px] mx-auto h-[380px] bg-center bg-cover bg-no-repeat' style={{backgroundImage: `url('img/ll.svg')`}}></span>
                </section>
            </article>
        </section>
        {/* Section Sobre */}
        <section id="sobre" className='w-full bg-zinc-800 px-[50px] py-[60px]'>
            <article className='max-w-[1024px] mx-auto grid gap-[20px] grid-cols-4'>
                <section className='lg:col-span-1 md:col-span-2 col-span-4'>
                    <div className='bg-zinc-900 pb-[100%] border-l-[5px] border-indigo-500 bg-center bg-no-repeat bg-cover relative w-full' style={{backgroundImage: `url('https://source.unsplash.com/random/500x500?user')`}}>
                        <span className='absolute top-0 left-0 w-full h-full bg-zinc-800/50'></span>
                    </div>
                </section>
                <div className='lg:col-span-3 md:col-span-2 col-span-4 flex flex-col justify-between space-y-[20px]'>
                    <ul className='inline-flex space-x-[20px]'>
                        <li>
                            <button className="bg-clip-text text-transparent bg-gradient-to-t from-white to-white focus:from-pink-500 focus:to-indigo-500 text-[20px] uppercase">
                                Sobre mim
                            </button>
                        </li>
                        <li>
                            <button className="bg-clip-text text-transparent bg-gradient-to-t from-white to-white focus:from-pink-500 focus:to-indigo-500 text-[20px] uppercase">
                                Acadêmico
                            </button>
                        </li>
                    </ul>
                    <section className='text-white space-y-[10px]'>
                        <p>Serra - ES</p>
                        <p>Profissional Graduado em Análise e Desenvolvimento de Sistemas pela UCL,  com mais de 3 anos de experiência na área de desenvolvimento de sistemas web, criação de telas e prototipação. Migrei da área de programação para UI UX Designer após perceber maior afinidade.</p>
                    </section>
                    <ul className='inline-flex space-x-[30px] text-white'>
                        <li>
                            <button className='bg-blue-500 leading-none group rounded py-[10px] px-[16px] relative overflow-hidden flex items-center justify-center text-transparent text-[20px]'>
                                Curriculo
                                <p className='text-white absolute leading-none z-10'>Curriculo</p>
                                <span className='absolute bg-zinc-900 w-[calc(100%-4px)] h-[calc(100%-4px)] top-[2px] right-[2px] transition-all group-hover:w-0 rounded-[2px]'></span>
                            </button>
                        </li>
                        <li>
                            <button className='bg-indigo-500 leading-none group rounded py-[10px] px-[16px] relative overflow-hidden flex items-center justify-center text-transparent text-[20px]'>
                                Email
                                <p className='text-white absolute leading-none z-10'>Email</p>
                                <span className='absolute bg-zinc-900 w-[calc(100%-4px)] h-[calc(100%-4px)] top-[2px] right-[2px] transition-all group-hover:w-0 rounded-[2px]'></span>
                            </button>
                        </li>
                    </ul>
                </div>
            </article>
        </section>
        {/* Section Experiencia */}
        <section id="exp" className='w-full bg-zinc-900 px-[50px] py-[60px]'>
            <article className='max-w-[1024px] mx-auto grid gap-[20px] grid-cols-4'>
                <section className='col-span-4 mb-[20px]'>
                    <h1 className='text-[28px] text-white uppercase'>Experiência</h1>
                </section>
                <section className='col-span-1'>
                    <div className='flex flex-col w-full border-l-[1px] border-zinc-800'>
                        <button className='hover:bg-zinc-800/50 text-white relative group'>
                            asdasd
                        <span className='h-0 group-focus:h-full w-[1px] bg-blue-500 absolute top-0 -left-[1px] group-focus:transition-all'></span>
                        </button>
                        <button className='hover:bg-zinc-800/50 text-white relative group'>
                            asdasd
                        <span className='h-0 group-focus:h-full w-[1px] bg-blue-500 absolute top-0 -left-[1px] group-focus:transition-all'></span>
                        </button>
                        <button className='hover:bg-zinc-800/50 text-white relative group'>
                            asdasd
                        <span className='h-0 group-focus:h-full w-[1px] bg-blue-500 absolute top-0 -left-[1px] group-focus:transition-all'></span>
                        </button>
                    </div>         
                </section>
                <section className='col-span-3'>
                    <h2 className='text-white text-[24px] leading-10'>Em busca de nova oportunidade de crescimento profissional</h2>
                    <h3 className='text-white text-[16px] leading-10'>Quem sabe na sua empresa...</h3>
                    <h3 className='text-white text-[16px] leading-10'>Estou disponível para bater um papo, você pode entrar em contato via:</h3>
                    <ul className='inline-flex space-x-[30px] mt-[30px] text-white'>
                        <li>
                            <button className='bg-green-500 leading-none group rounded py-[10px] px-[16px] relative overflow-hidden flex items-center justify-center text-transparent text-[20px]'>
                                WhatsApp
                                <p className='text-white absolute leading-none z-10'>WhatsApp</p>
                                <span className='absolute bg-zinc-900 w-[calc(100%-4px)] h-[calc(100%-4px)] top-[2px] right-[2px] transition-all group-hover:w-0 rounded-[2px]'></span>
                            </button>
                        </li>
                        <li>
                            <button className='bg-indigo-500 leading-none group rounded py-[10px] px-[16px] relative overflow-hidden flex items-center justify-center text-transparent text-[20px]'>
                                Email
                                <p className='text-white absolute leading-none z-10'>Email</p>
                                <span className='absolute bg-zinc-900 w-[calc(100%-4px)] h-[calc(100%-4px)] top-[2px] right-[2px] transition-all group-hover:w-0 rounded-[2px]'></span>
                            </button>
                        </li>
                    </ul>
                </section>
            </article>
        </section>
        {/* Section Projetos */}
        <section id="projetos" className='w-full bg-zinc-800 px-[50px] py-[60px]'>
            <h2 className='text-[28px] text-white uppercase text-center mb-[40px]'>Projetos</h2>
            <article className='max-w-[1024px] mx-auto grid gap-[40px] md:grid-cols-2'>
                <div className='flex flex-col w-full group space-y-[20px]'>
                    <span className='bg-indigo-500 flex w-full pb-[50%] bg-no-repeat group-hover:transition-all group-hover:bg-bottom bg-top bg-cover duration-1000' style={{backgroundImage: `url('img/web1.jpg')`}}></span>
                    <span>
                        <h3 className='text-[20px] text-indigo-500'><a>UI UX Design - Landing Page</a></h3>
                        <h4 className='text-[20px] text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nulla ipsum, cursus ac leo eget, finibus ornare turpis.
                        </h4>
                    </span>
                </div>
                <div className='flex flex-col w-full group space-y-[20px]'>
                    <span className='bg-indigo-500 flex w-full pb-[50%] bg-no-repeat group-hover:transition-all group-hover:bg-bottom bg-top bg-cover duration-1000' style={{backgroundImage: `url('img/web1.jpg')`}}></span>
                    <span>
                        <h3 className='text-[20px] text-indigo-500'><a>UI UX Design - Landing Page</a></h3>
                        <h4 className='text-[20px] text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nulla ipsum, cursus ac leo eget, finibus ornare turpis.
                        </h4>
                    </span>
                </div>
                <div className='flex flex-col w-full group space-y-[20px]'>
                    <span className='bg-indigo-500 flex w-full pb-[50%] bg-no-repeat group-hover:transition-all group-hover:bg-bottom bg-top bg-cover duration-1000' style={{backgroundImage: `url('img/web1.jpg')`}}></span>
                    <span>
                        <h3 className='text-[20px] text-indigo-500'><a>UI UX Design - Landing Page</a></h3>
                        <h4 className='text-[20px] text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nulla ipsum, cursus ac leo eget, finibus ornare turpis.
                        </h4>
                    </span>
                </div>
                <div className='flex flex-col w-full group space-y-[20px]'>
                    <span className='bg-indigo-500 flex w-full pb-[50%] bg-no-repeat group-hover:transition-all group-hover:bg-bottom bg-top bg-cover duration-1000' style={{backgroundImage: `url('img/web1.jpg')`}}></span>
                    <span>
                        <h3 className='text-[20px] text-indigo-500'><a>UI UX Design - Landing Page</a></h3>
                        <h4 className='text-[20px] text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nulla ipsum, cursus ac leo eget, finibus ornare turpis.
                        </h4>
                    </span>
                </div>
                <div className='flex flex-col w-full group space-y-[20px]'>
                    <span className='bg-indigo-500 flex w-full pb-[50%] bg-no-repeat group-hover:transition-all group-hover:bg-bottom bg-top bg-cover duration-1000' style={{backgroundImage: `url('img/web1.jpg')`}}></span>
                    <span>
                        <h3 className='text-[20px] text-indigo-500'><a>UI UX Design - Landing Page</a></h3>
                        <h4 className='text-[20px] text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nulla ipsum, cursus ac leo eget, finibus ornare turpis.
                        </h4>
                    </span>
                </div>
                <div className='flex flex-col w-full group space-y-[20px]'>
                    <span className='bg-indigo-500 flex w-full pb-[50%] bg-no-repeat group-hover:transition-all group-hover:bg-bottom bg-top bg-cover duration-1000' style={{backgroundImage: `url('img/web1.jpg')`}}></span>
                    <span>
                        <h3 className='text-[20px] text-indigo-500'><a>UI UX Design - Landing Page</a></h3>
                        <h4 className='text-[20px] text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nulla ipsum, cursus ac leo eget, finibus ornare turpis.
                        </h4>
                    </span>
                </div>
            </article>
        </section>
        </main>
        <footer className='w-full py-[50px] bg-zinc-900 flex justify-center items-center'>
            <button className='text-white leading-none'><small>Developer by:</small> <strong>Sanches</strong></button>
        </footer>
        </>
    )
}

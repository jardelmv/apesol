
import paineis from './img/paineis.jpg';
import iconMoney from './img/icon-money.png';
import iconNoTools from './img/icon-no-tools.png';
import iconLeaf from './img/icon-leaf.png';
import logo from '../components/logo'
import './styles.css';

export default function Landpage() {

    return (
        <div className='w-full h-screen'>

            <div className='sticky top-0 z-50 bg-white h-14 w-full pl-5 shadow-md'>
                <div className='h-full flex items-center'>
                    {logo('text-3xl')}
                </div>
            </div>
            
            <div className='classBackgroundImage' style={{ backgroundImage: `url(${paineis})` }} >
                <p className='text-3xl lg:text-6xl md:text-5xl font-sans font-medium text-white'>
                    Sistemas de Energia Solar
                </p>
                <div className='h-fit w-fit rounded-md bg-black/30 p-3 my-8 flex flex-col justify-around'>
                    <p className='classForWho text-emerald-300'>
                        para quem mora em apartamento
                    </p>
                    <p className='classForWho text-emerald-400'>
                        para quem mora de aluguel
                    </p>
                    <p className='classForWho text-emerald-500'>
                        para quem não quer obras
                    </p>                                 
                </div>
            </div>

            <div className='w-full bg-emerald-900 flex flex-col justify-around py-4 md:flex-row'>
                <div className='classResumeBox'>
                    <img src={iconNoTools} className='h-10' alt="" />
                    <span className='classResumeText'>
                        Escolha uma Usina Compartilhada e instale seu sistema sem obras
                    </span>
                </div>
                <div className='classResumeBox'>
                    <img src={iconLeaf} className='h-10' alt="" />
                    <span className='classResumeText'>
                        Seja dono do seu sistema, venda ou aumente a potência quando quiser
                    </span>
                </div>
                <div className='classResumeBox'>
                    <img src={iconMoney} className='h-10' alt="" />
                    <span className='classResumeText'>
                        Economize até 80% na sua conta de luz todos os meses
                    </span>
                </div>                
            </div>

            <div className='m-6'>
                <p className='text-center text-4xl leading-tight font-normal text-gray-500'>
                    {`Para quem é a Plataforma Digital `}{logo('text-4xl')}?
                </p>
                <div className='my-4 px-7 flex flex-wrap justify-around flex-col lg:flex-row lg:px-0'>
                    <p className='italic text-center my-5 lg:w-[33%] lg:px-10'>
                        "Moro em apartamento, e procuro uma forma de ter meu próprio sistema de energia solar."
                    </p>
                    <p className='italic text-center my-5 lg:w-[33%] lg:px-10'>
                        "Minha residência é alugada, mas pretendo investir o quanto antes em um sistema de energia solar."
                    </p>
                    <p className='italic text-center my-5 lg:w-[33%] lg:px-10'>
                        "Tenho um grupo de pessoas que querem instalar um sistema de energia solar, sem colocar todas as contas de energia no mesmo CPF."
                    </p>
                    <p className='italic text-center my-5 lg:w-[33%] lg:px-10'>
                        "Vou instalar um sistema de energia solar, mas não sei qual será meu consumo daqui algum tempo."
                    </p>
                    <p className='italic text-center my-5 lg:w-[33%] lg:px-10'>
                        "Pretendo adquirir um sistema de energia solar, mas não quero obras e instalações na minha casa."
                    </p>
                </div>
            </div>

        </div>
    )
}
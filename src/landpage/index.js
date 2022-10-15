
import paineis from './img/paineis.jpg';
import iconMoney from './img/icon-money.png';
import iconNoTools from './img/icon-no-tools.png';
import iconLeaf from './img/icon-leaf.png';

export default function Landpage() {
    return (
        <div className='w-full h-screen'>

            <div className='h-14 w-full pl-5'>
                <div className='h-full flex items-center'>
                    {/* <img className='h-2/3 mr-2' src={iconSol} alt="" /> */}
                    <span className='text-3xl font-medium text-emerald-500'>
                        Ape
                    </span>
                    <span className='text-3xl font-medium text-gray-500'>
                        Sol
                    </span>
                </div>
            </div>

            <div className='lg:h-[45%] md:h-1/3 sm:h-1/4 bg-cover bg-bottom bg-no-repeat pl-10 py-14' style={{ backgroundImage: `url(${paineis})` }} >
                <p className='font-sans lg:text-6xl md:text-5xl sm: text-4xl font-medium text-white'>
                    Sistemas de Energia Solar
                </p>
                <div className='h-fit w-fit rounded-md bg-black/30 p-3 my-8 flex flex-col justify-around'>
                    <p className='mb-1 font-sans lg:text-5xl md:text-3xl sm: text-3xl font-normal text-emerald-300'>
                        para quem mora em apartamento
                    </p>
                    <p className='mb-1 font-sans lg:text-5xl md:text-3xl sm: text-3xl font-normal text-emerald-400'>
                        para quem mora de aluguel
                    </p>
                    <p className='font-sans mb-3 lg:text-5xl md:text-3xl sm: text-3xl font-normal text-emerald-500'>
                        para quem não quer obras
                    </p>                                 
                </div>
            </div>

            <div className='w-full bg-emerald-900 flex flex-col justify-around py-4 md:flex-row'>
                <div className='w-full h-full p-3 flex justify-center items-center md:w-1/4'>
                    <img src={iconMoney} alt="" />
                    <span className='font-semi-bold text-white pl-4'>
                        Economize até 80% na sua conta de luz todos os meses
                    </span>
                </div>
                <div className='w-full h-full p-3 flex justify-center items-center md:w-1/4'>
                    <img src={iconNoTools} alt="" />
                    <span className='font-semi-bold text-white pl-4'>
                        Instale em Usina Compartilhada, sem obras na sua residência
                    </span>
                </div>
                <div className='w-full h-full p-3 flex justify-center items-center md:w-1/4'>
                    <img src={iconLeaf} alt="" />
                    <span className='font-semi-bold text-white pl-4'>
                        Economize até 80% na sua conta de luz todos os meses
                    </span>
                </div>
            </div>

            <div className='w-full flex justify-around m-6'>
                <p className='text-4xl font-normal text-gray-500'>
                    {`Como funciona a Plataforma Digital `}
                    <span className='font-medium text-emerald-500'>Ape</span>
                    <span className='font-medium text-gray-500'>Sol</span>
                    ?
                </p>
            </div>


        </div>
    )
}
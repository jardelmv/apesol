
import paineis from './img/paineis.png';
import iconMoney from './img/icon-money.svg';
import iconSol from './img/icon-sol.png';

export default function Landpage() {
    return (
        <div className='h-screen'>

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
                <div className='h-[55%] my-8 flex flex-col justify-around'>
                    <p className='font-sans lg:text-5xl md:text-3xl sm: text-3xl font-normal text-emerald-300'>
                        para quem mora em apartamento
                    </p>
                    <p className='font-sans lg:text-5xl md:text-3xl sm: text-3xl font-normal text-emerald-400'>
                        para quem mora de aluguel
                    </p>
                    <p className='font-sans lg:text-5xl md:text-3xl sm: text-3xl font-normal text-emerald-500'>
                        para quem não quer obras
                    </p>                                 
                </div>
            </div>

            <div className='w-full'>
                <img src={iconMoney} alt="" />
            </div>

        </div>
    )
}

import paineis from './img/paineis.jpg';
import iconMoney from './img/icon-money.png';
import iconNoTools from './img/icon-no-tools.png';
import iconLeaf from './img/icon-leaf.png';
import {logo, classForWho, classResumeBox, classResumeText} from './styles'

export default function Landpage() {

    return (
        <div className='w-full h-screen'>

            <div className='sticky top-0 z-50 bg-white h-14 w-full pl-5'>
                <div className='h-full flex items-center'>
                    {logo('text-3xl')}
                </div>
            </div>

            <div className='h-fit md:h-1/3 lg:h-[45%] bg-cover bg-bottom bg-no-repeat pl-10 py-14' style={{ backgroundImage: `url(${paineis})` }} >
                <p className='text-3xl lg:text-6xl md:text-5xl font-sans font-medium text-white'>
                    Sistemas de Energia Solar
                </p>
                <div className='h-fit w-fit rounded-md bg-black/30 p-3 my-8 flex flex-col justify-around'>
                    <p className={`${classForWho} text-emerald-300`}>
                        para quem mora em apartamento
                    </p>
                    <p className={`${classForWho} text-emerald-400`}>
                        para quem mora de aluguel
                    </p>
                    <p className={`${classForWho} text-emerald-500`}>
                        para quem não quer obras
                    </p>                                 
                </div>

            </div>

            <div className='w-full bg-emerald-900 flex flex-col justify-around py-4 md:flex-row'>
                <div className={classResumeBox}>
                    <img src={iconNoTools} className='h-10' alt="" />
                    <span className={classResumeText}>
                        Escolha uma Usina Compartilhada e instale seu sistema sem obras
                    </span>
                </div>
                <div className={classResumeBox}>
                    <img src={iconLeaf} className='h-10' alt="" />
                    <span className={classResumeText}>
                        Seja dono do seu sistema, venda ou aumente a potência quando quiser
                    </span>
                </div>
                <div className={classResumeBox}>
                    <img src={iconMoney} className='h-10' alt="" />
                    <span className={classResumeText}>
                        Economize até 80% na sua conta de luz todos os meses
                    </span>
                </div>                
            </div>

            <div className='w-full my-6'>
                <p className='text-center text-4xl leading-tight font-normal text-gray-500'>
                    {`Para quem é a Plataforma Digital `}{logo('text-4xl')}?
                </p>
            </div>

        </div>
    )
}
export const classForWho = 'text-xl lg:text-5xl md:text-3xl mb-1 font-sans font-normal';
export const classResumeBox = 'w-full h-full py-3 px-8 flex justify-center items-center md:w-1/4 md:px-0';
export const classResumeText = 'font-semi-bold text-white pl-4';

export const logo = (fontSize) => {
    return (
        <>
            <span className= {`${fontSize} font-medium text-emerald-500`}>Ape</span>
            <span className={`${fontSize} font-medium text-gray-500`}>Sol</span>
        </>
    )
}
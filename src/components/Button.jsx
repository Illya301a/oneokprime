function Button() {
    return (
        <div className="flex justify-center items-center gap-4 my-8">
            <h1 className="text-purple-800 dark:text-purple-100 font-bold text-xl text-center">
                СКАЧЯТЬ КФГ <span className="text-4xl">&#8594;</span>
            </h1>
            
            <a href="https://drive.google.com/file/d/1JTORI4yJEhi5Ig1K7R3yDLe_sUdSE7-X/view?usp=drive_link" download>
                <div className="button-container">
                <button className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out group relative">
                    <svg className="fill-current w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-y-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                    </svg>
                    <span>Download</span>
                </button>
            </div>
            </a>
            
            
            <h1 className="text-purple-800 dark:text-purple-100 font-bold text-xl text-center">
                <span className="text-4xl">&#8592;</span> СКАЧЯТЬ КФГ
            </h1>
        </div>
    )
}

export default Button
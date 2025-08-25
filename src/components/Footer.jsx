function Footer() {
    return(
        <footer className="bg-purple-50 rounded-t-lg shadow-sm dark:bg-purple-900 border-t border-purple-200 dark:border-purple-700 mt-auto">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-purple-600 sm:text-center dark:text-purple-300">© 2023 <a href="https://flowbite.com/" className="hover:underline hover:text-purple-800 dark:hover:text-purple-100">Oneok prime.ua™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-purple-600 dark:text-purple-300 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline hover:text-purple-800 dark:hover:text-purple-100 me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline hover:text-purple-800 dark:hover:text-purple-100 me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline hover:text-purple-800 dark:hover:text-purple-100 me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline hover:text-purple-800 dark:hover:text-purple-100">Contacts</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
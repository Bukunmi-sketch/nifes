import { useState } from "react";
import { Link } from "@remix-run/react";

export default function Header2() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

    return (
        <header className="bg-gray-800 text-white z-99 fixed">
            <nav className="flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link to="/" className="text-lg font-bold">
                    MyWebsite
                </Link>

                {/* Navigation Menu */}
                <div className="flex items-center gap-4">
                    <Link to="/about" className="hover:text-gray-300">
                        About
                    </Link>

                    {/* Resources Tab with Dropdown */}
                    <div className="relative">
                        <button
                            className="hover:text-gray-300"
                            onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                        >
                            Resources
                        </button>
                        {resourcesDropdownOpen && (
                            //   <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                            //     <li className="p-2 hover:bg-gray-200">
                            //       <Link to="/guides">Guides</Link>
                            //     </li>
                            //     <li className="p-2 hover:bg-gray-200">
                            //       <Link to="/tutorials">Tutorials</Link>
                            //     </li>
                            //     <li className="p-2 hover:bg-gray-200">
                            //       <Link to="/articles">Articles</Link>
                            //     </li>
                            //   </ul>
                            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto mt-24">

                                {/* <!-- First Dropdown --> */}
                                <li>
                                    <details class="group">
                                        <summary class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                                            <span class="flex gap-2">
                                                <img class="w-6 h-6 rounded-lg"
                                                    src="https://lh3.googleusercontent.com/a/AGNmyxbSlMgTRzE3_SMIxpDAhpNad-_CN5_tmph1NQ1KhA=s96-c"
                                                    alt="" />
                                                <span>Prajwal Hallale</span>
                                            </span>
                                            <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                                </path>
                                            </svg>
                                        </summary>
                                        <article class="px-4 pb-4">
                                            <ul class="flex flex-col gap-4 pl-2 mt-4">
                                                <li class="flex gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
                                                        </path>
                                                    </svg>
                                                    <a href="http://127.0.0.1:8000/user/dashboard">Dashboard</a>
                                                </li>
                                                <li class="flex gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z">
                                                        </path>
                                                    </svg>
                                                    <a href="http://127.0.0.1:8000/user/study-lists">Study Lists</a>
                                                </li>
                                                <li class="flex gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z">
                                                        </path>
                                                    </svg>
                                                    <a href="http://127.0.0.1:8000/user/contribution">Your Contribution</a>
                                                </li>
                                                <li class="flex gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z">
                                                        </path>
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                                                        </path>
                                                    </svg>
                                                    <a href="http://127.0.0.1:8000/user/settings">Settings</a>
                                                </li>
                                            </ul>
                                        </article>
                                    </details>
                                </li>

                                {/* <!-- Add more dropdowns as needed --> */}
                            </ul>

                        )}
                    </div>

                    <Link to="/contact" className="hover:text-gray-300">
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="block md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-gray-700">
                    <Link to="/about" className="block px-4 py-2 hover:bg-gray-600">
                        About
                    </Link>
                    <button
                        className="block px-4 py-2 hover:bg-gray-600"
                        onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                    >
                        Resources
                    </button>
                    {resourcesDropdownOpen && (
                        <ul className="bg-gray-600 z-99">
                            <li className="px-4 py-2 hover:bg-gray-500">
                                <Link to="/guides">Guides</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-500">
                                <Link to="/tutorials">Tutorials</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-500">
                                <Link to="/articles">Articles</Link>
                            </li>
                        </ul>
                    )}
                    <Link to="/contact" className="block px-4 py-2 hover:bg-gray-600">
                        Contact
                    </Link>
                </div>
            )}
        </header>
    );
}

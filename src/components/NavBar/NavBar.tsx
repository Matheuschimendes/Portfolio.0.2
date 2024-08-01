export default function NavBar(){
    return(
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
                <li>
                    <a className="group flex items-center py-3 active" href="#about">
                        <span className="nav-indicator mr-4 h-px w-8 
                        bg-slate-600 transition-all group-hover:w-16
                        group-hover:bg-slate-200 group-focus-visible:w-16
                        group-focus-visibli:bg-slate-200 
                        motion-reduce:transition-none"></span>
                        <span className="text-xs font-bold uppercase tracking-widest
                        text-slate-500 group-hover:text-slate-200 
                        group-focus-visible:text-slate-200">Sobre mim</span>
                    </a>
                </li>
                <li>
                    <a className="group flex items-center py-3 active" href="#experiencia">
                        <span className="nav-indicator mr-4 h-px w-8 
                        bg-slate-600 transition-all  group-hover:w-16
                        group-hover:bg-slate-200 group-focus-visible:w-16
                        group-focus-visibli:bg-slate-200 
                        motion-reduce:transition-none"></span>
                        <span className="text-xs font-bold uppercase tracking-widest
                        text-slate-500 group-hover:text-slate-200 
                        group-focus-visible:text-slate-200 ">Experiencias</span>
                    </a>
                </li>
                <li>
                    <a className="group flex items-center py-3 active" href="#projetos">
                        <span className="nav-indicator mr-4 h-px w-8 
                        bg-slate-600 transition-all group-hover:w-16
                        group-hover:bg-slate-200 group-focus-visible:w-16
                        group-focus-visibli:bg-slate-200 
                        motion-reduce:transition-none"></span>
                        <span className="text-xs font-bold uppercase tracking-widest
                        text-slate-500 group-hover:text-slate-200 
                        group-focus-visible:text-slate-200">Projetos</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
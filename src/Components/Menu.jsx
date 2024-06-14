function Menu({isMenuOpen}) {
    return (
        <div className={`${isMenuOpen ? 'right-0' : '-right-3/4 '}  h-[90dvh] w-[30dvw] bg-red-900/50 absolute z-30 top-[10dvh] transition-transition-transform duration-500 ease-in-out transform translate-x-0`}>
            
        </div>
    )
}

export default Menu

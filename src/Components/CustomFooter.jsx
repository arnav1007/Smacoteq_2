function CustomFooter({active}) {
    return (
        <footer className="flex pl-14 w-full align-middle justify-between items-center text-footer_light text-[13px]">
            <img src="/lang.png" alt="" height={30} width={30}/>
            <ul className="flex border  border-white   rounded-md px-3 py-1 gap-3">
                <li className={active === 1 ? "text-white" : ""}>
                    WHAT WE THING
                </li>
                <li className={active === 2 ? "text-white" : ""}>
                    WHAT WE DO
                </li>
                <li className={active === 3 ? "text-white" : ""}>
                    WHICH BUSINESS
                </li>
            </ul>
            <img src="/logo_only.png" alt="" height={20} width={25}/>
            <h3>WHAT WE ARE</h3>
            <h3>CONTACT</h3>
        </footer>
    )
}

export default CustomFooter

function CustomFooter({active}) {
    return (
        <footer className="flex w-3/4 align-start gap-8 items-center text-footer_light text-[13px] ">
            <img src="/noun.png" alt="" height={30} width={30}/>
            <ul className="flex border  border-black   rounded-md px-3 py-1 gap-3">
                <li className={active === 1 ? "text-7C7C7D" : ""}>
                    WHAT WE THING
                </li>
                <li className={active === 2 ? "text-black font-bold" : "" }>
                    WHAT WE DO
                </li>
                <li className={active === 3 ? "text-7C7C7D" : ""}>
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

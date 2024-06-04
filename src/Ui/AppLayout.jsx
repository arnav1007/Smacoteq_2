import Header from "../Components/Header"

function AppLayout({children}) {
    return (
        <div className="h-[100dvh] w-[100dvw] bg-main overflow-y-auto overflow-x-hidden relative">
            <Header />
            {children}
            
        </div>
    )
}

export default AppLayout

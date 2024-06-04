function PageLayout({left , right}) {
    return (
        <div className="h-full w-full flex">
            <div className="h-full w-11/12">
                {left}
            </div>
            <div className="h-full w-1/12">
                {right}
            </div>
        </div>
    )
}

export default PageLayout

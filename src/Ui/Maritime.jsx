function Maritime({text}) {
    return (
        <div className="  h-60 w-11/12  flex items-center  font-maritime absolute bottom-0 text-3A3B3B">
          <div className=" h-fit w-fit transform translate-y-12 -translate-x-4  rotate-[-90deg] flex items-center gap-3 ">
            <div className="h-[2px] w-20 bg-light_text"> </div>
            <div className="text-maritime_color tracking-wider">
              <h1 className="text-ms">{text}</h1>
            </div>
          </div>
        </div>
      );
}

export default Maritime

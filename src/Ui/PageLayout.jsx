function PageLayout({ left, right }) {
  return (
    <div className="flex h-full w-full">
      <div className="h-full w-11/12">{left}</div>
      <div className="h-full w-1/12">{right}</div>
    </div>
  );
}

export default PageLayout;

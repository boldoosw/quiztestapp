const Footer = () => {
  const year = new Date().getFullYear().toString();
  return (
    <footer className="sticky bottom-0 z-999 flex w-full p-3 drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3">
        <small className="xs:text-xs text-[0.6rem]">
          Copyright &copy; {year}{" "}
          <a
            href="https://github.com/dhawal-793/Dev_News"
            target="_blank"
            className="text-accent"
          >
            “Цахим тест” лаборатори.
          </a>
        </small>
        <small className="xs:text-sm flex text-[0.7rem]">
          {/* Made with <HeartIcon className="w-4 mx-1 text-cancel h4" /> by{" "}
          <a
            href="https://dev-folio-793.vercel.app"
            target="_blank"
            className="ml-1 text-accent"
          >
            Ganbold Khaltar
          </a> */}
          Мэргэжил сонголтын Холланд ба Климовын сонгодог тест дээр суурилсан
          Резапкины аргачлалыг ОНЛАЙН хувилбараар боловсруулав.
        </small>
      </div>
    </footer>
  );
};

export default Footer;

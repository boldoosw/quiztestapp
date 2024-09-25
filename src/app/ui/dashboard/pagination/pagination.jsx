"use client";

import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/Button/Button";
import { ITEM_PER_PAGE } from "@/lib/settings";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);


  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex items-center justify-center mt-2 gap-2">
      <Button
        disabled={!hasPrev}
        className=
        {`${styles.button}  disabled:opacity-80 disabled:cursor-not-allowed`}
        text="Өмнөх"
        btn_next={!hasPrev}
        onClick={() => handleChangePage("prev")}
      />
      <Button
        disabled={!hasNext}
        text="Дараах"
        className={`${styles.button}  disabled:opacity-80 disabled:cursor-not-allowed`}
        btn_next={!hasNext}
        onClick={() => handleChangePage("next")}
      />
    </div>
  );
};

export default Pagination;

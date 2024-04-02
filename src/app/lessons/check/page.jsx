"use client";
import { lessons } from "@/utils/lessons";
import React, { Component } from "react";
import Image from "next/image";
import prof_header from "@/assets/images/profession.png";

import { Quicksand } from "next/font/google";


const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});


const basePath = "/assets/images/profession_images";

export const Checkbox = ({ isChecked, label, checkHandler, index,isDisabled }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={`checkbox-${index}`}
        checked={isChecked}
        onChange={checkHandler}
        disabled={isDisabled}
        
      />
      <label htmlFor={`checkbox-${index}`}>{label}</label>
    </div>
  );
};
export default class page extends Component {
  // const [toppings, setToppings] = useState(allToppings);

  state = { checked: {} };
  onSelectedChange = (index) => {
    this.setState((previousState) => ({
      checked: {
        ...previousState.checked,
        [index]: !previousState.checked[index],
      },
    }));
  };

  render() {
    const { checked } = this.state;
    const checkedCount = Object.keys(checked).filter(
      (key) => checked[key]
    ).length;
    const disabled = checkedCount > 2;

    return (
         <div>
      <main
        className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full flex flex-col items-center`}
      >
        <Image className="sm:w-full" src={prof_header} alt="prof-logo" />
        <div className="w-full grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
        {lessons.map((_element, index) => (
          <>
                  <div
                key={index}
                className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden cursor-hand items-center"
              >

              <Checkbox
                        key={index}
                        id={`checkbox-${index}`}
                        name={`checkbox-${index}`}
                        isChecked={checked[index] || false}
                        checkHandler={() => this.onSelectedChange(index)}
                        disabled={!checked[index] && disabled}
                        label={_element.name}
                        index={index}
                        isDisabled={!checked[index] && disabled}
                      />

            {/* <input
              key={index}
              onChange={() => this.onSelectedChange(index)}
              type="checkbox"
              checked={checked[index] || false}
              disabled={!checked[index] && disabled}
            />
            <label htmlFor={`${index}`}>{_element.name}</label> */}
          </div>
          </>
        ))}
          </div>
        </main>
    </div>
    );
  }
}

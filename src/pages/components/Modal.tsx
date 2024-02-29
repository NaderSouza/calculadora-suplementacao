import { useState } from "react";
import { Button, ButtonModal } from "./Button";

export default function Modal({
  title,
  children,
  buttonText,
  icon,
}: ModalProps) {
  const [showModal, setShowModal] = useState(true);
  const playSound = () => {
    const audio = new Audio("/bur.mp3");
    audio.play();
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
                {/*header*/}
                <div className=" items-start justify-between p-3 border-b border-solid border-slate-500 rounded-t">
                  <h3 className="text-3xl font-semibold text-center">
                    {icon}
                    {title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      playSound();
                      setShowModal(false);
                    }}
                  ></button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {children}
                  </p>
                </div>
                {}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-500 rounded-b">
                  <ButtonModal
                    onClick={() => {
                      playSound();
                      setShowModal(false);
                    }}
                  >
                    {buttonText}
                  </ButtonModal>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

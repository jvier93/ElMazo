import { useEffect } from "react";
import { socket } from "../Socket";

export const ModalNotification = function ({
  showModal,
  setShowModal,
  modalMessage,
  setModalMessage,
}) {
  const handleClickLeave = function () {
    socket.emit("playerLeave");
  };
  const handleClickCancel = function () {
    setShowModal(false);
  };

  useEffect(() => {
    function handlePlayerNotification({ showModal, modalMessage }) {
      setShowModal(showModal);
      setModalMessage(modalMessage);
    }

    socket.on("playerNotification", handlePlayerNotification);

    return function cleanup() {
      socket.off("playerNotification", handlePlayerNotification);
    };
  }, []);

  return (
    <div
      className={` ${
        showModal ? "" : "hidden"
      } fixed top-0 right-0 left-0 z-50 w-full h-full flex items-center justify-center `}
    >
      <div className="w-80 md:w-96 h-32 bg-gray-200 border-2 border-dotted border-gray-400 rounded-lg flex flex-col justify-around ">
        <p className="h-16 font-Mate pl-2 pr-2">{modalMessage}</p>
        <div className="w-full flex justify-center">
          <button
            className="  w-20 h-8 text-sm rounded   text-white font-Mate bg-green-600 px-2  mx-1 md:my-1"
            onClick={handleClickLeave}
          >
            Aceptar
          </button>
          <button
            className="  w-20 text-sm rounded   text-white font-Mate bg-red-600 px-2  mx-1 md:my-1"
            onClick={handleClickCancel}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

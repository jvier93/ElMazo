import "./Game.css";
import { useState, useEffect } from "react";
import { Table } from "./../Table";
import { Deck } from "../Deck";
import { OtherPlayers } from "./../OtherPlayers";
import { MyPlayer } from "../MyPlayer";
import React from "react";
import { CutTable } from "../CutTable";
import { socket } from "./../Socket";
import { ModalNotification } from "../ModalNotification/ModalNotification";

export const Game = ({ sound }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [gameStatus, setGameStatus] = useState("pausa");
  useEffect(() => {
    function handleUpdateGameStatus(gameStatus) {
      setGameStatus(gameStatus);
    }

    socket.on("updateGameStatus", handleUpdateGameStatus);
    return () => {
      socket.off("updateGameStatus", handleUpdateGameStatus);
    };
  }, []);

  return (
    <div className="pt-10">
      <div>
        <OtherPlayers></OtherPlayers>
        <div className="flex justify-center gap-4  my-4 md:my-10 ">
          <Deck gameStatus={gameStatus} sound={sound}></Deck>
          <CutTable></CutTable>
          <Table gameStatus={gameStatus} sound={sound}></Table>
        </div>
        <MyPlayer
          gameStatus={gameStatus}
          showModal={showModal}
          setShowModal={setShowModal}
          modalMessage={modalMessage}
          setModalMessage={setModalMessage}
          sound={sound}
        ></MyPlayer>
        <ModalNotification
          showModal={showModal}
          setShowModal={setShowModal}
          modalMessage={modalMessage}
          setModalMessage={setModalMessage}
        ></ModalNotification>
      </div>
    </div>
  );
};

import "./Game.css";
import { useState } from "react"
import { Table } from "./../Table";
import { Deck } from "../Deck";
import { OtherPlayers } from "./../OtherPlayers";
import { MyPlayer } from "../MyPlayer";
import React from "react";
import { CutTable } from "../CutTable";
import { ModalNotification } from "../ModalNotification/ModalNotification";


export const Game = ({ sound }) => {

  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState("")


  return (
    <div className="pt-10">
      <div>
        <OtherPlayers></OtherPlayers>
        <div className="flex justify-center gap-4  my-4 md:my-10 ">
          <Deck sound={sound}></Deck>
          <CutTable></CutTable>
          <Table sound={sound}></Table>
        </div>
        <MyPlayer showModal={showModal} setShowModal={setShowModal} modalMessage={modalMessage} setModalMessage={setModalMessage} sound={sound}></MyPlayer>
        <ModalNotification showModal={showModal} setShowModal={setShowModal} modalMessage={modalMessage} setModalMessage={setModalMessage}></ModalNotification>
      </div>
    </div>
  );
};

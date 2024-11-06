import React, { useState } from "react";
import Cards from "./Cards";
import { MdAdd } from "react-icons/md";
import AddEditNote from "./AddEditNote";
import Modal from "react-modal";
import Navbar from "./nav";

const Foreground = ({ UserInfo }) => {
  const [openAddEditModel, setOpenAddEditModel] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      
      <div className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap flex-shrink-0 p-5">
        <Cards
          title="meeting on 7th oct"
          date="3rd apr 2024"
          content="the meeting is about national security everyone asked to be present there at time for one hr the meeting is about national security everyone asked to be present there at time for one hr the meeting is about national security everyone asked to be present there at time for one hr the meeting is about national security everyone asked to be present there at time for one hr the meeting is about national security everyone asked to be present there at time for one hr"
          tags="#Meeting"
          isPinned={true}
          onEdit={() => {}}
          onDelete={() => {}}
          onPinNote={() => {}}
        />

        <button
          className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
          onClick={() => {
            setOpenAddEditModel({ isShown: true, type: "add", data: null });
          }}
        >
          <MdAdd className="text-[32px] text-white" />
        </button>
      </div>

      <Modal
        isOpen={openAddEditModel.isShown}
        onRequestClose={() =>
          setOpenAddEditModel({ ...openAddEditModel, isShown: false })
        }
        className="fixed inset-0 flex items-center justify-center z-[1001]"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-[1000]"
        contentLabel="Add/Edit Note"
      >
        <div className="bg-white p-8 rounded-lg w-full max-w-lg mx-auto">
          <AddEditNote
            type={openAddEditModel.type}
            noteData={openAddEditModel.data}
            onclose={() => {
              setOpenAddEditModel({ isShown: false, type: "add", data: null });
            }}
          />
        </div>
      </Modal>
    </>
  );
};

export default Foreground;

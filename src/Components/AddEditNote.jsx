import React, { useState } from 'react';
import TagInput from './imput/TagInput';
import { MdClose } from 'react-icons/md';
import axiosInstance from '../utils/axiosInstance';

const AddEditNote = ({noteData,getAllNotes,type,onclose,showToastMessage}) => {
    const [title, setTitle] = useState(noteData?.title||"");
    const [content, setContent] = useState(noteData?.content||"");
    const [tags, setTags] = useState(noteData?.tags||[]);

    const [error, seterror] = useState(null)

     //Edit note 
        const editNote= async()=>{
             const noteId = noteData._id;
            try {
                const response= await axiosInstance.put("/Edit-note/"+ noteId,
                    {
                    title,
                    content,
                    tags,
                });
                if(response.data && response.data.note){
                    showToastMessage("Note Updated Successfully")
                    getAllNotes();
                    onclose();
                }
            } catch (error) {
                if(
                    error.response &&
                    error.response.data &&
                    error.response.data.message
                ){
                    seterror(error.response.data.message);
                }
            }
        };

   //Add Note
        const addNewNote=async()=>{
            try {
                const response= await axiosInstance.post("/add-note",{
                    title,
                    content,
                    tags,
                });
                if(response.data && response.data.note){
                    showToastMessage("Note Added Successfully")
                    getAllNotes();
                    onclose();
                }
            } catch (error) {
                if(
                    error.response &&
                    error.response.data &&
                    error.response.data.message
                ){
                    seterror(error.response.data.message);
                }
            }
        };

    const handleAddNote =()=>{
        if(!title){
            seterror("Please enter the title");
            return;
        }
        if(!content){
            seterror("Please enter the Content");
            return;
        }

        seterror("");
        if(type==='edit'){
            editNote()
        }else{
            addNewNote()
        }
    }
    return (
        <div className='relative'>

                <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50' onClick={onclose}>
                    <MdClose className='text-xl text-slate-400'/>
                </button>

            <div className='flex flex-col gap-2'>
                <label className='input-label'>TITLE</label>
                <input
                    type="text"
                    className='text-2xl text-slate-950 outline-none'
                    placeholder='GO TO GYM AT 5'
                    value={title}
                    onChange={({ target }) => setTitle(target.value)}
                />
            </div>

            <div className='flex flex-col gap-2 mt-4'>
                <label className="input-label">CONTENT</label>
                <textarea
                    type="text"
                    className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded'
                    placeholder='Content'
                    rows={10}
                    value={content}
                    onChange={({ target }) => setContent(target.value)}
                />
            </div>

            <div className='mt-3'>
                <label className="input-label">TAGS</label>
                <TagInput tags={tags} setTags={setTags} />
            </div>

            {error && <p className='text-red-500 text-xs pt-4'>{error}</p>}

            <button className='btn-primary font-medium mt-5 p-3' onClick={handleAddNote}>
                {type==="edit"?"UPDATE":"ADD"}
            </button>
        </div>
    );
};

export default AddEditNote;

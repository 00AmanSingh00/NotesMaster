import { createContext } from "react";
import { EditedNote, NewNote, Note } from "@src/types";
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// VARIABLES


interface InitialDataType {
    notes: Note[];
    editNote: (noteObject: EditedNote) => void;
    addNote: (note: NewNote) => void;
    deleteNote: (id: string) => void;
    fetchNotes: () => void;
}

const notes: Note[] = [];
const initialData: InitialDataType = {
    notes,
    editNote: () => { },
    addNote: () => { },
    deleteNote: () => { },
    fetchNotes: () => { },
}

const noteContext = createContext(initialData);

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// EXPORT

export default noteContext;

import React from "react";
import { useParams } from "react-router-dom";
import NotesItemBody from "../components/NotesItemBody";
import { getNote } from "../utils/api";

function DetailPage(){
    const {id} = useParams();
    const [note, setNote] = React.useState([]);

    React.useEffect(() => {
        const fetchNote = async () => {
            try {
                const { error, data } = await getNote(id);
                if (!error) {
                    setNote(data);
                } else {
                    console.error("Error fetching note:", data);
                }
            } catch (error) {
                console.error("Error fetching note:", error);
            }
        };

        fetchNote();
    }, [id]);

    if (note === null){
        return <div className="empty-notes"><p>Catatan dengan id {id} <span className="not-found">Tidak ditemukan</span></p></div>
    }
    
    return (
        <section className="notes-app">
            {note && Object.keys(note).length > 0 && <NotesItemBody {...note} />}
        </section>
    );    

}

export default DetailPage;
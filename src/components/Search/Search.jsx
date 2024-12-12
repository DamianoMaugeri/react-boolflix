import { useContext, useState } from "react"
import GlobalContext from "../../contex/GlobalContex"

export default function Search() {
    const [formData, setFormData] = useState({ title: '' })


    function handleFormData(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const { fetchAll } = useContext(GlobalContext)

    function formSubmit(e) {
        e.preventDefault()
        fetchAll(formData.title)
        setFormData({ title: '' })
    }


    return (
        <form onSubmit={formSubmit}>
            <input type="text" name='title' value={formData.title} onChange={handleFormData} />
            <input type="submit" value='Cerca' />
        </form>
    )
}
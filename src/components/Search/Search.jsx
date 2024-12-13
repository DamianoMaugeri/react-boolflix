import { useContext, useState } from "react"
import GlobalContext from "../../contex/GlobalContex"
import style from './Search.module.css'

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
        <form onSubmit={formSubmit} className={style.form}>
            <input className={style.text} type="text" name='title' value={formData.title} onChange={handleFormData} />
            <input className={style.submit} type="submit" value='Cerca' />
        </form>
    )
}
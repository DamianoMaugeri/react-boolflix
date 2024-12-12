import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalContext from "./contex/GlobalContex"
import MainPage from "./pages/MainPage"
import { useState } from "react"
import axios from "axios"
import { BASE_URI, key } from "./config"
import MainLayout from "./layouts/MainLayout"

function App() {

  const [films, setFilms] = useState([])
  const [tvs, setTvs] = useState([])

  function fetchAll(title) {

    axios.get(`${BASE_URI}/search/movie`, {
      params: {
        api_key: key,
        query: title
      }
    })
      .then(res => {
        setFilms(res.data.results)
      })
      .catch(err => console.error(err))


    axios.get(`${BASE_URI}/search/tv`, {
      params: {
        api_key: key,
        query: title
      }
    })
      .then(res => {
        setTvs(res.data.results.map(tv => ({ ...tv, title: tv.name, original_title: tv.original_name })))
      })
      .catch(err => console.error(err))


  }





  return (
    <GlobalContext.Provider value={{ fetchAll, films, tvs }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>

  )

}

export default App
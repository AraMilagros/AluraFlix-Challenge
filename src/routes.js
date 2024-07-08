import PaginaBase from './pages/PaginaBase';
import Principal from './pages/Principal';
import Video from './pages/Video';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <PaginaBase/> }>
                    {/* aqui iran las demas paginas */}
                    <Route path="" element={ <Principal /> }/>
                    <Route path="newVideo" element={ <Video/> } />
                    <Route path='*' element={ <NotFound/> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () =>
    <div>
        <Header title="Sobre" />

        <p>
            Aqui encontra-se tudo sobre o meu ser!
        </p>

        <Link to="/">Home</Link>
    </div>


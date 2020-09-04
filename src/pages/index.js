import React from "react"
import Header from '../components/header'
import { Link } from "gatsby"

export default () =>
  <div>
    <Header title="Home" />

    <p>
      Página bonitona com vários projetos.
    </p>
    <Link to="sobre">Sobre</Link>
  </div>


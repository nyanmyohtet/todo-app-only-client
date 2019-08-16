import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import CreatePage from '../components/CreatePage'
import HomePage from '../components/HomePage'
import ItemPage from '../components/ItemPage'
import NavBar from '../components/NavBar'

const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <Route path="/" exact component={HomePage} />
        <Route path="/create/" component={CreatePage} />
        <Route path="/Item/:id" component={ItemPage} />
      </div>
    </Router>
  );
}

export default AppRouter

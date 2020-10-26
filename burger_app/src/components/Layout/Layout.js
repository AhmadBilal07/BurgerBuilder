import React from 'react'
import Aux from '../hoc/Auxiliary'

const Layout = props => {
    <Aux>
        <div>Side Drawer, Tool Bar, BackDrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
}
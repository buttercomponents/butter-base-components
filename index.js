import React, { Component } from 'react';

import TitleBar     from './src/components/title-bar'
import Navbar       from './src/components/navbar'
import Alert        from './src/components/alert'
import Buttons      from './src/components/button'
import Dropdowns    from './src/components/dropdown'
import Switch       from './src/components/switch'
import Modal        from './src/components/modal'

// XXX: backward compat
let ActionBar = Navbar

export {TitleBar, ActionBar, Navbar, Alert, Buttons, Dropdowns, Modal, Switch}

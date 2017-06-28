import React, { Component } from 'react';

import Navbar       from './src/components/navbar'
import Alert        from './src/components/alert'
import Buttons      from './src/components/button'
import Dropdowns    from './src/components/dropdown'
import Switch       from './src/components/switch'
import Modal        from './src/components/modal'

// XXX: backward compat
let ActionBar = Navbar

export {ActionBar, Navbar, Alert, Buttons, Dropdowns, Modal, Switch}

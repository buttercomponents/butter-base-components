import React, { Component } from 'react';

import ToolBar      from './src/components/toolbar'
import Alert        from './src/components/alert'
import Buttons      from './src/components/button'
import Dropdowns    from './src/components/dropdown'
import Switch       from './src/components/switch'
import Modal        from './src/components/modal'

// XXX: backward compat
let ActionBar = ToolBar

export {ActionBar, ToolBar, Alert, Buttons, Dropdowns, Modal, Switch}

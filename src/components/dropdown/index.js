import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import style from './style.styl';

const Identity = a => a

//Dropdown Item component
let DropdownItem = (props) => (
    <li className={style.action} onClick={props.onSelect}>
        {props.value}
    </li>
)

let ColorDropdownItem = (props) => (
    <li style={{backgroundColor: props.value}} className={style.action} onClick={props.onSelect}>
    </li>
)

//Label Component
const LabelItem = (props) => (
    <span>{props.value}</span>
)

const ColorLabelItem = (props) => (
    <div>
        <div className={style.label} style={{backgroundColor: props.value}}/>
        <LabelItem {...props}/>
    </div>
)

const DropdownToggle = ({children, onClick=Identity, toggle=true}) => (
    <div className="dropdown-toggle" onClick={onClick}>
        {children}
        {toggle ? <i className="material-icons"></i>:null}
    </div>
)

class Dropdown extends Component {

    static defaultProps = {
        apply: () => {},
        config : {
            type: "text",
            item: DropdownItem,
            label: LabelItem
        }
    }

    static propTypes = {
        apply: PropTypes.func,
        config: PropTypes.shape({
            type: PropTypes.string.isRequired,
            item: PropTypes.oneOfType([ PropTypes.element,  PropTypes.func]).isRequired,
            label: PropTypes.oneOfType([ PropTypes.element,  PropTypes.func]).isRequired
        })
    }

    constructor (props) {
        super()
        this.state = {
            open: false,
            selected: props.selected || Object.keys(props.options)[0]
        }
        this.apply = props.apply.bind(this)
    }

    toggle() {
        this.setState(prevState => ({open: !!!prevState.open}))
    }

    close() {
        this.setState({open: false})
    }

    onSelect (o) {
        this.setState({selected: o, open: false})
        this.apply(o)
    }

    render() {
        const {props, state} = this
        const Item = props.config.item
        const Label = props.config.label
        const {options} = props

        const selected = options[state.selected]

        const dropdownStyle = style[`dropdown-${props.config.type}`]
        let activeStyle = state.open ? 'open':''

        if (! options || ! options.length) {
            return (<div className={`${dropdownStyle}  ${activeStyle}`} tabIndex="-1" onBlur={this.close.bind(this)}>
                <DropdownToggle {...props} toggle={false}>
                    <Label value={'Default'}/>
                </DropdownToggle>
            </div>)
        }

        return  (
            <div className={`${dropdownStyle}  ${activeStyle}`} tabIndex="-1" onBlur={this.close.bind(this)}>
                <DropdownToggle {...props} onClick={this.toggle.bind(this)}>
                    <Label value={selected} />
                </DropdownToggle>
                <div className="dropdown-menu">
                    <ul className={style.items}>
                        {
                            Object.keys(props.options).map((k, i) => (
                                state.selected === k ? null :
                                <Item
                                    key={i}
                                    onSelect={this.onSelect.bind(this, k)}
                                    value={props.options[k]} />
                            ))
                        }
                    </ul>
                    {props.children}
                </div>
            </div>
        )
    }
}

class DropdownColor extends Component {
    constructor(props) {
        super(props)
        this.colorPicker = React.createRef()
        this.state = {
            colors: this.props.options,
        }
    }

    addColor(color) {
        const colors = this.state.colors.slice();
        colors.unshift(color);
        this.setState({colors})
    }

    openColorPicker = () => {
        this.colorPicker.current.click();
    }

    handlePicker = (input) => {
        this.addColor(input.value)
    }

    render() {
        const {props, state} = this;

        const colorOpts = {
            type: "color",
            item: ColorDropdownItem,
            label: ColorLabelItem
        }

        return(
            <Dropdown config={colorOpts}  {...props} options={state.colors}>
                <input style={{display: 'none'}} ref={this.colorPicker} type="color" />
                <DropdownItem value="More colors..." onSelect={this.openColorPicker}/>
            </Dropdown>);
    }
}

let Dropdowns = {
    Dropdown: translate(['dropdown'])(Dropdown),
    DropdownColor: translate(['dropdown-color'])(DropdownColor)
}

export {Dropdowns as default}

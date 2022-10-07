import React, { Component } from "react";
import styles from './ContactList.module.css';

export default class Contacts extends Component {


    render() {
        return (
            <ul className={styles.item}>{this.props.contacts.map(i => {
                return (
                    <li key={i.id}><span>{i.name}: </span><span>{i.number}</span></li>
                )
            })}</ul>

        )
    }
}
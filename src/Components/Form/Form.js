import { Component } from "react"
import s from '../Form/Form.module.css'


class Form extends Component {

    handleInputChange = (e) => {
       this.props.onInputChange(e.currentTarget.name, e.currentTarget.value)
    }

    onSbmit = (e) => {
        e.preventDefault()
        this.props.onFormSubmit()
    }

    render() {
        return (
            <form className={s.form} onSubmit={this.onSbmit}>
                <label className={s.label}>Name
                    <input
                        className={s.input}
                        type="text"
                        name="name"
                        value={this.props.name}
                        onChange={this.handleInputChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                </label>
                <label className={s.label}>Number
                    <input
                        className={s.input}
                        type="tel"
                        name="number"
                        value={this.props.number}
                        onChange={this.handleInputChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        />
                </label>
                <button className={s.btn} type="submit" >Add contact</button>
            </form>
        );
    };
};
export default Form
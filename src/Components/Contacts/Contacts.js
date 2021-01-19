import React, { Component } from 'react';
import Contact from './Contact';
import './style.css';
import { Link } from 'react-router-dom';
export const contactsList = [
    {
        firstName: 'Барней',
        lastName: 'Стинсовський',
        phone: '+380956319521',
        gender: 'male',
        image:
            'https://pbs.twimg.com/profile_images/3338691487/ed3aeb83f089eb9f394554f31dab24e7.jpeg',
        characteristic: `"Dude.. where's your suit? Just once, when I say "suit up" I wish you'd put on a suit.”`,
    },
    {
        firstName: 'Робін',
        lastName: 'Щербатська',
        phone: '+380931460123',
        gender: 'female',
        image:
            'https://tvguide1.cbsistatic.com/i/r/2020/05/07/1d59c950-2105-4c14-8c50-74e536f27b8f/crop/1380x1380+345+0/thumbnail/128x128/7e99611942a526771a1e2b06a39764a3/200507-how-i-met-your-mother-cobie-smulders.png',
        characteristic: `"Let's Go to the Mall!!!”`,
    },
    {
        firstName: 'Анонімний',
        lastName: 'Анонімус',
        phone: '+380666666666',
        image:
            'https://images5.fanpop.com/image/photos/25300000/Ranjit-how-i-met-your-mother-25385503-200-200.jpg',
        characteristic: `"You slept with Robin? That is Ted's ex-girlfriend!”`,
    },
    {
        firstName: 'Лілія',
        lastName: 'Олдровна',
        phone: '+380504691254',
        gender: 'female',
        image: 'https://www.theplace.ru/archive/00_icons/367_icon_128.jpg',
        characteristic: `"How much is it, on a scale from ‘never’ to ‘never ever’?”`,
    },
    {
        firstName: 'Маршен',
        lastName: 'Еріксонян',
        phone: '+380739432123',
        gender: 'male',
        image: 'https://citaty.info/files/characters/53105.jpg',
        characteristic: `"This Is Rex. He Lives With Us Now”`,
    },
    {
        firstName: 'Теодор',
        lastName: 'Мотсбес',
        phone: '+380956319521',
        gender: 'male',
        image: 'https://citaty.info/files/characters/39702.jpg',
        characteristic: `"Shouldn’t We Hold Out For The Person Who Doesn’t Just Tolerate Our Little Quirks But Actually Kinda Likes Them?”`,
    },
];

class Contacts extends Component {
    state = {
        contacts: contactsList,
        search: '',
        male: true,
        female: true,
        neither: true,
    };
    filter = () => {
        const genderFilter = contactsList.filter(
            (contact) =>
                (contact.gender === 'male' && this.state.male) ||
                (contact.gender === 'female' && this.state.female) ||
                (!contact.gender && this.state.neither)
        );
        const newContact = genderFilter.filter(
            (contact) =>
                (contact.firstName + ' ' + contact.lastName)
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase()) ||
                contact.phone.includes(this.state.search)
        );
        this.setState({ contacts: newContact });
    };

    handleSearchChange = async (event) => {
        await this.setState({ search: event.target.value });
        this.filter();
    };

    genderFiltration = async (event) => {
        switch (event.target.id) {
            case 'male':
                (await event.target.className) === 'genderChecked'
                    ? this.setState({ male: false })
                    : this.setState({ male: true });
                break;
            case 'female':
                (await event.target.className) === 'genderChecked'
                    ? this.setState({ female: false })
                    : this.setState({ female: true });
                break;
            case 'neither':
                (await event.target.className) === 'genderChecked'
                    ? this.setState({ neither: false })
                    : this.setState({ neither: true });
                break;
            default:
                break;
        }
        this.filter();
    };

    render() {
        return (
            <div className="app">
                <div className="search">
                    <input
                        type="text"
                        placeholder="🔍 Search contacts"
                        value={this.state.search}
                        onChange={this.handleSearchChange}
                    />
                </div>
                <div className="genderPanel">
                    <button
                        id="male"
                        className={this.state.male ? 'genderChecked' : 'genderUnchecked'}
                        onClick={this.genderFiltration}
                    >
                        Male
                    </button>
                    <button
                        id="female"
                        className={this.state.female ? 'genderChecked' : 'genderUnchecked'}
                        onClick={this.genderFiltration}
                    >
                        Female
                    </button>
                    <button
                        id="neither"
                        className={this.state.neither ? 'genderChecked' : 'genderUnchecked'}
                        onClick={this.genderFiltration}
                    >
                        Neither
                    </button>
                </div>
                <div className="contacts">
                    {this.state.contacts.map((contact, i) => (
                        <Link to={`/contacts/${contact.lastName}`} className="contact-link" key={i}>
                            <Contact {...contact} key={i} />
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default Contacts;

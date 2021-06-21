import React from 'react';
import AllExpModal from './AllExpModal';



class Movielist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allexpshow: false,
            expcount: 0,
            selectedexp: [],
            language: [
                {
                    id: '1', language: 'ENGLISH', class: 'active'
                },
                {
                    id: '2', language: 'عربى', class: 'inactive'
                }
            ],
            movielist: [{
                id: 1,
                mname: "Kaala",
                mimg: "/img/kaala.jpg",
                mcatg: "Action/Drama ",
                type: "PG15",
                typeclass: "pg-15",
                lang: "Tamil",
                subtitle: "Arabic",
                duration: "3 Hours 5 mins",
                cast: "Rajinikanth",
                stryline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                mtperience: [
                    { id: "1", time: "10:30am", class: "inactive" },
                    { id: "2", time: "11:30am", class: "inactive" },
                    { id: "3", time: "12:30am", class: "inactive" },
                    { id: "4", time: "3:00am", class: "li-disable" },
                    { id: "5", time: "4:00am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "6:30am", class: "inactive" }
                ],
                mtscreen: [
                    { id: "1", time: "10:30am", class: "inactive" },
                    { id: "2", time: "11:30am", class: "inactive" },
                    { id: "3", time: "12:30am", class: "inactive" },
                    { id: "4", time: "3:00am", class: "inactive" },
                    { id: "5", time: "4:00am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "6:30am", class: "inactive" }
                ],
                mtsuites: [
                    { id: "1", time: "10:30am", class: "inactive" },
                    { id: "2", time: "11:30am", class: "li-disable" },
                    { id: "3", time: "12:30am", class: "inactive" },
                    { id: "4", time: "3:00am", class: "inactive" },
                    { id: "5", time: "4:00am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "6:30am", class: "inactive" }
                ],
                mtjunior: [
                    { id: "1", time: "10:30am", class: "inactive" },
                    { id: "2", time: "11:30am", class: "inactive" },
                    { id: "3", time: "12:30am", class: "inactive" },
                    { id: "4", time: "3:00am", class: "inactive" },
                    { id: "5", time: "4:00am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "6:30am", class: "li-disable" }
                ],
                advancebk: "adbook"
            },
            {
                id: 2,
                mname: "Karnan",
                mimg: "/img/Karnan.jpg",
                mcatg: "Drama/Action",
                type: "PG",
                typeclass: "pg",
                lang: "Tamil",
                subtitle: "Arabic,English",
                duration: "2 Hours 39 mins",
                cast: "Dhanush",
                stryline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                mtperience: [
                    { id: "1", time: "10:30am", class: "inactive" },
                    { id: "2", time: "11:30am", class: "li-disable" },
                    { id: "3", time: "12:30am", class: "inactive" },
                    { id: "4", time: "3:00am", class: "inactive" },
                    { id: "5", time: "4:00am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "6:30am", class: "inactive" }
                ],
                mtscreen: [
                    { id: "1", time: "10:30am", class: "inactive" },
                    { id: "2", time: "11:30am", class: "inactive" },
                    { id: "3", time: "12:30am", class: "inactive" },
                    { id: "4", time: "3:00am", class: "inactive" },
                    { id: "5", time: "4:00am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "6:30am", class: "li-disable" }
                ],
                mtsuites: [
                    { id: "1", time: "10:30am", class: "inactive" },
                    { id: "2", time: "11:30am", class: "inactive" },
                    { id: "3", time: "12:30am", class: "li-disable" },
                    { id: "4", time: "3:00am", class: "inactive" },
                    { id: "5", time: "4:00am", class: "li-disable" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "6:30am", class: "inactive" }
                ],
                mtjunior: [
                    { id: "1", time: "10:30am", class: "inactive" },
                    { id: "2", time: "11:30am", class: "li-disable" },
                    { id: "3", time: "12:30am", class: "inactive" },
                    { id: "4", time: "3:00am", class: "inactive" },
                    { id: "5", time: "4:00am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "6:30am", class: "inactive" }
                ],
                advancebk: ""
            },
            {
                id: 3,
                mname: "Avatar",
                mimg: "/img/Avatar.jpg",
                mcatg: "Sci-fi/Sci-fi",
                type: "R-12",
                typeclass: "r12",
                lang: "English",
                subtitle: "Arabic",
                duration: "2 Hours 42 mins",
                cast: "Jack Sully",
                stryline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                mtperience: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "li-disable" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "li-disable" }
                ],
                mtscreen: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtsuites: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "li-disable" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "li-disable" }
                ],
                mtjunior: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "li-disable" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "li-disable" }
                ],
                advancebk: ""
            },
            {
                id: 4,
                mname: "The Avengers",
                mimg: "/img/avengers.jpg",
                mcatg: "Action/Sci-fi ",
                type: "R-15",
                typeclass: "r15",
                lang: "English",
                subtitle: "Arabic",
                duration: "2 Hours 24 mins",
                cast: "Robert Downey",
                stryline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                mtperience: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "li-disable" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtscreen: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "li-disable" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "li-disable" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtsuites: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "li-disable" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtjunior: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "li-disable" }
                ],
                advancebk: ""
            },
            {
                id: 5,
                mname: "Harry Porter",
                mimg: "/img/harryporter.jpg",
                mcatg: "Fantasy/Fantasy",
                type: "R-18",
                typeclass: "r18",
                lang: "English",
                subtitle: "Arabic",
                duration: "2 Hours 10 mins",
                cast: "Daniel Radcliffe",
                stryline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                mtperience: [
                    { id: "1", time: "5:30am", class: "li-disable" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtscreen: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "li-disable" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtsuites: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "li-disable" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtjunior: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "li-disable" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                advancebk: "adbook"
            },
            {
                id: 6,
                mname: "Master",
                mimg: "/img/master.jpg",
                mcatg: "Action/Thriller",
                type: "PG15",
                typeclass: "pg-15",
                lang: "Tamil",
                subtitle: "English",
                duration: "2 Hours 59 mins",
                cast: "Vijay",
                stryline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                mtperience: [
                    { id: "1", time: "5:30am", class: "li-disable" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtscreen: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "li-disable" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtsuites: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "li-disable" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtjunior: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "li-disable" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                advancebk: ""
            },
            {
                id: 7,
                mname: "Logan",
                mimg: "img/logan.jpg",
                mcatg: "Action/Sci-fi",
                type: "R-18",
                typeclass: "r18",
                lang: "English",
                subtitle: "English",
                duration: "2 Hours 21 mins",
                cast: "Hugh Jackman",
                stryline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                mtperience: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtscreen: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "li-disable" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtsuites: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtjunior: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "li-disable" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                advancebk: "adbook"
            },
            {
                id: 8,
                mname: "Soorarai Pottru",
                mimg: "/img/sooraraipottru.jpg",
                mcatg: "Drama/Action",
                type: "R-12",
                typeclass: "r12",
                lang: "Tamil",
                subtitle: "English",
                duration: "2 Hours 33 mins",
                cast: "Suriya",
                stryline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                mtperience: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "li-disable" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtscreen: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtsuites: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtjunior: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "li-disable" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                advancebk: ""
            },
            {
                id: 9,
                mname: "Dark Knight",
                mimg: "/img/thedarkknight.jpg",
                mcatg: "Action/Adventure",
                type: "PG",
                typeclass: "pg",
                lang: "English",
                subtitle: "Arabic",
                duration: "2 Hours 32 mins",
                cast: "Christian Bale",
                stryline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                mtperience: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtscreen: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "li-disable" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtsuites: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "li-disable" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtjunior: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                advancebk: "adbook"
            },
            {
                id: 10,
                mname: "Joker",
                mimg: "/img/joker.jpg",
                mcatg: "Crime/Drama",
                type: "R-18",
                typeclass: "r18",
                lang: "English",
                subtitle: "Arabic",
                duration: "2 Hours 2 mins",
                cast: "Joaquin Phoenix",
                stryline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                mtperience: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "li-disable" }
                ],
                mtscreen: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "li-disable" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtsuites: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "inactive" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                mtjunior: [
                    { id: "1", time: "5:30am", class: "inactive" },
                    { id: "2", time: "5:30am", class: "inactive" },
                    { id: "3", time: "5:30am", class: "inactive" },
                    { id: "4", time: "5:30am", class: "inactive" },
                    { id: "5", time: "5:30am", class: "li-disable" },
                    { id: "6", time: "5:30am", class: "inactive" },
                    { id: "7", time: "5:30am", class: "inactive" }
                ],
                advancebk: ""
            }]

        }
    }
    onLangChange = (evt) => {
        evt.preventDefault();
        let id = evt.currentTarget.dataset.id;
        let arr = this.state.language;
        for (var i in arr) {
            if (arr[i].class === 'active') {
                arr[i].class = 'inactive';
            }
            else {
                arr[i].class = 'active';
            }
        }
        this.setState({ language: arr });
    }
    openAllExpModel = (evt) => {
        this.setState({ allexpshow: true });
    }
    statechange = (data) => {
        this.setState({ allexpshow: false });
    }
    selectCount = (data, arr) => {
        this.setState({ expcount: data, selectedexp: arr });
    }
    onMlistClick = (evt) => {
        evt.preventDefault();
        let id = evt.currentTarget.dataset.id;
        let arrdata = this.state.movielist.filter(item => { return item.id === parseInt(id) });
        this.props.callback(true, arrdata);

    }
    render() {
        return (
            <React.Fragment>
                <section>
                    <div className="container">
                        <div className="row tab-nav">
                            <ul className="nav nav-pills">
                                {this.state.language.map((item, i) => (
                                    <li className="nav-item" key={i} data-id={item.id} onClick={this.onLangChange}>
                                        <a className={`nav-link tab-sz ${item.class}`} href="#"  ><span className="ln-spans">{item.language}</span></a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mt-5">
                                <div className="row">
                                    <div className="col-md-6 btn-alexp">
                                        <button type="button" className={`btn btn-primary btn-cus ${this.state.expcount === 0 ? '' : ''}`} data-toggle="modal" data-target="#exampleModalCenter" onClick={this.openAllExpModel}>ALL EXPERIENCE
                                            <div className={`${this.state.expcount === 0 ? '' : 'btn-sm-r'}`}>
                                                <span className="count-s">{this.state.expcount !== 0 ? this.state.expcount : ''}</span>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="col-md-3 nxt-shw">
                                        <ul className="nav nav-pills pill-cs clr-ch">
                                            <li className="nav-item">
                                                <a className="nav-link clp" href="#">PROMOTIONS</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3 nxt-shw">
                                        <ul className="nav nav-pills pill-cs nxt clr-ch">
                                            <li className="nav-item">
                                                <a className="nav-link clp" href="#">NEXT 10 SHOWS</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="">
                    <div className="container inner-scroll">
                        <div className="row">
                            <div className="card-group">
                                {this.state.movielist.map((item, i) => (
                                    <div className="col-md-3 col-sm-6 pb-4" key={i} data-id={item.id} onClick={this.onMlistClick}>
                                        <div className="card card-al">
                                            <img className="card-img-top img-h" src={item.mimg} alt="Card image cap" />
                                            {item.advancebk != "" ?
                                                <div className="ad-book"><span className="ad-pd">Advance Booking</span></div> : null}
                                            <div className={item.typeclass}><span>{item.type}</span></div>
                                            <div className="card-body">
                                                <ul className="cr-ul">
                                                    <li className="m-txt"><b>{item.mname}</b></li>
                                                    <li className="m-txt">{item.mcatg}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                {this.state.allexpshow ?
                    <AllExpModal show={this.state.allexpshow} count={this.state.expcount} selectarr={this.state.selectedexp} callback={this.statechange} callgetcount={this.selectCount} /> : null}
            </React.Fragment>
        )
    }
}

export default Movielist;